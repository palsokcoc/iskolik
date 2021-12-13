import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, Button, Row, Col } from '@themesberg/react-bootstrap';
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Form } from '@themesberg/react-bootstrap';
import { IlanAramaSonucuTable } from "../tables/IlanAramaTable.js";
import * as ilanAramaApi from "../api/ilanAramaApi.js";
import { Routes } from "../../../routes.js";
import { handleError, handleResponse } from "../../../common/globals.js";
import { toast } from 'react-toastify';

export default (props) => {
  const [ilanlar, setIlanlar] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [filter, setFilter] = useState("");
  const [durum, setDurum] = useState("AKTIF");

  useEffect(() => {
    ilanAramaApi.getIlanlar(filter, durum, pageNumber).then((_ilanlar) => {
      setIlanlar(_ilanlar.data);
    });
  }, [filter, durum, pageNumber]);

  function handleIlanGoruntule(event) {
    return props.history.push(Routes.MevcutIlan.path + "/" + event.target.name);
  }

  function handleIlanaBasvur(event) {
    return ilanAramaApi.ilanaBasvur(event.target.name)
      .then(response => handleResponse(response))
      .then(response => {
        toast(response.message)
      })
      .catch(handleError);
  }

  function handlePaginationChange(pageNumber) {
    setPageNumber(pageNumber);
  }

  function handleFormSubmit() {
    setFilter(document.getElementById("arama").value);
    setDurum(document.getElementById("durum").value);
  }

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Başvuru İşlemleri</Breadcrumb.Item>
            <Breadcrumb.Item active>İlan Ara</Breadcrumb.Item>
          </Breadcrumb>
          <h4>İlan Arama</h4>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <Form className="navbar-search" onSubmit={handleFormSubmit}>
          <Row>
            <Col md={2} className="mb-3">
              <Form.Label column="true">Açıklama:</Form.Label>
            </Col>
            <Col md={5} className="mb-3">
              <Form.Control type="text" placeholder="Anahtar Kelimeler" id="arama" />
            </Col>
            <Col md={1} className="mb-3">
              <Form.Label column="true">Durum:&nbsp;&nbsp;&nbsp;</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Select defaultValue="AKTIF" id="durum">
                <option value=""></option>
                <option value="BEKLEMEDE">Beklemede</option>
                <option value="AKTIF">Aktif</option>
                <option value="IPTAL">İptal</option>
                <option value="TAMAMLANDI">Tamamlandı</option>
              </Form.Select>
            </Col>
            <Col md={1} className="mb-3">
              <Button variant="primary" type="submit">Ara</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <p />

      <IlanAramaSonucuTable ilanlar={ilanlar} handleIlanGoruntule={handleIlanGoruntule} handleIlanaBasvur={handleIlanaBasvur} handlePaginationChange={handlePaginationChange} />
    </>
  );
};
