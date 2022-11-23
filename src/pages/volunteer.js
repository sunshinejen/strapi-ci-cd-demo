import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";
import Volunteer from "../components/volunteer/volunteer";
//import Volunteer from "../components/volunteer/volunteercontent";
const functions = require('../module/functions');

const VolunteerPage = ({ location, data }) => {

  const openRolesData = data.allStrapiVolunteerRole.edges;

  const legal = [];
  const tech = [];
  const nontech = [];

  /* checks for category type and returns array of specified condition  */
  const getCategoryArray = (category) => {
    const type = {
      //keys are conditions and values are responses
      "Legal": legal,
      "Non-Technical": nontech,
      "Technology": tech,
    };
    return type[category] ?? "category not found";
  };

  /* filters volunteer objects by category and adds deconstructed object to assigned array */
  const filterVolunteerRoles = () => {
    openRolesData.forEach(edge => {
      const object = edge.node;
      const category = object.category;
      const array = getCategoryArray(category);
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      array.push(property);
    });
  }
  filterVolunteerRoles();

  return (
    <>
      <Layout location={location}>
        <Volunteer nonTechRoles={nontech} legalRoles={legal} techRoles={tech} />
      </Layout>
    </>
  );
};

export default VolunteerPage;

export const openRolesQuery = graphql`
query openRolesQuery {
  allStrapiVolunteerRole {
    edges {
      node {
        category
        role_name
        id
        application_URL
        team {
          Team
        }
        role_description {
          data {
            role_description
          }
        }
      }
    }
  }
}
`