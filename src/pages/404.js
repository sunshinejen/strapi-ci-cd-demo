import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Error404 from "../components/errorPage/erorr404";
import "bootstrap/dist/css/bootstrap.min.css";
const NotFound= ({ location }) => {
  return (
    <>
      <Layout location={location}>
       <Error404/>
      </Layout>
    </>
  );
};

export default NotFound;
