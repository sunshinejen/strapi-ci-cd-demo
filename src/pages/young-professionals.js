import * as React from "react";
import "../css/main.css";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
//import YoungProfessionals from "../components/tech-for-professionals/professionalscontent";
import Professionals from "../components/tech-for-professionals/professionals";
const functions = require('../module/functions');

const YoungPage = ({ location, data }) => {

  const tfypStrapiData = data.allStrapiTechForYoungProfessionalsPage.edges;
  const tfypStrapiComponents = data.allStrapiTechForYoungProfessionalsPage.nodes;

  const tfypPage = [];
  const tfypGoals = [];
  const tfypPhases = [];


  /*gets Tech for Young Professionals page data */
  const getTFYPPage = () => {
    tfypStrapiData.forEach(edge => {
      const object = edge.node;
      console.log(object);
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      tfypPage.push(property);
    });
    return tfypPage;
  };

  // gets goal data 
  const getTFYPGoals = () => {
    const goals = tfypStrapiComponents[0].tech_for_young_professionals_mission_goals;
    goals.forEach(edge => {
      const object = edge;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      tfypGoals.push(property);
    })
  };

  // gets phase data 
  const getTFYPhases = () => {
    const phases = tfypStrapiComponents[0].tech_for_young_professionals_phases
    phases.forEach(edge => {
      const object = edge;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      tfypPhases.push(property);
    })
  };

  getTFYPPage();
  getTFYPGoals();
  getTFYPhases();
  console.log('page data', tfypPage);
  console.log('page data strapi',tfypStrapiData );
  
  // console.log('goals data',tfypGoals);
  // console.log('phase data',tfypPhases);



  return (
    <>
      <Layout location={location}>
        <Professionals page={tfypPage} goals={tfypGoals} phases={tfypPhases} />
      </Layout>

    </>
  );
};

export default YoungPage;

export const query = graphql`
    query TechForYPQuery {
      allStrapiTechForYoungProfessionalsPage {
        edges {
          node {
            id
            tech_for_young_professionals_careers_title
            tech_for_young_professionals_description
            tech_for_young_professionals_roadmap_img {
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
            tech_for_young_professionals_roadmap_title
            tech_for_young_professionals_source_url
            tech_for_young_professionals_stake_description
            tech_for_young_professionals_stake_img {
              id
              url
              formats {
                medium {
                  url
                }
                small {
                  url
                }
              }
            }
            tech_for_young_professionals_stake_title
            tech_for_young_professionals_title
          }
        }
        nodes {
          tech_for_young_professionals_phases {
            id
            phase_title
            phase_number
            phase_details {
              data {
                phase_details
              }
            }
            phase_dates
          }
          tech_for_young_professionals_mission_goals {
            id
            goal_name
            goal_description
          }
        }
      }
      }
    `



