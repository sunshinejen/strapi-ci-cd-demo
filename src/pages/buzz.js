import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import TeamBuzzContent from "../components/buzz";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamBuzz = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <TeamBuzzContent />
      </Layout>
    </>
  );
};

export default TeamBuzz;
