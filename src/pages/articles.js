import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
// import Article from "../components/blogs/artificial-intel";
import "bootstrap/dist/css/bootstrap.min.css";
import FullArticlepage from "../components/blogs/fullArticlePage";

// Blogs Article Page
const Articles = ({ location }) => {
    return (
        <>
        <Layout location={location}>
            <FullArticlepage 
                title={location.state[0].title}
                img={location.state[0].img} 
                author={location.state[0].author}
                content={location.state[0].content}
                date={location.state[0].date}
            />
        </Layout>
        </>
  );
};
export default Articles;