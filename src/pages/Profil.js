import React from "react";
import { Col, Row } from '@themesberg/react-bootstrap';
import { ProfileCardWidget } from "../components/Widgets";
import { ProfilForm } from "../components/Forms";

export default () => {
  return (
    <>
      <Row>
        <Col xs={12} xl={8}>
          <ProfilForm />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

