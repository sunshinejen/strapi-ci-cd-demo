import React, { useState, useEffect, useCallback, useRef } from "react";
import "../../css/main.css";
import techIcon from "../../images/team/icons/default/tech-black.png";
import techHIcon from "../../images/team/icons/highlighted/tech-brown.png";
import cfaIcon from "../../images/team/icons/default/cfa-black.png";
import cfaHIcon from "../../images/team/icons/highlighted/cfa-brown.png";
import strategyIcon from "../../images/team/icons/default/strategy-black.png";
import strategyHIcon from "../../images/team/icons/highlighted/strategy-brown.png";
import TeamRoles from "./teamRoles";
import "../../css/volunteer-page.css";

export default function RoleButtons({ nonTechRoles, legalRoles, techRoles }) {
    const legalstate = useRef(null);
    const techstate = useRef(null);
    const nontechstate = useRef(null);

    const [teamArray, setTeamArray] = useState(null);

    const handleClick = event => {
        const buttonId = event.currentTarget.id
        const category = getTeam(buttonId);
        setTeamArray(category);
    }

    const getTeam = (category) => {
        const type = {
            "legal": legalRoles,
            "nontech": nonTechRoles,
            "tech": techRoles,
        };
        return type[category] ?? false;
    };

    return (
        <>
            <section className="team py-5">
                <div className="bgd pt-3">
                    <h3 className="text-center subtitle">Open Roles (Draft UI)</h3>
                    <div className="volunteer-buttons">
                        <button className="button-81" ref={legalstate} id='legal' onClick={handleClick}>
                            <div className="d-flex align-items-center" >
                                <img className="icon default" src={strategyIcon} alt="" />
                                <img className="icon highlighted" src={strategyHIcon} alt="" />
                                <h5>Legal</h5>
                            </div>
                        </button>
                        <button className="button-81" ref={nontechstate} id='nontech' onClick={handleClick}>
                            <div className="d-flex align-items-center" >
                                <img className="icon default" src={cfaIcon} alt="" />
                                <img className="icon highlighted" src={cfaHIcon} alt="" />
                                <h5>Non-Technical</h5>
                            </div>
                        </button>
                        <button className="button-81" ref={techstate} id='tech' onClick={handleClick}>
                            <div className="d-flex align-items-center" >
                                <img className="icon default" src={techIcon} alt="" />
                                <img className="icon highlighted" src={techHIcon} alt="" />
                                <h5>Technology</h5>
                            </div>
                        </button>

                    </div>
                </div>
            </section>
            {legalstate !== null | nonTechRoles != null | techstate != null && teamArray !== null && (
                <section className="team py-5">
                    <div className="bgd pt-3">
                        <div className="volunteer-buttons">
                            <TeamRoles role={teamArray} />
                        </div>
                    </div>
                </section>)
            }
        </>

    )
}



