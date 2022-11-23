import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Contact from "../components/contact/contactcontent";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";

const ContactPage = ({ location, data }) => {

  // Deconstruct data
  const contactPageData = {
    title: data.allStrapiContactPage.edges[0].node.contact_page_title,
    content: data.allStrapiContactPage.edges[0].node.content
  }

  return (
    <>
      <Layout location={location}>
        <Contact contactPageData={contactPageData}/>
      </Layout>
    </>
  );
};

export default ContactPage;

export const query = graphql`
query ContactQuery {
  allStrapiContactPage {
    edges {
      node {
        content
        contact_page_title
        strapi_id
      }
    }
  }
}`
