import React from 'react';
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";
import "../../css/homepageSections.css";

/*page button name */
const buttonName = "Listen Podcast"

export default function PodcastSeriesSection({ content, imgs }) {
    console.log(imgs);

    return (
        <div id="podcast" className="color-background">
            <div className="container d-flex flex-column pad-container">
                <div className="row">
                    <div
                        id="podcast-text"
                        className="col-lg-6 order-1 order-lg-2 pad-text"
                    >
                        <h5>{content.container_title}</h5>
                        <h3>{content.container_subtitle}</h3>
                        <br />
                        <ReactMarkdown>{content.container_content}</ReactMarkdown>
                        <div>
                            <Link to="/podcast" >
                                <div className="button">{buttonName}</div>
                            </Link>
                        </div>
                    </div>
                    <div
                        id="podcast-thumbnails"
                        className="col-lg-6 order-1 order-lg-2"
                    >
                        {
                            Object.values(imgs).map((element) => (
                                Object.values(element).map((img, index) => (
                                    <div className="flex-child" key={index}>
                                        <img src={img.url} alt={img.alt} />
                                    </div>
                                ))
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
