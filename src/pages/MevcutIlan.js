import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@themesberg/react-bootstrap';
import { YeniIlanForm } from "../components/Forms";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { BACKEND_BASE_URL, handleResponse, handleError } from "./globals.js";
import { Routes } from "../routes";

export default (props) => {
  const [ilan, setIlan] = useState({
    ilanId: null,
    kullanici: null,
    unvan: "",
	  isPartTime: false,
	  yer: "",
	  girisTarihi: "",
	  yayinTarihi: "",
	  iptalTarihi: "",
	  sonBasvuruTarihi: "",
	  basvuruLimiti: "",
	  aciklama: "",
	  zorunluOzellikler: "",
	  tercihenOzellikler: "",
	  minMaas: 0,
	  maxMaas: 0,
	  durum: null
  });

  useEffect(() => {
    getIlan(props.match.params.ilanId)
      .then(_ilan => setIlan(_ilan.data[0]));
  }, [props.match.params.ilanId]);

  function getIlan(ilanId) {
      return fetch(BACKEND_BASE_URL + "/ilan/" + ilanId)
        .then(handleResponse)
        .catch(handleError);
  }

  function handleChange({ target }) {
    // { target } <--> const target = event.target; // object destructering
    setIlan({ ...ilan, [target.name]: target.value });
  }

  function handleChangeYayinTarihi(tarih) {
    setIlan({ ...ilan, yayinTarihi: tarih });
  }

  function handleChangeSonBasvuruTarihi(tarih) {
    setIlan({ ...ilan, sonBasvuruTarihi: tarih });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    saveIlan(ilan);
  }

  function saveIlan(ilan) {
    debugger;
    return fetch(BACKEND_BASE_URL + "/ilan" + ("/"+ilan.ilanId || ""), {
    method: ilan.ilanId ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json"},
    body: JSON.stringify({
      ...ilan,
      // Parse authorId to a number (in case it was sent as a string).
      ilanId: parseInt(ilan.ilanId, 10),
      kullanici: { type: "Kurumsal", kullaniciId: Number.parseInt(11) }
    })
  })
    .then(handleResponse).then(()=>props.history.push(Routes.IlanListesi.path))
    .catch(handleError);
  }
  
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <h4>İlan Detayı</h4>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <YeniIlanForm ilan={ilan} onChange={handleChange} onFormSubmit={handleFormSubmit} onYayinTarihiChange={handleChangeYayinTarihi} onSonBasvuruTarihiChange={handleChangeSonBasvuruTarihi}/>
        </Col>
      </Row>
    </>
  );
};
