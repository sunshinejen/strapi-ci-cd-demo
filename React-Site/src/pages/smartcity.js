import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Smart from "../components/smartcity";
import "bootstrap/dist/css/bootstrap.min.css";
const SmartPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Smart />
      </Layout>
    </>
  );
};

export default SmartPage;
