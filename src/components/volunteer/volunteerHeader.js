import React from 'react';
import "../../css/volunteer-page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VolunteerImageHeader from '../.././images/illustrations/volunteer.png';

export default function VolunteerHeader() {
    return (
        <div className="container">
            <div className="illustration-header d-flex align-items-center mb-5">
                <div className="content">
                    <h4>Come Join Us</h4>
                    <p>
                        Looking to get involved? Want to build a portion of your resume?
                        Maybe you want to be a part of an awesome group of people? Then
                        consider volunteering with us!
                    </p>
                    <p>
                        Harvard is Tech Seattle is a volunteer-based organization with
                        people from around the world! We have opportunities for people
                        with all backgrounds! Check out our open roles and connect with us
                        if you want to join our diverse team!
                    </p>
                </div>
                <img className="img-fluid" src={VolunteerImageHeader} alt="Volunteer Clipart" />
            </div>
        </div>
    )
}
