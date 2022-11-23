import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
// import Blog from "../components/blogcontent";
// import Blog from "../components/blogs/blogcontent";
import Blogs from "../components/blogs/blogs";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";
import { faStoreAltSlash } from "@fortawesome/free-solid-svg-icons";

// Blogs Page
const BlogPage = ({ location, data }) => {
  // Blogs Data
  const blogsdata = []
  //AuthorsData
  const authorsData = []

  // Deconstruct blogs data
  data.allStrapiArticle.edges.forEach(Element => {
    blogsdata.push({
      title: Element.node.title,
      publishDate: Element.node.article_date,
      heading: Element.node.heading.data.heading,
      image: Element.node.article_img.url,
      author: Element.node.author_name[0].name,
      content: Element.node.content.data.content
    })
  })

  //Deconstruct Authors data
  data.allStrapiAuthor.edges.forEach(Element => {
    authorsData.push({
      name: Element.node.author_name,
      title: Element.node.author_title,
      summary:Element.node.author_summary.data.author_summary,
      image: Element.node.author_img[0].url
    })
  })

  return (
    <>
      <Layout location={location}>
        <Blogs blogsData={blogsdata} authorsData={authorsData}/>
        
      </Layout>
    </>
  );
};
export default BlogPage;

export const query = graphql`
query BlogsQuery {
  allStrapiArticle(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        title
        heading {
          data {
            heading
          }
        }
        article_date(formatString: "DD MMMM, YYYY")
        content {
          data {
            content
          }
        }
        author_name {
          name
        }
        article_img {
          url
        }
      }
    }
  }
  allStrapiAuthor {
    edges {
      node {
        author_title
        author_summary {
          data {
            author_summary
          }
        }
        author_name
        author_img {
          url
        }
      }
    }
  }
}`