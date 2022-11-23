import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/events.css";
import EventCard from "./eventCard";

export default function Event({ eventData }) {

    const [events] = useState(eventData);

    return (
        <>
            <div className="container illustration-header d-flex align-items-center">
                <div className="content">
                    <h4>Events</h4>
                    <p style={{ color: "black" }}>
                        Come join us for in-person events that foster meaningful
                        interactions and highlight alumni work.
                    </p>
                </div>
                <img
                    style={{ height: "362px", borderStyle: "none" }}
                    className="img-fluid"
                    src="https://res.cloudinary.com/dlz977spb/image/upload/v1668736560/Networking_Night_img_7b78a241de.jpg"
                />
            </div>
            <div style={{ marginBottom: "50px" }}>

                <div
                    className="container d-flex flex-column justify-content-center align-items-center"
                    style={{ backgroundColor: "#ebeced", padding: "100px" }}
                >
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        {events.map((event) => (
                            <EventCard event={event} key={event.id} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
