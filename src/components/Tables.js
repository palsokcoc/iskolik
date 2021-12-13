
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import isIlanlariAramaSonucu from "../data/is-ilanlari arama-sonucu";
import basvurular from "../data/basvurular";
import enCokArananOzellikler from "../data/enCokArananOzellikler";
import sinavSonuclari from "../data/sinav-sonuclari";
import sertifikaListesi from "../data/sertifika-listesi";
import yetenekListesi from "../data/yetenek-listesi";

export const IlanListesiAramaSonucuTable = () => {
  const TableRow = (props) => {
    const { ilanId, kurum, unvan, yayinTarihi, sonBasvuruTarihi, durum } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.IlanAra.path} className="fw-normal">
            {ilanId}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {kurum}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {unvan}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {yayinTarihi}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {sonBasvuruTarihi}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {durum}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> Görüntüle
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Başvur
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">İlan No</th>
              <th className="border-bottom">Kurum</th>
              <th className="border-bottom">Ünvan</th>
              <th className="border-bottom">Yayın Tarihi</th>
              <th className="border-bottom">Son Başvuru Tarihi</th>
              <th className="border-bottom">Durum</th>
              <th className="border-bottom">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {isIlanlariAramaSonucu.map(t => <TableRow key={`isIlaniAramaSonucu-${t.ilanId}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            1-10
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const BasvuruListesiTable = () => {
  const TableRow = (props) => {
    const { ilanId, kurum, unvan, basvuruTarihi, durum } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.BasvuruListesi.path} className="fw-normal">
            {ilanId}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {kurum}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {unvan}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {basvuruTarihi}
          </span>
        </td>
        <td>
          <span className={"fw-normal text-normal"}>
            {durum}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> İlanı Görüntüle
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> İptal Et
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">İlan No</th>
              <th className="border-bottom">Kurum</th>
              <th className="border-bottom">Ünvan</th>
              <th className="border-bottom">Başvuru Tarihi</th>
              <th className="border-bottom">Durum</th>
              <th className="border-bottom">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {basvurular.map(t => <TableRow key={`basvuru-${t.ilanId}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            1-10
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};


export const EnCokArananOzelliklerTable = () => {

  const TableRow = (props) => {
    const { ozellik, adet } = props;

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {ozellik}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {adet}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Özellik</th>
              <th className="border-bottom">İlan Sayısı</th>
            </tr>
          </thead>
          <tbody>
            {enCokArananOzellikler.map(t => <TableRow key={`enCokArananOzellik-${t.ilanId}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            1-10
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};


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