import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";
import Event from "../components/events/event";
const functions = require('../module/functions');

const EventsPage = ({ location, data }) => {

  console.log(data);
  const EventStrapiData = data.allStrapiEvent.edges;
  const eventData = [];


  /*gets Events data , next time need to add Event images */
  const getEvents = () => {
    EventStrapiData.forEach(edge => {
      const object = edge.node;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      eventData.push(property);
    });
    return eventData;
  };

  getEvents();
  console.log(eventData);

  return (
    <>
      <Layout location={location}>
        <Event eventData={eventData} />
      </Layout>
    </>
  );
};

export default EventsPage;

export const query = graphql`
query eventQuery {
  allStrapiEvent {
    edges {
      node {
        event_type
        event_title
        event_description
        id
        image {
          url
          alternativeText
          caption
        }
      }
    }
  }
}
`
