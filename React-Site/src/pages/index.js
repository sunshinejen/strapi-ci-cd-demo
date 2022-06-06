import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import MainPageContent from "../components/indexcontent";

import Carousel from "../components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";
const MainPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Carousel />
        <MainPageContent />
      </Layout>
    </>
  );
};

export default MainPage;
