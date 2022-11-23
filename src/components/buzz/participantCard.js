import React from 'react';
import "../../css/buzz.css";

export default function ParticipantCard({ participant }) {
    return (
        <div
            id='participant-card'
            className="d-flex flex-column justify-content-around align-items-center"
            style={{
                boxShadow: "3px 3px 3px 3px lightgrey",
                backgroundColor: "#e6e6e6",
                padding: "20px",
                margin: "20px",
                minHeight: "250px",
            }}
        >
            <div>
                <p
                    style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                    }}
                >
                    {participant.review}
                </p>
                <p className='participant-p' style={{ fontSize: "12px", textAlign: "center" }}>
                    {participant.name}
                </p>
            </div>
        </div>
    )
}
