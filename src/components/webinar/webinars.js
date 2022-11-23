import React, { useState } from "react";
import FeaturedWebinar from "./featuredWebinar";
import LatestWebinars from "./latestWebinars";
import UpcomingWebinars from "./upcomingWebinars";

export default function Webinars({ webinars, upcoming }) {
    return (
        <>
            <FeaturedWebinar webinar={webinars[0]} />
            <UpcomingWebinars upcoming={upcoming} />
            <LatestWebinars webinars={webinars}/>
        </>
    )
}
/* 
         */