import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@themesberg/react-bootstrap';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Routes } from "../../../routes";
import { handleResponse, handleError, fixTimeZoneOffset } from "../../../common/globals.js";
import { YeniIlanForm } from "../forms/IlanForms";
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
  }, []);

  function handleChange({ target }) {
    // { target } <--> const target = event.target; // object destructering
    //    if (target.name === "ataIlanId") {
    //    setIlan({ ...ilan, ataIlan: { ilanId: target.value } });
    //} else {
    setIlan({ ...ilan, [target.name]: target.value });
    // }
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

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Kurumsal İşlemler</Breadcrumb.Item>
            <Breadcrumb.Item active>İlan Ekle</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Yeni Ilan</h4>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <YeniIlanForm ilan={ilan} handleChange={handleChange} handleFormSubmit={handleFormSubmit} handleChangeYayinTarihi={handleChangeYayinTarihi} handleChangeSonBasvuruTarihi={handleChangeSonBasvuruTarihi} />
        </Col>
      </Row>
    </>
  );
};
