import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const layouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      </>
  );
};

export default layouts;


