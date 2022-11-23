import React from 'react'
import "../../css/podcast/podcast_card.css";
import PodcastLinks from './/Podcast_links'

// Individual Podcast Component
const PodcastCard = ({img, guestName, description, guestTitle, Links, className}) => {
    return (
        <div className={className ? 'spotlight-card' : 'podcast-card'}>
            {/* podcast Image */}
            { img && <img src={img} className="podcast-image" alt="..." />}

            {/* podcast Information */}
            <div className="podcast-card-info">
                <h1 className="podcast-card-guest">{guestName}</h1>
                <p className="podcast-card-guestTitle"> {guestTitle} </p>
                <p className='podcast-card-description'>{description}</p>
            </div>
            
            {/* podcast links */}
            <div className="podcast-links">
                <PodcastLinks 
                    soundCloud={Links.soundCloud}
                    spotify={Links.spotify}
                    podcasts={Links.podcasts}
                    className={Links.className}
                />
            </div>
        </div>
    )
}
export default PodcastCard