import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import DashboardOverview from "./dashboard/DashboardOverview";
import HesapBilgileri from "./HesapBilgileri";
import YeniIlan from "./YeniIlan";
import IlanDetay from "./IlanDetay";
import IlanAra from "./IlanAra";
import ElemanAra from "./ElemanAra";
import YeniKategori from "./YeniKategori";
import KategoriDetay from "./KategoriDetay";
import RaporEnCokArananlar from "./tables/RaporEnCokArananlar";
import RaporEnCokBulunanlar from "./tables/RaporEnCokBulunanlar";
import IlanListesi from "./tables/IlanListesi";
import BasvuruListesi from "./tables/BasvuruListesi";
import KullaniciGiris from "./KullaniciGiris";
import KullaniciKayit from "./KullaniciKayit";
import KategoriListesi from "./tables/KategoriListesi";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
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
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.HesapBilgileri.path} component={HesapBilgileri} />
    <RouteWithSidebar exact path={Routes.YeniIlan.path} component={YeniIlan} />
    <RouteWithSidebar exact path={Routes.IlanDetay.path} component={IlanDetay} />
    <RouteWithSidebar exact path={Routes.IlanAra.path} component={IlanAra} />
    <RouteWithSidebar exact path={Routes.ElemanAra.path} component={ElemanAra} />
    <RouteWithSidebar exact path={Routes.YeniKategori.path} component={YeniKategori} />
    <RouteWithSidebar exact path={Routes.KategoriDetay.path} component={KategoriDetay} />
    <RouteWithSidebar exact path={Routes.RaporEnCokArananlar.path} component={RaporEnCokArananlar} />
    <RouteWithSidebar exact path={Routes.RaporEnCokBulunanlar.path} component={RaporEnCokBulunanlar} />
    <RouteWithSidebar exact path={Routes.IlanListesi.path} component={IlanListesi} />
    <RouteWithSidebar exact path={Routes.BasvuruListesi.path} component={BasvuruListesi} />
    <RouteWithSidebar exact path={Routes.KategoriListesi.path} component={KategoriListesi} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
