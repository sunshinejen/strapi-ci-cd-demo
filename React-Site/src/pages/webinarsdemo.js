import React from "react";
import "../css/main.css";
import "../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout"
import { graphql } from "gatsby";
import Webinars from "../components/webinardemo";
import WebinarUpcomingSectionDemo from "../components/webinarUpcomingSectionDemo";
import FeaturedSectionWebinarDemo from "../components/featuredSectionWebinarDemo";

const WebinarDemoPage = ({ location, data }) => {
  const webinarData = data.allStrapiWebinar.edges;
  // console.log(webinarData);
  return (
   
    <>
      <Layout location={location}>
        <div className="upcoming-Webinars">
          <div className="container py-5">
            <div className="wrapper-grid">
              <h5>Upcoming Webinars</h5>
            </div>
          </div>
        </div>
        <Webinars webinars={webinarData}/>
      </Layout>
    </>
  );
};
export default WebinarDemoPage

export const query = graphql`
    query webinarQuery {
        allStrapiWebinar(sort: {order: DESC, fields: date}, limit: 1000) {
          edges {
            node {
              date(formatString: "dddd, MMMM DD, YYYY")
              webinar_title
              webinar_url
              time
              summary
              webinar_description
              registration_url
              id
            }
          }
        }
      }
    `


