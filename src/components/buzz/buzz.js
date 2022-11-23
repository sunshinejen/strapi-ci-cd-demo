import React, { useState } from "react";
import "../../css/buzz.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/blog-articles.css";
import "../../css/main.css";
import BuzzHeader from './buzzHeader';
import SpeakerCard from "./speakerCard";
import ParticipantCard from "./participantCard";
import VolunteerCard from "./volunteerCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function Buzz({ speakersData, participantsData, volunteersData }) {

    /*Buzz page Titles*/
    const speakerPageTitle = "Speakers";
    const participantPageTitle = "Participants";
    const volunteerPageTitle = "Volunteers";


    const [speakersList] = useState(speakersData);
    const [participantsList] = useState(participantsData);
    const [volunteersList] = useState(volunteersData);

    /*volunteer display */
    const [items, setItems] = useState(5);
    const firstFive = volunteersList.slice(0, items);
    const [showMore, setShowMore] = useState(firstFive);
    const [displayButton, setdisplayButton] = useState(false);

    /*Display more button (volunteers) */
    const handleOnClick = () => {
        if (items + 5 <= volunteersList.length) {
            setItems(items + 5);
            const list = volunteersList.slice(0, items + 5);
            setShowMore(list);
            setdisplayButton(displayButton);
        }
        else {
            setShowMore(volunteersList);
            setdisplayButton(!displayButton);
        }

        if (displayButton) {
            setItems(5);
            const list = volunteersList.slice(0, 5);
            setShowMore(list);
        }
    }
    

    return (
        <>
            <BuzzHeader />
            <div id="speakers" style={{ backgroundColor: "#F4F3F2" }}>
                <h4 className="container pt-5">{speakerPageTitle}</h4>
                <div
                    className="container d-flex flex-column justify-content-center align-items-center"
                    style={{ padding: "5px 50px 100px" }}
                >
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        {speakersList.map((speaker) => (
                            <SpeakerCard speaker={speaker} key={speaker.id} />
                        ))}

                    </div>

                </div>
            </div>
            <div id="participants" style={{ marginBottom: "50px" }}>
                <h4 className="container pt-5">{participantPageTitle}</h4>
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        {participantsList.map((participant) => (
                            <ParticipantCard participant={participant} key={participant.id} />
                        ))}
                    </div>
                </div>
            </div>


            <div id="volunteers" style={{ backgroundColor: "#F4F3F2", marginBottom: "50px" }}>
                <h4 className="container pt-5">{volunteerPageTitle}</h4>
                <div
                    className="container d-flex flex-column justify-content-center align-items-center"
                    style={{ padding: "10px 100px 100px" }}
                >
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        {showMore.map((volunteer, index) => (
                            <VolunteerCard volunteer={volunteer} key={volunteer.id} index={index + 1} />
                        ))}

                    </div>
                </div>
                {/* show more button currently only for volunteersList */}
                <div className="row pb-3 see-more-button-row">
                    <button
                        className="btn morebtn"
                        id="see-more-button"
                        onClick={handleOnClick}
                    >
                        {displayButton ? "Show less" : "Show More"} <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
            </div>
        </>
    )
}
