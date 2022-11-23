import React from 'react';
import "../../css/buzz.css";

export default function SpeakerCard({ speaker }) {
    return (
        <div
            id="speaker-card"
            className="d-flex flex-column justify-content-around align-items-center"
            style={{
                boxShadow: "3px 3px 3px 3px lightgrey",
                backgroundColor: "white",
                padding: "20px",
                margin: "20px",
                minHeight: "350px",
            }}
        >
            <img
                src={speaker.img}
                alt="people"
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                }}
            />
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
                    {speaker.review}
                </p>
                <p style={{ fontSize: "12px", textAlign: "center" }}>
                    {speaker.name}
                </p>
            </div>
        </div>
    )
}