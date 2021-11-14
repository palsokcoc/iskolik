
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';

import { KategoriListesiTable } from "../../components/Tables";
import { Card, Button } from '@themesberg/react-bootstrap';




export default () => {
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

      <KategoriListesiTable />
      <p/>
      <Button variant="primary">Kategori Ekle</Button>
    </>
  );
};
