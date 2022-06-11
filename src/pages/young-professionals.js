import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import YoungProfessionals from "../components/professionalscontent";
const YoungPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <YoungProfessionals />
      </Layout>
    </>
  );
};

export default YoungPage;
