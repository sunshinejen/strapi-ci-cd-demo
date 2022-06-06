import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Article from "../components/artificial-intel";
import "bootstrap/dist/css/bootstrap.min.css";
const IntelPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Article />
      </Layout>
    </>
  );
};

export default IntelPage;
