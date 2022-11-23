import React, { useState } from "react";
import TfypHeader from './tfypHeader';
import "../../css/young-professionals.css";
import Goals from './goals';
import Phases from "./phases";

export default function Professionals({ page, goals, phases }) {
  console.log(phases)
  //console.log(page[0].tech_for_young_professionals_title)
  const header = page[0];
  const [tfypGoals] = useState(goals);
  const [tfypPhases] = useState(phases);


  return (
    <>
      <TfypHeader
        title={header.tech_for_young_professionals_title}
        description={header.tech_for_young_professionals_description}
        headerImg={header.tech_for_young_professionals_roadmap_img}
        stakeTitle={header.tech_for_young_professionals_stake_title}
        stakeDescription={header.tech_for_young_professionals_stake_description}
        stakeImg={header.tech_for_young_professionals_stake_img}
        stakeSource={header.tech_for_young_professionals_source_url}
      />

      <section className="header-goal">
        <div className="container">
          <div className="row">
            {tfypGoals.map((goal) => (
              <Goals goal={goal} key={goal.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="road-map py-5">
        <div className="container">
          <div className="content">
            <h3 className="mb-5">ROADMAP</h3>
            {tfypPhases.map((phase) => (
              <Phases phase={phase} key={phase.id} />
            ))}

          </div>
        </div>
      </section>

      <section className="tech-career pb-5">
        <div className="container">
          <div className="content">
            <h3 className="my-5">Let's Talk Tech Career</h3>
          </div>
        </div>
      </section>


    </>
  )
}
