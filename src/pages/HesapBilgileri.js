import React from "react";
import { Col, Row } from '@themesberg/react-bootstrap';
import { ProfileCardWidget,CounterWidget } from "../components/Widgets";
import { HesapBilgileriForm } from "../components/Forms";

export default () => {
  return (
    <>
      <Row>
        <Col xs={12} xl={8}>
          <HesapBilgileriForm />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
              <CounterWidget/>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

