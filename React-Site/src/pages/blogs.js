import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Blog from "../components/blogcontent";
import "bootstrap/dist/css/bootstrap.min.css";
const BlogPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <Blog />
      </Layout>
    </>
  );
};

export default BlogPage;
