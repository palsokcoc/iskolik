import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { BasvuruListesiTable } from "../tables/BasvuruTable";
import { Button } from '@themesberg/react-bootstrap';
import { handleResponse, handleError } from "../../../common/globals";
import { Link, Redirect } from 'react-router-dom';
import { Routes } from "../../../routes";
import * as basvuruApi from "../api/basvuruApi";
import { toast } from 'react-toastify';

export default (props) => {
  const [basvurular, setBasvurular] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    basvuruApi.getBasvurular(pageNumber).then((_basvurular) => {
      setBasvurular(_basvurular.data);
    });
  }, [pageNumber]);

  function handleBasvuruIptalEt(event) {
    basvuruApi.basvuruIptalEt(event.target.name)
      .then(response => handleResponse(response))
      .then(response => { toast(response.message) })
      .then(
        setBasvurular(basvurular.map(_basvuru => {
          if (_basvuru.basvuruId === Number.parseInt(event.target.name)) {
            return { ..._basvuru, durum: 'IPTAL' };
          } else { return _basvuru }
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
            <Breadcrumb.Item>Başvuru İşlemleri</Breadcrumb.Item>
            <Breadcrumb.Item active>Başvurularım</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Başvuru Listesi</h4>
        </div>
      </div>

      <BasvuruListesiTable basvurular={basvurular} handleBasvuruIptalEt={handleBasvuruIptalEt} handleIlanGoruntule={handleIlanGoruntule} handlePaginationChange={handlePaginationChange} pageNumber={pageNumber} />
    </>
  );
};
