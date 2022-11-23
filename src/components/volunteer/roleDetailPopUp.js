import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "../../css/volunteer-page.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RoleDetailPopUp({ role }) {
 // console.log('ROLE', volunteerRole);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const openModal = () => {
    setShow(true);
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        {role.role_name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{role.role_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {role.team}
        </Modal.Body>
        <Modal.Body>
          <ReactMarkdown children={role.role_description} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => openInNewTab(role.application_URL)} >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>

    </>

  )
}

