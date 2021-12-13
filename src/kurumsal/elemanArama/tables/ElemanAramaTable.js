import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../../routes";
import IskolikPagination from "../../../common/IskolikPagination.js";
import { DATE_FORMAT } from "../../../common/globals";
import moment from "moment-timezone";
import 'moment/locale/tr';
moment.locale("tr");

export const ElemanAramaSonucuTable = (props) => {
    const TableRow = (props) => {
        const { kullaniciId, ad, soyad, dogumTarihi, cinsiyet, profil } = props;

        return (
            <tr>
                <td>
                    <Card.Link as={Link} to={Routes.Profil.path + "/" + kullaniciId} className="fw-normal">
                        {ad} &nbsp; {soyad}
                    </Card.Link>
                </td>
                <td>
                    <span className="fw-normal">
                        {moment(dogumTarihi).format(DATE_FORMAT)}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {cinsiyet}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {profil.meslek}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {profil.unvan}
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
                            <Dropdown.Item name={kullaniciId} onClick={props.handleProfilGoruntule}>
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
                            <th className="border-bottom">Meslek</th>
                            <th className="border-bottom">Ünvan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.elemanlar.map(t => <TableRow key={`eleman-${t.kullaniciId}`} {...t} handleProfilGoruntule={props.handleProfilGoruntule} />)}
                    </tbody>
                </Table>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                    <Nav>
                        <IskolikPagination className="mb-2 mb-lg-0" withIcons handlePaginationChange={props.handlePaginationChange}>
                        </IskolikPagination>
                    </Nav>
                    <small className="fw-bold">
                        {(props.pageNumber - 1) * 10 + 1} -  {(props.pageNumber) * 10}
                    </small>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};
