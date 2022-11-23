import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import TeamCategoryMembers from "./teamCategoryMembers";
import "../../css/team.css";

export default function TeamMember({ teams }) {
    console.log(teams);
    return (
        teams.map((team) => (
            team.Team === "Tech Solution - Web Development" |
                team.Team === "Call for Action - Technology Platform" |
                team.Team === "Tech Solution - Mobile App Development" |
                team.Team === "Call for Action - Legislation" ? <TeamCategoryMembers team={team} /> : (

                <div className="bgd team-cards">
                    <div
                        className="container justify-content-center align-items-center"
                        style={{ padding: "2em", paddingTop: "0" }}
                    >
                        <div className="strategy max-width">
                            <div className="d-flex justify-content-center flex-wrap">
                                <div className="column-float">
                                    <div className="card" key={team.id}>
                                        <img
                                            className="card-image"
                                            src={team.volunteer_img.url}
                                            alt="headshot"
                                        />
                                        <div className="card-text">
                                            <h2>{team.name}</h2>
                                            <p className="hbs">{team.harvard_alum}</p>
                                            <p className="role">{team.title}
                                                <a
                                                    rel="noreferrer"
                                                    className="link mx-2"
                                                    href={team.linkedin_url}
                                                    target="_blank"
                                                >
                                                    <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        ))
    )
}
