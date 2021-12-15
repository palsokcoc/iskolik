
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import sinavSonuclari from "../data/sinav-sonuclari";
import sertifikaListesi from "../data/sertifika-listesi";
import yetenekListesi from "../data/yetenek-listesi";




export const SinavSonuclariTable = () => {
  const TableRow = (props) => {
    const { ad, sonuc } = props;

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {ad}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {sonuc}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <tbody>
            {sinavSonuclari.map(t => <TableRow key={`sinavSonucu-${t.ilanId}`} {...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};


export const SertifikaListesiTable = () => {
  const TableRow = (props) => {
    const { ad } = props;

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {ad}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <tbody>
            {sertifikaListesi.map(t => <TableRow key={`sertifika-${t.ilanId}`} {...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};


export const YetenekListesiTable = () => {
  const TableRow = (props) => {
    const { kategori, aciklama } = props;

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {kategori}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {aciklama}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <tbody>
            {yetenekListesi.map(t => <TableRow key={`yetenek-${t.ilanId}`} {...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};