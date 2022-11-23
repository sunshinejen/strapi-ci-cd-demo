import React, { useState } from "react";
import "../../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VolunteerHeader from "./volunteerHeader";
import RoleButtons from "./roleButtons";



export default function Volunteer({ legalRoles, nonTechRoles, techRoles }) {
    return (

        <>
            <VolunteerHeader />
            <RoleButtons nonTechRoles={nonTechRoles} legalRoles={legalRoles} techRoles={techRoles}/>
        </>

    )
}
