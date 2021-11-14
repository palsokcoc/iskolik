
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import isIlanlari from "../data/is-ilanlari";
import isIlanlariAramaSonucu from "../data/is-ilanlari arama-sonucu";
import basvurular from "../data/basvurular";
import kategoriler from "../data/kategoriler";
import enCokArananOzellikler from "../data/enCokArananOzellikler";
import elemanlar from "../data/eleman-arama-sonucu";

export const IlanListesiTable = () => {
  const TableRow = (props) => {
    const { ilanId, unvan, yayinTarihi, sonBasvuruTarihi, durum } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.IlanDetay.path} className="fw-normal">
            {ilanId}
          </Card.Link>
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
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Yayınla
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
            <th className="border-bottom">Ünvan</th>
              <th className="border-bottom">Yayın Tarihi</th>
              <th className="border-bottom">Son Başvuru Tarihi</th>
              <th className="border-bottom">Durum</th>
              <th className="border-bottom">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {isIlanlari.map(t => <TableRow key={`isIlani-${t.ilanId}`} {...t} />)}
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

export const IlanListesiAramaSonucuTable = () => {
  const TableRow = (props) => {
    const { ilanId, kurum, unvan, yayinTarihi, sonBasvuruTarihi, durum } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.IlanDetay.path} className="fw-normal">
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
          <Card.Link as={Link} to={Routes.IlanDetay.path} className="fw-normal">
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


export const KategoriListesiTable = () => {
  const TableRow = (props) => {
    const { kategoriId, ad, aciklama, ataKategori, durum } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.KategoriDetay.path} className="fw-normal">
            {kategoriId}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {ad}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {aciklama}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {ataKategori}
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
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Sil
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
              <th className="border-bottom">No</th>
              <th className="border-bottom">Ad</th>
              <th className="border-bottom">Açıklama</th>
              <th className="border-bottom">Ata Kategori</th>
              <th className="border-bottom">Durum</th>
              <th className="border-bottom">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {kategoriler.map(t => <TableRow key={`kategori-${t.kategoriId}`} {...t} />)}
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


export const ElemanAramaSonucuTable = () => {
  const TableRow = (props) => {
    const { ad, soyad, dogumTarihi, cinsiyet, ozgecmis } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.IlanDetay.path} className="fw-normal">
            {ad} &nbsp; {soyad}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {dogumTarihi}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {cinsiyet}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {ozgecmis}
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
                <FontAwesomeIcon icon={faEye} className="me-2" /> Profili Aç
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
              <th className="border-bottom">Ad</th>
              <th className="border-bottom">Doğum Tarihi</th>
              <th className="border-bottom">Cinsiyet</th>
              <th className="border-bottom">Özgeçmiş</th>
            </tr>
          </thead>
          <tbody>
            {elemanlar.map(t => <TableRow key={`eleman-${t.ilanId}`} {...t} />)}
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
