import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../../routes";
import IskolikPagination from "../../../common/IskolikPagination.js";

export const KategoriListesiTable = (props) => {
    const TableRow = (props) => {
        const { kategoriId, ad, aciklama, ataKategori } = props;

        return (
            <tr>
                <td>
                    <Card.Link as={Link} to={Routes.MevcutKategori.path + "/" + kategoriId} className="fw-normal">
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
                        {ataKategori ? ataKategori.ad : "-"}
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
                            <Dropdown.Item className="text-danger" name={kategoriId} onClick={props.handleDeleteKategori}>
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
                            <th className="border-bottom">İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.kategoriler.map(t => <TableRow handleDeleteKategori={props.handleDeleteKategori} key={`kategori-${t.kategoriId}`} {...t} />)}
                    </tbody>
                </Table>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-right justify-content-between">
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
