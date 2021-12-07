import React, { useState, useEffect } from "react";
import { Col, Row } from '@themesberg/react-bootstrap';
import { handleResponse, handleError, fixTimeZoneOffset } from "../../../common/globals.js";
import { Routes } from "../../../routes";
import { MevcutIlanForm } from "../forms/IlanForms";
import * as ilanApi from "../api/ilanApi.js";
import { toast } from 'react-toastify';

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
    ilanApi.getIlan(props.match.params.ilanId)
      .then(_ilan => setIlan(_ilan.data[0]));
  }, [props.match.params.ilanId]);

  function handleChange({ target }) {
    // { target } <--> const target = event.target; // object destructering
    //    if (target.name === "ataIlanId") {
    //    setIlan({ ...ilan, ataIlan: { ilanId: target.value } });
    //} else {
    setIlan({ ...ilan, [target.name]: target.value });
    //}
  }

  function handleChangeYayinTarihi(tarih) {
    setIlan({ ...ilan, yayinTarihi: fixTimeZoneOffset(tarih) });
  }

  function handleChangeSonBasvuruTarihi(tarih) {
    setIlan({ ...ilan, sonBasvuruTarihi: fixTimeZoneOffset(tarih) });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    ilanApi.saveIlan(ilan)
      .then(handleResponse)
      .then(response => {
        toast(response.message);
        props.history.push(Routes.IlanListesi.path);
      })
      .catch(handleError);
  }

  function handleIlanIptalEt() {
    ilanApi.ilanIptalEt(ilan.ilanId)
      .then(handleResponse)
      .then(response => {
        toast(response.message);
        props.history.push(Routes.IlanListesi.path);
      })
      .catch(handleError);
  }

  function handleIlanYayinla() {
    ilanApi.ilanYayinla(ilan.ilanId)
      .then(handleResponse)
      .then(response => {
        toast(response.message);
        props.history.push(Routes.IlanListesi.path);
      })
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
          İlan No: {ilan.ilanId}
          <MevcutIlanForm ilan={ilan} handleChange={handleChange} handleFormSubmit={handleFormSubmit} handleIlanIptalEt={handleIlanIptalEt} handleIlanYayinla={handleIlanYayinla} handleChangeYayinTarihi={handleChangeYayinTarihi} handleChangeSonBasvuruTarihi={handleChangeSonBasvuruTarihi} />
        </Col>
      </Row>
    </>
  );
};
