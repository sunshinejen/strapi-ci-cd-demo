import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Cfa from "../components/callcontent";
const CallPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Cfa />
      </Layout>
    </>
  );
};

export default CallPage;
