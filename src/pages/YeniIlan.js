import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { IlanForm } from "../components/Forms";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';

import Profile3 from "../assets/img/team/profile-picture-3.jpg";


export default () => {
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>İlan İşlemleri</Breadcrumb.Item>
            <Breadcrumb.Item active>Yeni İlan</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Yeni İlan</h4>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <IlanForm />
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
