import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Space from "../components/spaceeconomy";
import "bootstrap/dist/css/bootstrap.min.css";
const SpacePage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Space />
      </Layout>
    </>
  );
};

export default SpacePage;
