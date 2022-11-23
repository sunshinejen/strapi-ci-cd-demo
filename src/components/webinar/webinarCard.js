import React, { useState } from "react";
import { Modal, Button, ModalBody } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "../../css/main.css";
import "../../css/webinar.css";


export default function WebinarCard({ webinar }) {

    const [showModal, setShowModal] = useState(false);
    return (
        <div className="web-grid">
            <div className="webcard">
                <img src={webinar.flyer_img.url} className="webCard-img-top" alt="webinar poster" />
                <div
                    className="webcard-body"
                >
                    <h6 className="webcard-subtitle mb-2 text-muted">
                        {webinar.date}
                    </h6>
                    <h5 className="webcard-title">
                        {webinar.webinar_title}
                    </h5>
                    <ReactMarkdown className="webcard-text">
                        {webinar.webinar_description}
                    </ReactMarkdown>
                    <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        onClick={() => setShowModal(!showModal)}
                        data-testid="webinar-view-button"
                    >
                        View Webinar
                    </button>
                    {showModal ? (
                        <Modal show={showModal} onHide={() => setShowModal(!showModal)} size="lg">
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <div className="webinar-video">
                                <iframe
                                    width="100%"
                                    height="450"
                                    src={webinar.webinar_url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>
                            <ModalBody>
                                <Modal.Title data-testid="modal-title"> Harvard in Tech Seattle Webinar - {webinar.webinar_title}</Modal.Title>
                            </ModalBody>
                            <Modal.Body data-testid="modal-description">
                                <ReactMarkdown children={webinar.webinar_description} />
                            </Modal.Body>
                            <Modal.Body data-testid="modal-panelist">
                                <ReactMarkdown children={webinar.panelist_names} />
                            </Modal.Body>
                            <Modal.Body data-testid="modal-moderators">
                                <ReactMarkdown children={webinar.moderator_names} />
                            </Modal.Body>
                            <Modal.Body data-testid="modal-takeaways">
                                <ReactMarkdown children={webinar.key_takeaways} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    ) : null}
                </div>
            </div>
        </div>
    )
}
