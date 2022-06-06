import * as React from "react";
import "../css/main.css";
import "../css/webinar.css";
import Webinar from "../components/webinarcontent";
import Layout from "../components/layout";

import "bootstrap/dist/css/bootstrap.min.css";

const WebinarPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Webinar />
      </Layout>
    </>
  );
};

export default WebinarPage;
