import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      </>
  );
};

export default PageLayout;


