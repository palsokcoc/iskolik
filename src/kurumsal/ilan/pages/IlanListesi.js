import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { IlanListesiTable } from "../tables/IlanTable";
import { Button } from '@themesberg/react-bootstrap';
import { handleResponse, handleError } from "../../../common/globals";
import { Link, Redirect } from 'react-router-dom';
import { Routes } from "../../../routes";
import * as ilanApi from "../api/ilanApi";
import { toast } from 'react-toastify';

export default (props) => {
  const [ilanlar, setIlanlar] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    ilanApi.getIlanlar(pageNumber).then((_ilanlar) => {
      setIlanlar(_ilanlar.data);
    });
  }, [pageNumber]);

  function handleIlanIptalEt(event) {
    ilanApi.ilanIptalEt(event.target.name)
      .then(response => handleResponse(response))
      .then(response => { toast(response.message) })
      .then(
        setIlanlar(ilanlar.map(_ilan => {
          if (_ilan.ilanId === Number.parseInt(event.target.name)) {
            return { ..._ilan, durum: 'IPTAL' };
          } else { return _ilan }
        }))
      )
      .catch(response => handleError(response));
  }

  function handleIlanYayinla(event) {
    ilanApi.ilanYayinla(event.target.name)
      .then(response => handleResponse(response))
      .then(
        response => {
          toast(response.message);
        }
      )
      .then(
        setIlanlar(ilanlar.map(_ilan => {
          if (_ilan.ilanId === Number.parseInt(event.target.name)) {
            return { ..._ilan, durum: 'AKTIF' };
          } else { return _ilan }
        }))
      )
      .catch(response => handleError(response));
  }

  function handleIlanGoruntule(event) {
    return props.history.push(Routes.MevcutIlan.path + "/" + event.target.name);
  }

  function handlePaginationChange(pageNumber) {
    setPageNumber(pageNumber);
  }

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Kurumsal İşlemler</Breadcrumb.Item>
            <Breadcrumb.Item active>İlan Listesi</Breadcrumb.Item>
          </Breadcrumb>
          <h4>İlan Listesi</h4>
        </div>
      </div>

      <IlanListesiTable ilanlar={ilanlar} handleIlanIptalEt={handleIlanIptalEt} handleIlanYayinla={handleIlanYayinla} handleIlanGoruntule={handleIlanGoruntule} handlePaginationChange={handlePaginationChange} pageNumber={pageNumber} />
      <p />
      <Card.Link as={Link} to={Routes.YeniIlan.path} className="fw-normal">
        <Button variant="primary">İlan Ekle</Button>
      </Card.Link>
    </>
  );
};
