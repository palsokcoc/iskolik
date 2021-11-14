import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, InputGroup, Row, Button } from '@themesberg/react-bootstrap';
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Form } from '@themesberg/react-bootstrap';
import { ElemanAramaSonucuTable } from "../components/Tables";

export default () => {
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Kurumsal İşlemler</Breadcrumb.Item>
            <Breadcrumb.Item active>Eleman Ara</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Eleman Arama</h4>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <Form className="navbar-search">
          <InputGroup className="input-group-merge search-bar">
            <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
            <Form.Control type="text" placeholder="Ara" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" type="submit">Ara</Button>
          </InputGroup>
        </Form>
      </div>

      <p/>

      <ElemanAramaSonucuTable />
    </>
  );
};
