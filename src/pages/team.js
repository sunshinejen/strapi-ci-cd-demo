import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";
import Team from "../components/team/team.js";
const functions = require('../module/functions');


const TeamPage = ({ location, data }) => {

  const volunteerData = data.allStrapiVolunteer.edges;
  const teamData = data.allStrapiTeam.edges;

  /* team icon data */
  const teams = [];

  /* volunteer data */
  const cfa = [];
  const marketing = [];
  const techSolution = [];
  const techforYoung = [];
  const volunteerSupport = [];
  const podcast = [];
  const strategy = [];
  const webinar = [];


  /* Condensing CFA and TS variations into the same team name */
  const changeTeamName = (name) => {
    const teamName = {
      //keys are conditions and values are responses
      "Call for Action - Technology Platform": 'Call for Action',
      "Call for Action - Legislation": 'Call for Action',
      "Tech Solution - Mobile App Development": 'Tech Solution',
      "Tech Solution - Web Development": 'Tech Solution',
    };
    return teamName[name] ?? "false";
  };

  /* deconstructs Team objects, checks for duplicates, adds condensed team name if condition is met*/
  const getTeams = () => {
    teamData.forEach(edge => {
      const object = edge.node;
      const teamName = object.team.Team;
      const name = changeTeamName(teamName);
      const duplicate = teams.some(element => element.teamName === name);
      if (duplicate === false) {
        if (name === "false") {
          teams.push({
            teamName,
          })
        }
        if (name !== "false") {
          teams.push({
            teamName: name,
          })
        }
      }
    });
  };

  /* checks for team type and returns array of specified condition  */
  const getTeamArray = (team) => {
    const teams = {
      //keys are conditions and values are responses
      "Digital Marketing": marketing,
      "Strategy": strategy,
      "Podcast": podcast,
      "Volunteer Support": volunteerSupport,
      "Webinar": webinar,
      "Call for Action - Technology Platform": cfa,
      "Call for Action - Legislation": cfa,
      "Tech Solution - Mobile App Development": techSolution,
      "Tech Solution - Web Development": techSolution,
      "Tech for Young Professionals": techforYoung,
    };
    return teams[team] ?? "team not found";
  };

  /* filters volunteer objects by team name and adds deconstructed object to assigned array */
  const filterVolunteers = () => {
    volunteerData.forEach(edge => {
      const object = edge.node;
      const teamType = object.Team[0].Team;
      const array = getTeamArray(teamType);
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      array.push(property);
    });
  }

  getTeams();
  filterVolunteers();
  //  console.log(teams); 
  // console.log(cfa); 
  // console.log(marketing);
  // console.log(techSolution);
  // console.log(techforYoung);
  // console.log(volunteerSupport);
  // console.log(podcast);
  // console.log(strategy);
  // console.log(webinar);


  return (
    <>
      <Layout location={location}>
        <Team
          teams={teams}
          cfaTeam={cfa}
          marketingTeam={marketing}
          techSolutionTeam={techSolution}
          techforYoungTeam={techforYoung}
          hrTeam={volunteerSupport}
          podcastTeam={podcast}
          webinarTeam={webinar}
          strategyTeam={strategy}
        />
      </Layout>
    </>
  );
};

export default TeamPage;

export const volunteerQuery = graphql`
query volunteerQuery {
  allStrapiVolunteer {
    edges {
      node {
        id
        name
        title
        Team {
          Team
          id
        }
        linkedin_url
        harvard_alum
        volunteer_img {
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
  }
  allStrapiTeam {
    edges {
      node {
        team {
          Team
        }
        id
      }
    }
  }
}
`
