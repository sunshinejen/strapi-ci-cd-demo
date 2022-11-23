import React, { useState, useRef } from "react";
import "../../css/team.css";
import strategyIcon from "../../images/team/icons/default/strategy-black.png";
import strategyHIcon from "../../images/team/icons/highlighted/strategy-brown.png";
import techIcon from "../../images/team/icons/default/tech-black.png";
import techHIcon from "../../images/team/icons/highlighted/tech-brown.png";
import cfaIcon from "../../images/team/icons/default/cfa-black.png";
import cfaHIcon from "../../images/team/icons/highlighted/cfa-brown.png";
import tfypIcon from "../../images/team/icons/default/tfyp-black.png";
import tfypHIcon from "../../images/team/icons/highlighted/tfyp-brown.png";
import webinarIcon from "../../images/team/icons/default/webinar-black.png";
import webinarHIcon from "../../images/team/icons/highlighted/webinar-brown.png";
import podcastIcon from "../../images/team/icons/default/podcast-black.png";
import podcastHIcon from "../../images/team/icons/highlighted/podcast-brown.png";
import marketingIcon from "../../images/team/icons/default/marketing-black.png";
import marketingHIcon from "../../images/team/icons/highlighted/marketing-brown.png";
import hrIcon from "../../images/team/icons/default/volunteer-black.png";
import hrHIcon from "../../images/team/icons/highlighted/volunteer-brown.png";
import eventIcon from "../../images/team/icons/default/event-black.png";
import eventHIcon from "../../images/team/icons/highlighted/event-brown.png";
import TeamMember from "./teamMember";


export default function TeamButtons({ teams, cfa, marketing, hr, tech, tfyp, podcast, webinar, strategy }) {
    const buttonState = useRef(null);
    const [teamList, setTeamList] = useState(null);


    const handleClick = event => {
        const buttonId = event.currentTarget.id
        const team = getTeam(buttonId);
        setTeamList(team);
    }

    const getTeam = (team) => {
        const teams = {
            //keys are conditions and values are responses
            "Digital Marketing": marketing,
            "Strategy": strategy,
            "Podcast": podcast,
            "Volunteer Support": hr,
            "Webinar": webinar,
            "Call for Action": cfa,
            "Tech Solution": tech,
            "Tech for Young Professionals": tfyp,
        };
        return teams[team] ?? false;
    };

    const getTeamImage = (team) => {
        const teams = {
            //keys are conditions and values are responses
            "Digital Marketing": marketingIcon,
            "Strategy": strategyIcon,
            "Podcast": podcastIcon,
            "Volunteer Support": hrIcon,
            "Webinar": webinarIcon,
            "Call for Action": cfaIcon,
            "Tech Solution": techIcon,
            "Tech for Young Professionals": tfypIcon,
            "Event Management": eventIcon,

        };
        return teams[team] ?? strategyIcon;
    };

    const getHighlightedImage = (team) => {
        const teams = {
            //keys are conditions and values are responses
            "Digital Marketing": marketingHIcon,
            "Strategy": strategyHIcon,
            "Podcast": podcastHIcon,
            "Volunteer Support": hrHIcon,
            "Webinar": webinarHIcon,
            "Call for Action": cfaHIcon,
            "Tech Solution": techHIcon,
            "Tech for Young Professionals": tfypHIcon,
            "Event Management": eventHIcon,

        };
        return teams[team] ?? strategyIcon;
    };




    return (
        <>
            <div className="team-buttons">
                {teams.map((team) => {
                    const icon = getTeamImage(team.teamName);
                    const hIcon = getHighlightedImage(team.teamName);
                    return (
                        <button className="button-81" ref={buttonState} id={team.teamName} key={team.teamName} onClick={handleClick}>
                            <div className="d-flex align-items-center" >
                                <img className="icon default" src={icon} alt="" />
                                <img className="icon highlighted" src={hIcon} alt="" />
                                <h5>{team.teamName}</h5>
                            </div>
                        </button>
                    )

                })}
            </div>
            {teamList !== null && teamList.length > 0 && (
                <section className="team py-5">
                    <div className="bgd pt-3">
                        <div className="volunteer-buttons">
                            <TeamMember teams={teamList} />
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

