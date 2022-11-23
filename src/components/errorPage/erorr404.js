import React from 'react';
import { Button } from 'react-bootstrap';
import "../../css/error404/errorPage.css";
import { navigate } from "gatsby"

export default function Error404() {

  return (
    <div className="container">
      <div className="illustration-header d-flex align-items-center mb-5">
        <div className="content">
          <h4 className="errorPage">Oops... We couldn't find this page.</h4>
          <p className='errorPage'>
            We might have removed this page when redesigning our website or the link
            you clicked might be outdated and does not exist anymore.
          </p>
          <Button onClick={() => (navigate("/"))} size="sm">Return Home</Button>
          <Button onClick={()=>( navigate(-1))} size="sm">Previous Page</Button>
        </div>
        <img className="img-fluid" src="https://res.cloudinary.com/dlz977spb/image/upload/v1666818357/error-404-blue_jmvmuh.png" alt="Volunteer Clipart" />
      </div>
    </div>



  )
}
