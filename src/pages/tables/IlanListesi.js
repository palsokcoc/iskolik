
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { BACKEND_BASE_URL, handleResponse, handleError } from "../../common/globals";
import { IlanListesiTable } from "../../components/Tables";
import { Link } from 'react-router-dom';
import { Button } from '@themesberg/react-bootstrap';
import { Routes } from "../../routes";

export default () => {
  const [ilanlar, setIlanlar] = useState([]);

  useEffect(() => {
    getIlanlar().then((_ilanlar) => {
      setIlanlar(_ilanlar.data);
    });
  }, []);

  function getIlanlar() {
    return fetch(BACKEND_BASE_URL + "/ilan")
      .then(handleResponse)
      .catch(handleError);
  }

  function deleteIlan(event) {
    event.preventDefault();
    return fetch(BACKEND_BASE_URL + "/ilan/" + event.target.name, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then(handleResponse)
      .then(
        (response) => {
          setIlanlar(ilanlar.filter(ilan => ilan.ilanId !== response.data[0].ilanId));
        }
      )
      .catch(handleError);

  }

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>İlan İşlemleri</Breadcrumb.Item>
            <Breadcrumb.Item active>İlanlarım</Breadcrumb.Item>
          </Breadcrumb>
          <h4>İlan Listesi</h4>
        </div>
      </div>

      <IlanListesiTable ilanlar={ilanlar} handleIlanSil={deleteIlan} />
      <p />
      <Card.Link as={Link} to={Routes.YeniIlan.path} className="fw-normal">
        <Button variant="primary">İlan Ekle</Button>
      </Card.Link>
    </>
  );
};
