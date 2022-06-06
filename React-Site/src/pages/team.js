import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "../components/teamcontent";
const TeamPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Team />
      </Layout>
    </>
  );
};

export default TeamPage;
