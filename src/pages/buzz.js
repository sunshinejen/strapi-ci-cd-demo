import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Buzz from "../components/buzz/buzz";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";
const functions = require('../module/functions');

const TeamBuzz = ({ location, data }) => {

  const buzzStrapiData = data.allStrapiBuzz.edges;
  const buzzVolunteers = [];
  const buzzSpeakers = [];
  const buzzParticipants = [];

  /* checks for buzz category and returns array of specified condition  */
  const getBuzzArray = (category) => {
    const categories = {
      //keys are conditions and values are responses
      "speakers": buzzSpeakers,
      "participants": buzzParticipants,
      "volunteers": buzzVolunteers,
    };
    return categories[category] ?? "category not found";
  };

  /* filters buzz objects by category and adds deconstructed object to assigned array */
  const filterBuzz = () => {
    buzzStrapiData.forEach(edge => {
      const object = edge.node;
      const buzzCategory = object.category;
      const arr = getBuzzArray(buzzCategory);
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      arr.push(property);
    });
  }

  filterBuzz();
  console.log(buzzStrapiData);
  console.log(buzzSpeakers);
  console.log(buzzParticipants);
  console.log(buzzVolunteers);

  return (
    <>
      <Layout location={location}>
        <Buzz speakersData={buzzSpeakers} participantsData={buzzParticipants} volunteersData={buzzVolunteers} />
      </Layout>
    </>
  );
};

export default TeamBuzz;

export const buzzQuery = graphql`
query buzzQuery {
  allStrapiBuzz {
    edges {
      node {
        id
        category
        name
        review {
          data {
            review
          }
        }
        img {
          url
        }
        team {
          Team
        }
      }
    }
  }
}
`
