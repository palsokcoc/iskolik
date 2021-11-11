
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, InputGroup } from '@themesberg/react-bootstrap';

import { EnCokArananOzelliklerTable } from "../../components/Tables";




export default () => {
  const [birthday, setBirthday] = useState("");
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Raporlar</Breadcrumb.Item>
            <Breadcrumb.Item active>En Çok Aranan Özellikler</Breadcrumb.Item>
          </Breadcrumb>
          <h4>İlanlarda En Çok Aranan Özellikler</h4>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <Form className="navbar-search">
          <Row>
            <Col md={2} className="mb-3">
              <Form.Label column="true">İlk Tarih:</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="ilkTarihi">
                <Datetime
                  locale="tr"
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                        placeholder="gg/aa/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={2} className="mb-3">
              <Form.Label column="true">Son Tarih:</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="sonTarihi">
                <Datetime
                  locale="tr"
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                        placeholder="gg/aa/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={1} className="mb-3">
              <Button variant="tertiary" type="submit">Ara</Button>
            </Col>
            <Col md={1} className="mb-3">
              <Button variant="tertiary" type="submit">PDF</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <EnCokArananOzelliklerTable />
    </>
  );
};
