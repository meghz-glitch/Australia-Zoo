<<<<<<< HEAD:src/pages/Birds/index.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const layouts = () => {
=======
import React from "react";
import styles from "../layouts/layout.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const PageLayout = ({ sidebar, children, showSidebar = true }) => {
>>>>>>> parent of b771ba2 (fix):src/layouts/PageLayout.jsx
  return (
    <div className={styles.pageLayout}>
      <Header />
<<<<<<< HEAD:src/pages/Birds/index.jsx
      <Outlet />
=======
      <div className={styles.contentWrapper}>
        {showSidebar && <aside className={styles.sidebar}>{sidebar}</aside>}
        <main className={styles.main}>{children}</main>
      </div>
>>>>>>> parent of b771ba2 (fix):src/layouts/PageLayout.jsx
      <Footer />
    </div>
  );
};

export default layouts;


