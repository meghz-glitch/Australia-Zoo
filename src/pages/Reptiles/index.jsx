// src/layouts/index.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "./layout.module.css"; // Create a CSS module for layout styles

const Layouts = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />
      <div className={styles.layoutContent}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
