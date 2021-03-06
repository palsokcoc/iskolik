import React, { useState, useEffect } from "react";
import { Col, Row } from '@themesberg/react-bootstrap';
import { handleResponse, handleError } from "../../../common/globals.js";
import { Routes } from "../../../routes";
import { MevcutKategoriForm } from "../forms/KategoriForms";
import * as kategoriApi from "../api/kategoriApi.js";
import { toast } from 'react-toastify';

export default (props) => {
  const [kategori, setKategori] = useState({
    kategoriId: null,
    ad: "",
    aciklama: "",
    ataKategori: {
      kategoriId: null,
      ad: ""
    }
  });
  const [kategoriler, setKategoriler] = useState([]);

  useEffect(() => {
    kategoriApi.getKategori(props.match.params.kategoriId)
      .then(_kategori => setKategori(_kategori.data[0]));
    kategoriApi.getKategoriler()
      .then(
        _kategoriler => setKategoriler(
          _kategoriler.data.filter(_kategori => _kategori.kategoriId !== kategori.kategoriId)
        )
      );
  }, [props.match.params.kategoriId, kategori.kategoriId]);

  function handleChange({ target }) {
    // { target } <--> const target = event.target; // object destructering
    if (target.name === "ataKategoriId") {
      setKategori({ ...kategori, ataKategori: { kategoriId: target.value } });
    } else {
      setKategori({ ...kategori, [target.name]: target.value });
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    kategoriApi.saveKategori(kategori)
      .then(handleResponse)
      .then(response => {
        toast(response.message);
        props.history.push(Routes.KategoriListesi.path);
      })
      .catch(handleError);
  }

  function handleDeleteKategori() {
    kategoriApi.deleteKategori(kategori.kategoriId)
      .then(handleResponse)
      .then(response => {
        toast(response.message);
        props.history.push(Routes.KategoriListesi.path);
      })
      .catch(handleError);
  }

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <h4>Kategori Detay??</h4>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          {kategori.ad}
          <MevcutKategoriForm kategori={kategori} kategoriler={kategoriler} handleChange={handleChange} handleFormSubmit={handleFormSubmit} handleDeleteKategori={handleDeleteKategori} />
        </Col>
      </Row>
    </>
  );
};
