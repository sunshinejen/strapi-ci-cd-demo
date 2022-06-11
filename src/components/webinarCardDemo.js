import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/main.css";
import "../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../images/webinar/ai-in-healthcare.png";


export default function WebinarCardDemo({ webinarList }) {
    const [showModal, setShowModal] = useState(false);
    const [chosenWebinar, setChosenWebinar] = useState(null);

    const openModal = id => {
        console.log(id);
        setChosenWebinar(id);
        setShowModal(!showModal);
    }

    return (
        <>
            {
                webinarList.map((webinar) => (
                    <div className="grid-item recent-3 2021">
                        <div className="card" key={webinar.webinarId} >
                            <img src={img} className="card-img-top" alt="..." />
                            <div
                                className="card-body"
                                style={{ backgroundColor: "#f4f3f2" }}
                            >
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {webinar.date}
                                </h6>
                                <h5 className="card-title">
                                    {webinar.title}
                                </h5>
                                <p
                                    className="card-text"
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: "400",
                                        lineHeight: "1.5",
                                        color: "#212529",
                                        textAlign: "left",
                                    }}
                                >
                                    {webinar.description}
                                </p>
                                <button
                                    style={{ color: "#af8661", textDecoration: "none" }}
                                    type="button"
                                    className="readMoreBtn btn-link"
                                    onClick={() => openModal(webinar.webinarId)}
                                >
                                    View Webinar
                                </button>


                                {webinar.webinarId === chosenWebinar ? (
                                    <Modal show={showModal}
                                    >
                                        <div className="modal-header">
                                            Harvard in Tech Seattle Webinar
                                        </div>
                                        <Modal.Body className="modal-body p-0">
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe
                                                    src={webinar.webinarUrl}
                                                    title="YouTube video player"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                                >
                                                </iframe>
                                            </div>
                                            <div className="modal-description px-3">
                                                <h5 className="py-3">
                                                    Harvard in Tech Seattle presents a special webinar on:{" "} {webinar.title}
                                                </h5>
                                                <p>
                                                    {webinar.description}
                                                </p>
                                                <p>
                                                    {webinar.summary}
                                                </p>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
                                                Close
                                            </Button>
                                        </Modal.Footer>

                                    </Modal>) : null
                                }
                            </div>
                        </div>

                    </div>

                ))

            }

        </>

    )
}