
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faTable, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import ReactHero from "../assets/img/logo.jpeg";
import ProfilePicture from "../assets/img/profiles/Badi_Ekrem.jfif";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.KullaniciGiris.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="İşkolik" link={Routes.HesapBilgileri.path} image={ReactHero} />
              <Dropdown.Divider className="my-3 border-indigo" />

              <NavItem title="Hesap İşlemleri" icon={faCog} link={Routes.HesapBilgileri.path} />
              <CollapsableNavItem eventKey="basvuruIslemleri/" title="Bireysel İşlemleri" icon={faTable}>
                <NavItem title="İlan Ara" link={Routes.IlanAra.path} />
                <NavItem title="Başvurularım" link={Routes.BasvuruListesi.path} />
                <NavItem title="Profil" link={Routes.IlanListesi.path} />
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="ilanIslemleri/" title="Kurumsal İşlemler" icon={faTable}>
                <NavItem title="Yeni İlan" link={Routes.YeniIlan.path} />
                <NavItem title="İlanlarım" link={Routes.IlanListesi.path} />
                <NavItem title="Eleman Ara" link={Routes.ElemanAra.path} />
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="yoneticiIslemleri/" title="Yönetici Paneli" icon={faTable}>
                <NavItem title="Kategori Listesi" link={Routes.KategoriListesi.path} />
                <NavItem title="Yeni Kategori" link={Routes.YeniKategori.path} />
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="raporlar/" title="Raporlar" icon={faTable}>
                <NavItem title="En Çok Aranan Özellikler" link={Routes.RaporEnCokArananlar.path} />
                <NavItem title="En Çok Bulunan Özellikler" link={Routes.RaporEnCokBulunanlar.path} />
              </CollapsableNavItem>

              <NavItem title="Çıkış" link={Routes.KullaniciGiris.path} />
          </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
