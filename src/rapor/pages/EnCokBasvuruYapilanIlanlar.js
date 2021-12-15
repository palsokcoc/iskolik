
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import * as raporApi from '../api/raporApi.js'
import { EnCokBasvuruYapilanIlanlar } from "../tables/EnCokBasvuruYapilanIlanlar";
import { handleResponse, handleError, fixTimeZoneOffset, isTodayOrFutureDate, isTodayOrPastDate, ISO_DATE_FORMAT } from "../../common/globals.js";

export default () => {
  const [ilanlar, setIlanlar] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [ilkTarih, setIlkTarih] = useState("");
  const [sonTarih, setSonTarih] = useState("");

  useEffect(() => {
    raporApi.getEnCokBasvuruYapilanIlanlar(ilkTarih, sonTarih, pageNumber).then((_ilanlar) => {
      setIlanlar(_ilanlar.data);
    });
  }, [ilkTarih, sonTarih, pageNumber]);

  function handlePaginationChange(pageNumber) {
    setPageNumber(pageNumber);
  }

  function handleChangeIlkTarih(tarih) {
    setIlkTarih(moment(fixTimeZoneOffset(tarih)).format(ISO_DATE_FORMAT));
  }

  function handleChangeSonTarih(tarih) {
    setSonTarih(moment(fixTimeZoneOffset(tarih)).format(ISO_DATE_FORMAT));
  }

  function handleAramaYap() {
    raporApi.getEnCokBasvuruYapilanIlanlar(ilkTarih, sonTarih, pageNumber).then((_ilanlar) => {
      setIlanlar(_ilanlar.data);
    });
  }

  function handlePDFGoster() {
    raporApi.openEnCokBasvuruYapilanIlanlarRaporu(ilkTarih, sonTarih, pageNumber);
  };

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Raporlar</Breadcrumb.Item>
            <Breadcrumb.Item active>En Çok Başvuru Yapılan İlanlar</Breadcrumb.Item>
          </Breadcrumb>
          <h4>En Çok Başvuru Yapılan İlanlar</h4>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <Form className="navbar-search" onSubmit={handleAramaYap}>
          <Row>
            <Col md={2} className="mb-3">
              <Form.Label column="true">İlk Tarih:</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="ilkTarih">
                <Datetime
                  isValidDate={isTodayOrPastDate}
                  locale="tr"
                  timeFormat={false}
                  onChange={handleChangeIlkTarih}
                  closeOnSelect={true}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required={false}
                        type="text"
                        value={ilkTarih ? moment(ilkTarih).format("DD/MM/YYYY") : ""}
                        placeholder="gg/aa/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }}
                      />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={2} className="mb-3">
              <Form.Label column="true">Son Tarih:</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="sonTarih">
                <Datetime
                  isValidDate={isTodayOrPastDate}
                  locale="tr"
                  timeFormat={false}
                  onChange={handleChangeSonTarih}
                  closeOnSelect={true}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required={false}
                        type="text"
                        value={sonTarih ? moment(sonTarih).format("DD/MM/YYYY") : ""}
                        placeholder="gg/aa/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }}
                      />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={1} className="mb-3">
              <Button variant="tertiary" type="submit" >Ara</Button>
            </Col>
            <Col md={1} className="mb-3">
              <Button variant="tertiary" onClick={handlePDFGoster}>PDF</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <EnCokBasvuruYapilanIlanlar ilanlar={ilanlar} handlePaginationChange={handlePaginationChange} pageNumber={pageNumber} />
    </>
  );
};
