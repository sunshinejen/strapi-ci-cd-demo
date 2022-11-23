import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown} from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";

export default function Phases({ phase }) {
    return (
        <>
            <div className="row pb-5">
                <div className="col-md-auto pr-0">
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{ color: "#AF8661", fontSize: "2rem" }}
                    />
                </div>
                <div className="col-md-auto">
                    <p className="phase">{phase.phase_number}</p>
                </div>
                <div className="col-10">
                    <p className="phase-title">{phase.phase_title}</p>
                    <p className="phase-q">{phase.phase_dates}</p>
                    <ReactMarkdown children={phase.phase_details} />
                </div>
            </div>
        </>
    )
}
