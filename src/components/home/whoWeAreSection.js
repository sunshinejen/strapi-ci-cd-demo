import React from 'react';
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";


/*page button name */
const buttonName = "Become a Volunteer"


export default function WhoWeAreSection({ content, img }) {

    return (
        < div id="whoweare" className="color-background" >
            <div className="container py-5 d-flex flex-column pad-container color-background">
                <div className="row">
                    <div
                        id="whoweare-text"
                        className="col-lg-6 order-1 order-lg-2 pad-text"
                    >
                        <h5>{content.container_title}</h5>
                        <h3>{content.container_subtitle}</h3>
                        <br />
                        <ReactMarkdown>{content.container_content}</ReactMarkdown>

                        <Link to='/volunteer'>
                            <div className="button">{buttonName}</div>
                        </Link>

                        <br />
                    </div>
                    <div id="whoweare-image" className="col-lg-6 order-1 order-lg-2">
                        {
                            Object.values(img).map((element) => (
                                <img className="img-fluid" src={element.url} alt={element.alternativeText} key={element.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
