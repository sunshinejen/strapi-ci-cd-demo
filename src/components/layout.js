import React from "react";
import Navbar from "./navigation/Navbar";
import Footer from "./footer/Footer";
import Footer2 from "./footer/footer(white)";
import { ToastProvider } from "react-toast-notifications";
import PropTypes from "prop-types";
import "../css/main.css";
import "../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Layout = ({ children, location }) => {
  const current_page = location.pathname;
  return (
    <>
      <ToastProvider>
        <Navbar location={location} />

        <div>{children}</div>

        {current_page == "/" ||
        current_page == "/webinars" ||
        current_page == "/young-professionals" ||
        current_page == "/call-for-action/" ? (
          <Footer />
        ) : (
          <Footer2 />
        )}
      </ToastProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menus: PropTypes.any,
};
export default Layout;
