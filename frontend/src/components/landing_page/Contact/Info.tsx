// src/components/ContactInfo.tsx
import React from 'react'

const Info: React.FC = () => (
  <div className="contact-box">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 animate-box" data-animate-effect="fadeInUp">
          <div className="item">
            <span className="icon omfi-envelope" />
            <h5>Email us</h5>
            <p>info@flexrent.al</p>
            {' '}
            <i className="numb omfi-envelope" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 animate-box" data-animate-effect="fadeInUp">
          <div className="item">
            <span className="icon omfi-location" />
            <h5>Our address</h5>
            <p>Albania, Fier Patos KM 4, Portez 9301</p>
            {' '}
            <i className="numb omfi-location" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 animate-box" data-animate-effect="fadeInUp">
          <div className="item">
            <span className="icon ti-time" />
            <h5>Opening Hours</h5>
            <p>Mon-Sun: 8 AM - 7 PM</p>
            {' '}
            <i className="numb ti-time" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 animate-box" data-animate-effect="fadeInUp">
          <div className="item active">
            <span className="icon omfi-phone" />
            <h5>Call us</h5>
            <p>+355 69 20 92 131</p>
            {' '}
            <i className="numb omfi-phone" />
          </div>
        </div>
      </div>
    </div>
  </div>
    )

export default Info
