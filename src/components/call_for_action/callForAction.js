import React, { useState } from "react";
import CallForActionHeader from './callForActionHeader';
import CfaDisinformation from "./cfaDisinformation";
import CfaRoadMap from "./cfaRoadMap";
import Goals from './goals';
import Phases from "./phases";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/call-for-action.css";

export default function CallForAction({ page, goals, phases }) {
    const header = page[0];
    const [CFAGoals] = useState(goals);
    const [CFAPhases] = useState(phases);

    return (
        <>
            <CallForActionHeader
                title={header.title}
                description={header.call_for_action_description}
            />
            {/* Vision / Mission */}
            <section className="header-goal">
                <div className="container">
                    <div className="row">
                        {CFAGoals.map((goal) => (
                            <Goals goal={goal} key={goal.id} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Disinformation */}
            <CfaDisinformation
                title={header.call_for_action_disinformation_title}
                description={header.call_for_action_disinformation_description}
                disInfoImg1={header.call_for_action_disinformation_image_1.url}
                disInfoImg2={header.call_for_action_disinformation_image_2.url}
                disInfoImg3={header.call_for_action_disinformation_image_3.url}
            />

            {/* Road Map & RoadMap*/}
            <section style={{ backgroundColor: "white" }} className="road-map py-5">
                <div className="container">
                    <div className="content">
                        <CfaRoadMap
                            title={header.call_for_action_roadmap_title}
                            roadMapImg={header.call_for_action_roadmap_img.url}
                        />
                        {CFAPhases.map((phase) => (
                            <Phases phase={phase} key={phase.id} />
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}
