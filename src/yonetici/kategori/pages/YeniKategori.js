import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@themesberg/react-bootstrap';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Routes } from "../../../routes";
import { handleResponse, handleError } from "../../../common/globals.js"; import { YeniKategoriForm } from "../forms/KategoriForms";
import * as kategoriApi from "../api/kategoriApi.js";

export default (props) => {
  const [kategori, setKategori] = useState({
    kategoriId: null,
    ad: "",
    aciklama: "",
    ataKategori: null
  });

  const [kategoriler, setKategoriler] = useState([]);

  useEffect(() => {
    kategoriApi.getKategoriler().then((_kategoriler) => {
      setKategoriler(_kategoriler.data);
    });
  }, []);

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
      .then(() => props.history.push(Routes.KategoriListesi.path))
      .catch(handleError);
  }

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Yönetici Paneli</Breadcrumb.Item>
            <Breadcrumb.Item active>Kategori Ekle</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Yeni Kategori</h4>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <YeniKategoriForm kategori={kategori} kategoriler={kategoriler} handleChange={handleChange} handleFormSubmit={handleFormSubmit} />
        </Col>
      </Row>
    </>
  );
};
