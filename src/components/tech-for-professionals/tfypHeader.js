import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { Button } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function TfypHeader({ title, description, headerImg, stakeTitle, stakeDescription, stakeImg, stakeSource }) {

    const [display, setDisplay] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        const popovertarget = ref.current;
        setTarget(popovertarget);
        console.log(target)
    }, [target]);


    const handleClick = () => {
        setDisplay(!display);
        console.log('clicked dsplay button', display);
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (

        <div className="container illustration-header d-flex align-items-center ">
            <div  className="content">
                <h4>{title}</h4>
                <br />
                <p style={{ color: "black" }}>
                    {description}
                </p>
                <Button
                    ref={ref}
                    style={{ textDecoration: "none", color: "#AF8661" }}
                    variant="link"
                    onClick={handleClick}
                >
                    {stakeTitle}
                </Button>

                <div>
                    <Overlay
                        show={display}
                        target={target}
                        placement="auto"
                        container={ref}
                    >
                        <Popover className="stakepop" id="popover-contained">
                            <div className="content-card">
                                <Button className="close"> <FontAwesomeIcon
                                    icon={faTimes}
                                    style={{ color: "grey", textDecoration: "none" }}
                                    onClick={handleClick}
                                />
                                </Button>
                                <Popover.Body style={{ color: "black" }}>
                                    <h4>{title}</h4>
                                    <ReactMarkdown children={stakeDescription} />
                                    <img alt="McKinsey Recolored" src={stakeImg.medium} />
                                    <Button
                                        style={{ color: "grey", textDecoration: "none" }}
                                        variant="link"
                                        onClick={() => openInNewTab(stakeSource)}
                                    >

                                        Source: McKinsey &amp; Company
                                    </Button>
                                </Popover.Body>
                            </div>
                        </Popover>
                    </Overlay>
                </div>

            </div>
            <img
                className="img-fluid"
                src={headerImg.url}
                alt="Young Professionals Clipart"
            />
        </div>
    )
}
