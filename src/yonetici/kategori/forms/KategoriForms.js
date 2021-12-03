
import React from "react";
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';

export const YeniKategoriForm = (props) => {
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form onSubmit={props.handleFormSubmit}>
          <KategoriForm kategori={props.kategori} kategoriler={props.kategoriler} handleChange={props.handleChange} />
          <div className="mt-3">
            <Button variant="primary" type="submit">Kaydet</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const MevcutKategoriForm = (props) => {
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form onSubmit={props.handleFormSubmit}>
          <KategoriForm kategori={props.kategori} kategoriler={props.kategoriler} handleChange={props.handleChange} />
          <div className="mt-3">
            <Button variant="primary" type="submit">Kaydet</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="danger" onClick={props.handleDeleteKategori}>Sil</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

const KategoriForm = (props) => {
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Ad:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="ad">
                <Form.Control required type="text" name="ad" placeholder="" value={props.kategori.ad || ""} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Açıklama:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="aciklama">
                <Form.Control required name="aciklama" placeholder="" value={props.kategori.aciklama || ""} onChange={props.handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Label column="true">Ata Kategori:</Form.Label>
            </Col>
            <Col md={9} className="mb-3">
              <Form.Group id="ataKategoriId">
                <Form.Select name="ataKategoriId" value={props.kategori.ataKategori && props.kategori.ataKategori.kategoriId} onChange={props.handleChange}>
                  <option value="0" key="0"></option>
                  {props.kategoriler.map(kategori => <option value={kategori.kategoriId} key={kategori.kategoriId}>{kategori.ad}</option>)}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};