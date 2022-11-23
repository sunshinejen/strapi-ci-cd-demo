import React from 'react';

export default function CallForActionHeader({ title, description }) {

    //need to add to CFA page header-img
    const headerImg = "https://res.cloudinary.com/dlz977spb/image/upload/v1668644788/call-for-action-intro_xduehw.png"
    return (
        <div>
            <div className="container illustration-header d-flex align-items-center">
                <div className="content">
                    <h4>{title}</h4>
                    <br />
                    <p style={{ color: "black", whiteSpace: "break-spaces" }}>
                        {description}
                    </p>
                </div>
                <img className="img-fluid" src={headerImg} />
            </div>
        </div>
    )
}
