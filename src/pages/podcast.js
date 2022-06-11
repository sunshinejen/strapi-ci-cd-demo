import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Podcast from "../components/podcastcontent";
import "bootstrap/dist/css/bootstrap.min.css";

const PodcastPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Podcast />
      </Layout>
    </>
  );
};

export default PodcastPage;
