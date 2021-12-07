import React from "react";
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import Datetime from "react-datetime";
import moment from "moment-timezone";
import 'moment/locale/tr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { InputGroup } from '@themesberg/react-bootstrap';
import { isValidDate } from "../../../common/globals.js";

moment.locale("tr");

export const YeniIlanForm = (props) => {
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body onSubmit={props.handleFormSubmit}>
        <Form>
          <IlanForm ilan={props.ilan} handleChange={props.handleChange} handleChangeYayinTarihi={props.handleChangeYayinTarihi} handleChangeSonBasvuruTarihi={props.handleChangeSonBasvuruTarihi} />
          <div className="mt-3">
            <Button variant="primary" type="submit">Kaydet</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const MevcutIlanForm = (props) => {
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form onSubmit={props.handleFormSubmit}>
          <IlanForm ilan={props.ilan} handleChange={props.handleChange} handleChangeYayinTarihi={props.handleChangeYayinTarihi} handleChangeSonBasvuruTarihi={props.handleChangeSonBasvuruTarihi} />
          <div className="mt-3">
            <Button variant="primary" type="submit">Kaydet</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" onClick={props.handleIlanYayinla}>Yayınla</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="danger" onClick={props.handleIlanIptalEt}>İptal Et</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

const IlanForm = (props) => {
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Kurum:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="kurum">
                <Form.Control required type="text" name="kurum" value={(props.ilan.kullanici && props.ilan.kullanici.ad) || ""} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Ünvan:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="unvan">
                <Form.Control required type="text" name="unvan" value={props.ilan.unvan || ""} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Açıklama:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="aciklama">
                <Form.Control required name="aciklama" value={props.ilan.aciklama || ""} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Zorunlu Özellikler:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="zorunluOzellikler">
                <Form.Control name="zorunluOzellikler" value={props.ilan.zorunluOzellikler || ""} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Tercihen Özellikler:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="tercihenOzellikler">
                <Form.Control name="tercihenOzellikler" value={props.ilan.tercihenOzellikler || ""} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Yer:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="yer">
                <Form.Control required name="yer" value={props.ilan.yer || ""} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Çalışma Zamanı:</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="calismaZamani">
                <Form.Select name="isPartTime" value={props.ilan.isPartTime} onChange={props.handleChange}>
                  <option value="false">Tam Zamanlı</option>
                  <option value="true">Yarı Zamanlı</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Maaş Aralığı:</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="minMaas">
                <Form.Control type="number" placeholder="0" min="0" name="minMaas" value={props.ilan.minMaas} onChange={props.handleChange} />
              </Form.Group>
            </Col>
            <Col md={1} className="mb-3">
              <Form.Label column="true">&nbsp;-&nbsp;</Form.Label>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="maxMaas">
                <Form.Control type="number" placeholder="0" min="0" name="maxMaas" value={props.ilan.maxMaas} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Başvuru Limiti:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="basvuruLimiti">
                <Form.Control required type="number" placeholder="0" min="0" name="basvuruLimiti" value={props.ilan.basvuruLimiti} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Yayın Tarihi:</Form.Label>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="yayinTarihi">
                <Datetime
                  isValidDate={isValidDate}
                  locale="tr"
                  timeFormat={false}
                  onChange={props.handleChangeYayinTarihi}
                  inputProps={props}
                  closeOnSelect={true}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={props.ilan.yayinTarihi ? moment(props.ilan.yayinTarihi).format("DD/MM/YYYY") : ""}
                        placeholder="gg/aa/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }}
                      />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Son Başvuru Tarihi:</Form.Label>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="sonBasvuruTarihi">
                <Datetime
                  isValidDate={isValidDate}
                  locale="tr"
                  timeFormat={false}
                  onChange={props.handleChangeSonBasvuruTarihi}
                  inputProps={props}
                  closeOnSelect={true}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={props.ilan.sonBasvuruTarihi ? moment(props.ilan.sonBasvuruTarihi).format("DD/MM/YYYY") : ""}
                        placeholder="gg/aa/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }}
                      />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};
