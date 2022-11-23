import React, { useState } from "react";
import "../../css/young-professionals.css";



export default function Goals({ goal }) {


    console.log(goal);

    return (
        <>
            <div className="col-12 col-lg-6">
                <div className="row align-items-center row-height">
                    <h5 className="col-3">{goal.goal_name}</h5>
                    <p className="col-9 ">{goal.goal_description}</p>
                </div>
            </div>
        </>

    )
}


