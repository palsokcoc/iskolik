import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@themesberg/react-bootstrap';
import { ProfileCardWidget } from "../components/Widgets";
import { MevcutKategoriForm } from "../components/Forms";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { BACKEND_BASE_URL, handleResponse, handleError } from "./globals.js";
import { Routes } from "../routes";

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
    getKategori(props.match.params.kategoriId)
      .then(_kategori => setKategori(_kategori.data[0]));
    getKategoriler()
      .then(_kategoriler => setKategoriler(
        _kategoriler.data.filter(_kategori => _kategori.kategoriId !== kategori.kategoriId)
      )
    );
  }, [props.match.params.kategoriId, kategori.kategoriId]);

  function getKategori(kategoriId) {
      return fetch(BACKEND_BASE_URL + "/kategori/" + kategoriId)
        .then(handleResponse)
        .catch(handleError);
  }
  function getKategoriler() {
      return fetch(BACKEND_BASE_URL + "/kategori")
        .then(handleResponse)
        .catch(handleError);
  }
  function handleChange({ target }) {
    // { target } <--> const target = event.target; // object destructering
    setKategori({ ...kategori, [target.name]: target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    saveKategori(kategori);
  }

  function saveKategori(kategori) {
    return fetch(BACKEND_BASE_URL + "/kategori" + ("/"+kategori.kategoriId || ""), {
    method: kategori.kategoriId ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json"},
    body: JSON.stringify({
      ...kategori,
      // Parse authorId to a number (in case it was sent as a string).
      kategoriId: parseInt(kategori.kategoriId, 10),
      ataKategori: {kategoriId: kategori.ataKategoriId && Number.parseInt(kategori.ataKategoriId)}
    })
  })
    .then(handleResponse).then(()=>props.history.push(Routes.KategoriListesi.path))
    .catch(handleError);
  }
  
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <h4>Kategori Detayı</h4>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          {kategori.ad}
          <MevcutKategoriForm kategori={kategori} kategoriler={kategoriler} onChange={handleChange} onFormSubmit={handleFormSubmit}/>
        </Col>
      </Row>
    </>
  );
};
