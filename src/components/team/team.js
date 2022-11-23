import React from 'react';
import TeamButtons from './teamButtons';
import TeamHeader from './teamHeader';

export default function Team({ teams, cfaTeam, marketingTeam, techSolutionTeam, techforYoungTeam, hrTeam, podcastTeam, webinarTeam, strategyTeam }) {
    console.log(teams)
    return (
        <>
            <TeamHeader />
            <section className="team py-5">
                <div className="bgd pt-3">
                    <h3 className="text-center subtitle">View Volunteers by Team</h3>
                    <TeamButtons
                        teams={teams}
                        cfa={cfaTeam}
                        marketing={marketingTeam}
                        tech={techSolutionTeam}
                        tfyp={techforYoungTeam}
                        hr={hrTeam}
                        podcast={podcastTeam}
                        webinar={webinarTeam}
                        strategy= {strategyTeam}
                    />
                </div>
            </section>
        </>
    )
}
