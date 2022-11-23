import React from 'react'

export default function EventCard({ event }) {
    return (


        <div
            className="d-flex flex-column align-items-center"
            style={{
                width: "270px",
                boxShadow: "3px 3px 3px 3px lightgrey",
                backgroundColor: "white",
                padding: "20px",
                margin: "10px",
                minHeight: "350px",
            }}
        >
            <div className='event-img-div'>
                <img
                    className='e-img'
                    src={event.image}
                    alt="people"
                    style={{ width: "100%", marginBottom: "10px" }}
                />
            </div>
            <div className='event-div'>
                <h5 className='event-title' style={{ color: "#02274d", fontSize: "16px" }}>
                    {event.event_title}
                </h5>
                <p className='event-description' style={{ fontSize: "14px" }}>
                    {event.event_description}
                </p>
            </div>
        </div>
    )
}


/*
.event-div {
    display: flex;
    flex-direction: column;
}

img.event-img {
    flex:1 0 auto;
    objectFit:cover;
}

*/
