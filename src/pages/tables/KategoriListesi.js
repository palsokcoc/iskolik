
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Card } from '@themesberg/react-bootstrap';

import { KategoriListesiTable } from "../../components/Tables";
import { Button } from '@themesberg/react-bootstrap';
import { BACKEND_BASE_URL, handleResponse, handleError } from "../globals.js";
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

export default () => {
  const [kategoriler, setKategoriler] = useState([]);

  useEffect(() => {
    getKategoriler().then((_kategoriler) => {
      setKategoriler(_kategoriler.data);
    });
  }, []);

  function getKategoriler() {
      return fetch(BACKEND_BASE_URL + "/kategori")
        .then(handleResponse)
        .catch(handleError);
  }
  
  function deleteKategori(event) {
    event.preventDefault();
    return fetch(BACKEND_BASE_URL + "/kategori/" + event.target.name, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then(handleResponse)
      .then(
        (response) => {
          debugger;
          setKategoriler(kategoriler.filter(kategori => kategori.kategoriId !== response.data[0].kategoriId));
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
            <Breadcrumb.Item>Yönetici Paneli</Breadcrumb.Item>
            <Breadcrumb.Item active>Kategori Listesi</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Kategori Listesi</h4>
        </div>
      </div>

      <KategoriListesiTable kategoriler={kategoriler} handleKategoriSil={deleteKategori}/>
      <p />
      <Card.Link as={Link} to={Routes.YeniKategori.path} className="fw-normal">
        <Button variant="primary">Kategori Ekle</Button>
      </Card.Link>
    </>
  );
};
