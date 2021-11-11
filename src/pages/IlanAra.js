import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Button } from '@themesberg/react-bootstrap';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Form } from '@themesberg/react-bootstrap';
import { IlanListesiAramaSonucuTable } from "../components/Tables";

export default () => {
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
        <Form className="navbar-search">
          <Row>
            <Col md={2} className="mb-3">
              <Form.Label column="true">Açıklama:</Form.Label>
            </Col>
            <Col md={5} className="mb-3">
              <Form.Control type="text" placeholder="Anahtar Kelimeler" />
            </Col>
            <Col md={1} className="mb-3">
              <Form.Label column="true">Durum:&nbsp;&nbsp;&nbsp;</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Select defaultValue="0">
                <option value="0" selected></option>
                <option value="1">Aktif</option>
                <option value="2">Tamamlandı</option>
              </Form.Select>
            </Col>
            <Col md={1} className="mb-3">
              <Button variant="primary" type="submit">Ara</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <p/>

      <IlanListesiAramaSonucuTable />
    </>
  );
};
