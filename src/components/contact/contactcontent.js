import React from "react";
import "../../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/contact.css";
import himg from "../../images/illustrations/cropped-contact.png";
import ContactLinks from './/contact_Links'

// Contact Page Component
const ContactPage = ({contactPageData}) => {
  return (
      <div className="container">
        <div className="illustration-header d-flex align-items-center mb-5">
          <div className="content">
            <h4 className="contact-page-title">{contactPageData.title}</h4>
            <p className="contact-page-content">{contactPageData.content}</p>

            {/* Contact Links Component */}
            <div className="d-flex flex-wrap">
              <ContactLinks />
            </div>
          </div>
          <img className="img-fluid" src={himg} alt="Contact Clipart" />
        </div>
      </div>
  );
};

export default ContactPage;
