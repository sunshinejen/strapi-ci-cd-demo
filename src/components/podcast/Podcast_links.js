import React from 'react'
import { faSoundcloud, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPodcast} from "@fortawesome/free-solid-svg-icons";
import "../../css/podcast/podcast_links.css";

// Podcasts Links Component
const PodcastLinks = ({soundCloud,spotify,podcasts,className}) => {
  return (
        <div className={className ? className : "podcast-links-buttons"} >
            {/* sound cloud link */}
            <a
                data-testid = 'soundCloud-link'
                target="_blank"
                rel="noopener noreferrer"
                href={soundCloud}
                className='link-tag'
                >
                    <span className='hover-text tooltiptext' > Soundcloud </span>
                <FontAwesomeIcon
                    icon={faSoundcloud}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Soundcloud"
                    className="podbtn fa-2x"/>
            </a>

            {/* Spotify link */}
            <a
                data-testid = 'spotify-link'
                target="_blank"
                rel="noopener noreferrer"
                href={spotify}
                className='link-tag'
                >
                    <span className='hover-text tooltiptext'> Spotify </span>
                <FontAwesomeIcon
                    icon={faSpotify}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Spotify"
                    className="podbtn fa-2x"/>
            </a>

            {/* apple link */}
            <a
                data-testid = 'apple-link'
                target="_blank"
                rel="noopener noreferrer"
                href={podcasts}
                className='link-tag'
                >
                    <span className='hover-text tooltiptext'> Apple </span>
                <FontAwesomeIcon
                    icon={faPodcast}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Apple Podcasts"
                    className="podbtn fa-2x"/>
            </a>
        </div>
    )
}
export default PodcastLinks