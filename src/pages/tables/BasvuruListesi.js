
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';

import { BasvuruListesiTable } from "../../components/Tables";




export default () => {
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

      <BasvuruListesiTable />
    </>
  );
};
