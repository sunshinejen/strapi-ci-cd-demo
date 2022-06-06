import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Meta from "../components/metaverse";
import "bootstrap/dist/css/bootstrap.min.css";
const MetaPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Meta />
      </Layout>
    </>
  );
};

export default MetaPage;
