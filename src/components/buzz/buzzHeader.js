import React from 'react';
import buzzHeaderImg from "../../images/illustrations/cropped-buzz.png"

export default function BuzzHeader() {
    return (
        <div className="container">
            <div className="illustration-header d-flex align-items-center mb-5">
                <div className="content">
                    <h4>Buzz</h4>
                    <br />
                    <p>
                        Let's hear from our Speakers, Participants and Volunteers, their
                        amazing experience at Harvard in Tech Seattle.
                    </p>
                </div>
                <img
                    className="img-fluid"
                    src={buzzHeaderImg}
                    alt="Seattle Buzz Clipart"
                />
            </div>
        </div>
    )
}
