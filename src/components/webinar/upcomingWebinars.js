import React, { useState } from "react";
import "../../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UpcomingWebinars({ upcoming }) {
    const [upcomingWebinars] = useState(upcoming);
    console.log(upcomingWebinars);

    return (
        <div className="upcoming-Webinars">
            <div className="container py-5">
                <h5>Upcoming Webinars</h5>
                <div className="wrapper-grid">
                    <ul>
                        {upcomingWebinars.map((webinar) => (
                        <li className="webinar-items" data-testid= "upcoming-webinar-items" key={webinar.id}>{webinar.upcoming_webinar_title} - {webinar.date}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
