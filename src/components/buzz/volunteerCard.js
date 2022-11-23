import React from 'react';
import "../../css/buzz.css";

export default function VolunteerCard({ volunteer}) {
    return (

        <div
            id='volunteer-card'
            className="bigCard d-flex flex-column justify-content-around align-items-center "
            style={{
                boxShadow: "3px 3px 3px 3px lightgrey",
                backgroundColor: "white",
                padding: "30px",
                margin: "20px",
                minHeight: "350px",
            }}
        >
            <img
                src={volunteer.img}
                alt="people"
                style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "200px",
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
                    {volunteer.review}
                </p>
                <p style={{ fontSize: "12px", textAlign: "center" }}>
                    {volunteer.name}
                </p>
            </div>
        </div>
    )
}
