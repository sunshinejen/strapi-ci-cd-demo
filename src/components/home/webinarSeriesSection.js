import React from 'react';
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";
import "../../css/homepageSections.css";


/*page button name */
const buttonName = "Watch Webinars"


export default function WebinarSeriesSection({ content, imgs }) {

    return (

        <div className="webinar container py-5">
            <div className="row">
                <div
                    id="podcast-thumbnails"
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
                <div className="col-lg-6 order-1 order-lg-2 pad-text">
                    <h5>{content.container_title}</h5>
                    <h3>{content.container_subtitle}</h3>
                    <ReactMarkdown>{content.container_content}</ReactMarkdown>
                    <Link to='/webinars'>
                        <div className="button">{buttonName}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}