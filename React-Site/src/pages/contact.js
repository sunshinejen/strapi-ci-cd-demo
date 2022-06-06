import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Contact from "../components/contactcontent";
import "bootstrap/dist/css/bootstrap.min.css";
const ContactPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Contact />
      </Layout>
    </>
  );
};

export default ContactPage;
