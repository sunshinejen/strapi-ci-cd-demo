import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "../components/eventscontent";
const EventsPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Events />
      </Layout>
    </>
  );
};

export default EventsPage;
