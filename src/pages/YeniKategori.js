import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@themesberg/react-bootstrap';
import { YeniKategoriForm } from "../components/Forms";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { BACKEND_BASE_URL, handleResponse, handleError } from "./globals.js";
import { Routes } from "../routes";

export default (props) => {
  const [kategori, setKategori] = useState({
    kategoriId: null,
    ad: "",
    aciklama: "",
    ataKategori: null
  });

  const [kategoriler, setKategoriler] = useState([]);

  useEffect(() => {
    getKategoriler().then((_kategoriler) => {
      setKategoriler(_kategoriler.data);
    });
  }, []);

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
    debugger;
    return fetch(BACKEND_BASE_URL + "/kategori" + (kategori.kategoriId || ""), {
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
          <YeniKategoriForm kategori={kategori} kategoriler={kategoriler} onChange={handleChange} onFormSubmit={handleFormSubmit}/>
        </Col>
      </Row>
    </>
  );
};
