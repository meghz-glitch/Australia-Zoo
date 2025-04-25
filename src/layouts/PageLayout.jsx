// src/layouts/PageLayout.jsx
import React from "react";
import styles from "../layouts/layout.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const PageLayout = ({ sidebar, children }) => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <div className={styles.contentWrapper}>
        <aside className={styles.sidebar}>{sidebar}</aside>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;


