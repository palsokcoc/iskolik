import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@themesberg/react-bootstrap';
import { ProfileCardWidget } from "../components/Widgets";
import { YeniKategoriForm } from "../components/Forms";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';

export default () => {
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
          <YeniKategoriForm />
        </Col>
      </Row>
    </>
  );
};
