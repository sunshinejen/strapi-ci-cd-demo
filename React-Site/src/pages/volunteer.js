import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Volunteer from "../components/volunteercontent";
const VolunteerPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Volunteer />
      </Layout>
    </>
  );
};

export default VolunteerPage;
