import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../css/team.css";

export default function TeamCategoryMembers({ team }) {
    console.log(team)
    return (
        <>
            <div className="bgd team-cards">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                >
                    <div className='teamLine' style={{
                        flex: 1,
                        height: '2px',
                        backgroundColor: '#b4977b',
                        marginRight: '1rem',
                        marginLeft: '20rem'
                    }} />

                    <div>
                        <p style={{
                            width: '100%',
                            textAlign: 'center',
                        }}>{team.Team}
                        </p>
                    </div>

                    <div className='teamLine' style={{
                        flex: 1,
                        height: '2px',
                        backgroundColor: '#b4977b',
                        marginRight: '20rem',
                        marginLeft: '1rem'
                    }} />
                </div>

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

        </>
    )
}
