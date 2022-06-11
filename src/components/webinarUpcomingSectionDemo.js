import React from "react";
import { useWebinarListingQuery } from "../hooks/useWebinarListingQuery";

export default function WebinarUpcomingSectionDemo() {
  const upcomingWebinarList = [];
  const upcomingWebinars = useWebinarListingQuery();

  const getUpcomingWebinars = () => {
    upcomingWebinars.allStrapiWebinar.edges.forEach(webinarEdge => {
      upcomingWebinarList.push({
        webinarId: webinarEdge.node.id,
        title: webinarEdge.node.webinar_title,
        date: webinarEdge.node.date,
        time: webinarEdge.node.time,
      });

    });
    return upcomingWebinarList;
  }

  getUpcomingWebinars();
  /* TODO: Set up carousel per wireframe for multiple upcoming webinars */

  return (


    <>
      <ul>
        {
          upcomingWebinarList.map((webinar) =>(
            <li key={webinar.webinarId} >{webinar.title} {webinar.date} {webinar.time}</li>
          ))
        }
      </ul>
    </>
  )
}
