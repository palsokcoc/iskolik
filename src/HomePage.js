import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pages
import YeniIlan from "./kurumsal/ilan/pages/YeniIlan";
import MevcutIlan from "./kurumsal/ilan/pages/MevcutIlan";
import IlanListesi from "./kurumsal/ilan/pages/IlanListesi";
import ElemanAra from "./kurumsal/elemanArama/pages/ElemanAra";

import YeniKategori from "./yonetici/kategori/pages/YeniKategori";
import MevcutKategori from "./yonetici/kategori/pages/MevcutKategori";
import KategoriListesi from "./yonetici/kategori/pages/KategoriListesi";

import DashboardOverview from "./pages/dashboard/DashboardOverview";
import HesapBilgileri from "./pages/HesapBilgileri";
import Profil from "./pages/Profil";
import IlanAra from "./pages/IlanAra";
import RaporEnCokArananlar from "./pages/tables/RaporEnCokArananlar";
import RaporEnCokBulunanlar from "./pages/tables/RaporEnCokBulunanlar";
import BasvuruListesi from "./pages/tables/BasvuruListesi";
import KullaniciGiris from "./pages/KullaniciGiris";
import KullaniciKayit from "./pages/KullaniciKayit";
import ForgotPassword from "./pages/examples/ForgotPassword";
import ResetPassword from "./pages/examples/ResetPassword";
import Lock from "./pages/examples/Lock";
import NotFoundPage from "./pages/examples/NotFound";
import ServerError from "./pages/examples/ServerError";

// components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <ToastContainer autoClose={5000} hideProgressBar position="top-right" />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.KullaniciGiris.path} component={KullaniciGiris} />
    <RouteWithLoader exact path={Routes.KullaniciKayit.path} component={KullaniciKayit} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.homePage.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.HesapBilgileri.path} component={HesapBilgileri} />
    <RouteWithSidebar exact path={Routes.Profil.path} component={Profil} />
    <RouteWithSidebar exact path={Routes.YeniIlan.path} component={YeniIlan} />
    <RouteWithSidebar exact path={Routes.MevcutIlan.path + "/:ilanId"} component={MevcutIlan} />
    <RouteWithSidebar exact path={Routes.IlanAra.path} component={IlanAra} />
    <RouteWithSidebar exact path={Routes.ElemanAra.path} component={ElemanAra} />
    <RouteWithSidebar exact path={Routes.YeniKategori.path} component={YeniKategori} />
    <RouteWithSidebar exact path={Routes.MevcutKategori.path + "/:kategoriId"} component={MevcutKategori} />
    <RouteWithSidebar exact path={Routes.RaporEnCokArananlar.path} component={RaporEnCokArananlar} />
    <RouteWithSidebar exact path={Routes.RaporEnCokBulunanlar.path} component={RaporEnCokBulunanlar} />
    <RouteWithSidebar exact path={Routes.IlanListesi.path} component={IlanListesi} />
    <RouteWithSidebar exact path={Routes.BasvuruListesi.path} component={BasvuruListesi} />
    <RouteWithSidebar exact path={Routes.KategoriListesi.path} component={KategoriListesi} />

  </Switch>
);
