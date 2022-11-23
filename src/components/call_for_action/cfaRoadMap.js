import React from 'react';

export default function CfaRoadMap({ title, roadMapImg }) {
    return (
        <div>
            <h3 className="mb-5 navy-text">{title}</h3>
            <img
                className="pb-5 mx-auto"
                src={roadMapImg}
                alt="Image of Call For Action roadmap"
            />
        </div>
    )
}
