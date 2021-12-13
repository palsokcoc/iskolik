import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, Button } from '@themesberg/react-bootstrap';
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Form } from '@themesberg/react-bootstrap';
import { ElemanAramaSonucuTable } from "../tables/ElemanAramaTable.js";
import * as elemanAramaApi from "../api/elamanAramaApi.js";
import { Routes } from "../../../routes.js";

export default (props) => {
  const [elemanlar, setElemanlar] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    elemanAramaApi.getElemanlar(filter, pageNumber).then((_elemanlar) => {
      setElemanlar(_elemanlar.data);
    });
  }, [filter, pageNumber]);

  function handleProfilGoruntule(event) {
    return props.history.push(Routes.Profil.path + "/" + event.target.name);
  }

  function handlePaginationChange(pageNumber) {
    setPageNumber(pageNumber);
  }

  function handleFormSubmit() {
    setFilter(document.getElementById("arama").value);
  }

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
        <Form className="navbar-search" onSubmit={handleFormSubmit}>
          <InputGroup className="input-group-merge search-bar">
            <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
            <Form.Control type="text" placeholder="Ara" id="arama" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" type="submit">Ara</Button>
          </InputGroup>
        </Form>
      </div>

      <p />

      <ElemanAramaSonucuTable elemanlar={elemanlar} handleProfilGoruntule={handleProfilGoruntule} handlePaginationChange={handlePaginationChange} />
    </>
  );
};
