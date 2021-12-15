import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";
import IskolikPagination from "../../common/IskolikPagination.js";
import { DATE_FORMAT } from "../../common/globals";
import moment from "moment-timezone";
import 'moment/locale/tr';
moment.locale("tr");

export const EnCokBasvuruYapilanIlanlar = (props) => {

    const TableRow = (props) => {
        const { ilanId, kurum, unvan, yer, durum, yayinTarihi, adet
        } = props;

        return (
            <tr>
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
                        {yer}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {durum}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {moment(yayinTarihi).format(DATE_FORMAT)}
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
                            <th className="border-bottom">Kurum</th>
                            <th className="border-bottom">Ünvan</th>
                            <th className="border-bottom">Yer</th>
                            <th className="border-bottom">Durum</th>
                            <th className="border-bottom">Yayın Tarihi</th>
                            <th className="border-bottom">Başvuru Sayısı</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.ilanlar.map(t => <TableRow key={`ilan-${t.ilanId}`} {...t} />)}
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

