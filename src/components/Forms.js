
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import 'moment/locale/tr';
import { SertifikaListesiTable, SinavSonuclariTable, YetenekListesiTable } from "../components/Tables";

export const HesapBilgileriForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form>
          <h5 className="mb-4">Kişisel Bilgiler</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="kullaniciAdi">
                <Form.Label>Kullanıcı Adı</Form.Label>
                <Form.Control required type="text" placeholder="Kullanıcı Adı" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="a@b.com" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Ad</Form.Label>
                <Form.Control required type="text" placeholder="Ad" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Soyad</Form.Label>
                <Form.Control required type="text" placeholder="Soyad" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Doğum Tarihi</Form.Label>
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
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Cinsiyet</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Cinsiyet</option>
                  <option value="1">Kadın</option>
                  <option value="2">Erkek</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Adres Bilgileri</h5>
          <Row>
            <Col sm={6} className="mb-3">
              <Form.Group id="city">
                <Form.Label>Şehir</Form.Label>
                <Form.Select id="city" defaultValue="0">
                  <option value="0">Şehir</option>
                  <option value="06">Ankara</option>
                  <option value="34">İstanbul</option>
                  <option value="35">İzmir</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="mb-2" id="ilce">
                <Form.Label>İlçe</Form.Label>
                <Form.Control required type="text" placeholder="İlçe" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="mb-3">
              <Form.Group className="mb-2" id="mahalle">
                <Form.Label>Mahalle</Form.Label>
                <Form.Control required type="text" placeholder="Mahalle" />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="mb-2" id="cadde">
                <Form.Label>Cadde</Form.Label>
                <Form.Control required type="text" placeholder="Cadde" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3} classNFaddressNumberame="mb-3">
              <Form.Group id="binaNo">
                <Form.Label>Bina No</Form.Label>
                <Form.Control required type="number" placeholder="No" />
              </Form.Group>
            </Col>
            <Col sm={3} classNFaddressNumberame="mb-3">
              <Form.Group id="daireNo">
                <Form.Label>Daire No</Form.Label>
                <Form.Control required type="number" placeholder="No" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group id="zip">
                <Form.Label>Posta Kodu</Form.Label>
                <Form.Control required type="tel" placeholder="Posta Kodu" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">İletişim Bilgileri</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="mobilTelefon">
                <Form.Label>Mobil Telefon</Form.Label>
                <Form.Control required type="number" placeholder="+90-555 12 3456" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="sabitTelefon">
                <Form.Label>Sabit Telefon</Form.Label>
                <Form.Control required type="number" placeholder="+90-312 12 3456" />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-3">
            <Button variant="primary" type="submit">Kaydet</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" type="submit">Dondur</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="danger" type="submit">Sil</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};


export const ProfilForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form>
          <h5 className="mb-4">Kişisel Bilgiler</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="kullaniciAdi">
                <Form.Label>Kullanıcı Adı</Form.Label>
                <Form.Control required type="text" placeholder="Kullanıcı Adı" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="a@b.com" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Ad</Form.Label>
                <Form.Control required type="text" placeholder="Ad" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Soyad</Form.Label>
                <Form.Control required type="text" placeholder="Soyad" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Doğum Tarihi</Form.Label>
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
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Cinsiyet</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Cinsiyet</option>
                  <option value="1">Kadın</option>
                  <option value="2">Erkek</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">İletişim Bilgileri</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="mobilTelefon">
                <Form.Label>Mobil Telefon</Form.Label>
                <Form.Control required type="number" placeholder="+90-555 12 3456" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="sabitTelefon">
                <Form.Label>Sabit Telefon</Form.Label>
                <Form.Control required type="number" placeholder="+90-312 12 3456" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Sınav Sonuçları</h5>
          <SinavSonuclariTable />

          <h5 className="my-4">Sertifikalar</h5>
          <SertifikaListesiTable />

          <h5 className="my-4">Yetenekler</h5>
          <YetenekListesiTable />

          <h5 className="my-4">Özgeçmiş</h5>
          <Form.Label>2011 yılında Ahmet Yesevi Üniversitesi Bilgisayar Mühendisliği ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... ......... </Form.Label>
        </Form>
      </Card.Body>
    </Card>
  );
};
