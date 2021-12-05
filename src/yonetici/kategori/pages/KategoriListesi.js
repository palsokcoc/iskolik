
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { KategoriListesiTable } from "../tables/KategoriTable";
import { Button } from '@themesberg/react-bootstrap';
import { handleResponse, handleError } from "../../../common/globals";
import { Link } from 'react-router-dom';
import { Routes } from "../../../routes";
import * as kategoriApi from "../api/kategoriApi";
import { toast } from 'react-toastify';

export default () => {
  const [kategoriler, setKategoriler] = useState([]);

  useEffect(() => {
    kategoriApi.getKategoriler().then((_kategoriler) => {
      setKategoriler(_kategoriler.data);
    });
  }, []);

  function handleDeleteKategori(event) {
    kategoriApi.deleteKategori(event.target.name)
      .then(response => handleResponse(response))
      .then(
        response => {
          toast(response.message);
          setKategoriler(kategoriler.filter(kategori => kategori.kategoriId !== response.data[0].kategoriId));
        }
      )
      .catch(response => handleError(response));
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

      <KategoriListesiTable kategoriler={kategoriler} handleDeleteKategori={handleDeleteKategori} />
      <p />
      <Card.Link as={Link} to={Routes.YeniKategori.path} className="fw-normal">
        <Button variant="primary">Kategori Ekle</Button>
      </Card.Link>
    </>
  );
};
