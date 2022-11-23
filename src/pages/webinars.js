import React from "react";
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import Webinars from "../components/webinar/webinars";

const functions = require('../module/functions');

const WebinarPage = ({ location, data }) => {

  const webinarData = data.allStrapiWebinar.edges;
  const upcomingWebinarData = data.allStrapiUpcomingWebinar.edges;


  const webinars = [];
  const upcomingWebinars = [];
  const young_professionals_webinars = [];

  /* checks for webinar type and returns array of specified condition  */
  const getWebinarArray = (type) => {
    const webinarArrays = {
      //keys are conditions and values are responses
      "webinars": webinars,
      "webinar": upcomingWebinars,
      "young_professionals": young_professionals_webinars,

    };
    return webinarArrays[type] ?? "Webinar type not found";
  };


  /* filters webinar objects by type and adds deconstructed object to assigned array 
  young professionals is in early stages in HiTs so for now and only has a placeholder image
  webinar name and coming soon description */

  const getFilteredWebinars = () => {
    webinarData.forEach(edge => {
      const object = edge.node;
      const type = object.webinar_type;
      const videoArray = getWebinarArray(type);
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      videoArray.push(property);
    })
  };

  /* filters upcoming_webinars objects by type and adds deconstructed object to assigned array */
  const getUpcomingWebinars = () => {
    upcomingWebinarData.forEach(edge => {
      const object = edge.node;
      const type = object.upcomingWebinar_type;
      const videoArray = getWebinarArray(type);
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      videoArray.push(property);
    })
  };

  getFilteredWebinars();
  getUpcomingWebinars();
  console.log(upcomingWebinarData);
  console.log(webinars);
  console.log(upcomingWebinars);
  console.log(young_professionals_webinars);
  return (
    <>
      <Layout location={location}>
        <Webinars webinars={webinars} upcoming={upcomingWebinars} tfyp={young_professionals_webinars} />
      </Layout>
    </>
  );
}

export default WebinarPage

export const query = graphql`
    query webinarQuery {
        allStrapiWebinar(sort: {order: DESC, fields: date}, limit: 1000) {
          edges {
            node {
              webinar_type
              id
              date(formatString: "dddd, MMMM DD, YYYY")
              webinar_title
              webinar_url
              time
              webinar_description
              registration_url
              flyer_img {
                formats {
                  medium {
                    url
                  }
                  small {
                    url
                  }
                }
                url
              }
              key_takeaways {
                data {
                  key_takeaways
                }
              }
              moderator_names {
                data {
                  moderator_names
                }
              }
              panelist_names {
                data {
                  panelist_names
                }
              }
            }
          }
        }
        allStrapiUpcomingWebinar {
          edges {
            node {
              upcomingWebinar_type
              id
              upcoming_webinar_title
              date
            }
          }
        }
      }
    `


