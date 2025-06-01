
import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "./index.module.css";

const Layout = () => (
  <>
    <Header />
    <main className={styles.mainContent}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
