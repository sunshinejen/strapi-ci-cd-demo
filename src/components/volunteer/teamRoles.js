import React, { useMemo } from "react";
import "../../css/main.css";
import "../../css/volunteer-page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import RoleDetailPopUp from './roleDetailPopUp';

export default function TeamRoles({ role }) {
    const roleArray = [];
    const filterRoles = () => {
        const teams = [... new Set(role.map(data => data.team))];

        teams.forEach(element => {
            const filteredRoles = role.filter(role => role.team === element);
            roleArray.push(filteredRoles);

        });
        return roleArray;
    }

    filterRoles();


    return useMemo(() => {
        return (
            <section className="positions-section">
                <div className="container">
                    <h4 className="pt-5">Open Volunteer Opportunities</h4>
                    {roleArray.map((teamRoles, index) => (
                        <Accordion defaultActiveKey="0" key={index}>
                            <Accordion.Item eventKey={index} >
                                <Accordion.Header>{teamRoles[0].team}</Accordion.Header>
                                {teamRoles.map(role => (
                                    <Accordion.Body key={role.id}>
                                        <RoleDetailPopUp role={role} />
                                    </Accordion.Body>
                                ))}
                            </Accordion.Item>
                        </Accordion >
                    ))}
                </div>
            </section>

        )
    }, [roleArray])
}



