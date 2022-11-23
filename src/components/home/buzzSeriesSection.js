import React from 'react';
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";

/*page button name */
const pageTitle = "Buzz";
const buttonName = "More";

export default function BuzzSeriesSection({ content }) {

    console.log(content);
    return (
        <div className="container pad-text sec-width">
            <h5>{pageTitle}</h5>
            <div className="container d-flex flex-column justify-content-center align-items-center buzz-padding">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    {content.map((speaker) => (
                        
                        <div className="d-flex flex-column justify-content-around align-items-center buzz-card" key={speaker.id}>
                            <img className="hshot" src={speaker.img.url} alt={speaker.img.alt} />
                            <div>
                                {console.log(speaker.img.url)}
                                <ReactMarkdown className="buzz-text-top" style={{ marginBottom: "0em" }} >{speaker.review}</ReactMarkdown>
                                <p className="buzz-text-bottom">
                                    {speaker.name}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
                <Link to="/buzz" >
                    <div className="button">{buttonName}</div>
                </Link>
            </div>
        </div>
    )
}
