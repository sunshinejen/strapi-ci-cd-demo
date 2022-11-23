import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import CallForAction from "../components/call_for_action/callForAction";
import { graphql } from "gatsby";
const functions = require('../module/functions');

const CallPage = ({ location, data }) => {

  const CFAStrapiData = data.allStrapiCallForActionPage.edges;
  const CFAStrapiComponentData = data.allStrapiCallForActionPage.nodes;

  const cfaPageData = [];
  const cfaPhases = [];
  const cfaGoals = [];

  /*gets Call for Action page data except for repeatable components */
  const getCFAPage = () => {
    CFAStrapiData.forEach(edge => {
      const object = edge.node;
      console.log(object);
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      cfaPageData.push(property);
    });
    return cfaPageData;
  };

  //repeatable component: gets phases data 
  const getCFAPhases = () => {
    const phases = CFAStrapiComponentData[0].call_for_action_phases;
    phases.forEach(edge => {
      const object = edge;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      cfaPhases.push(property);
    })
  };


  //repeatable component: gets goal data 
  const getCFAGoals = () => {
    const goals = CFAStrapiComponentData[0].call_for_action_goals;
    goals.forEach(edge => {
      const object = edge;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      cfaGoals.push(property);

    });
  };

  getCFAPage();
  getCFAPhases();
  getCFAGoals();

  return (
    <>
      <Layout location={location}>
        <CallForAction page={cfaPageData} phases={cfaPhases} goals={cfaGoals} />
      </Layout>
    </>
  );
};

export default CallPage;

export const CFAQuery = graphql`
query CFAQuery {
  allStrapiCallForActionPage {
    edges {
      node {
        call_for_action_description
        title
        id
        call_for_action_disinformation_title
        call_for_action_disinformation_description
        call_for_action_disinformation_image_1 {
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
        call_for_action_disinformation_image_3 {
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
        call_for_action_disinformation_image_2 {
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
        call_for_action_roadmap_title
        call_for_action_roadmap_img {
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
      }
    }
    nodes {
      call_for_action_phases {
        phase_number
        phase_title
        phase_dates
        id
        phase_details {
          data {
            phase_details
          }
        }
      }
      call_for_action_goals {
        id
        goal_name
        goal_description
      }
    }
  }
}    
`