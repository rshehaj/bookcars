import React from 'react'

const Footer: React.FC = () => (
  <footer className="footer clearfix">
    <div className="container">
      <div className="first-footer">
        <div className="row">
          <div className="col-md-12">
            <div className="links dark footer-contact-links">
              <div className="footer-contact-links-wrapper">
                <div className="footer-contact-link-wrapper">
                  <div className="image-wrapper footer-contact-link-icon">
                    <div className="icon-footer"><i className="flaticon-phone-call" /></div>
                  </div>
                  <div className="footer-contact-link-content">
                    <h6>Call us</h6>
                    <p>+35569 20 92 131</p>
                  </div>
                </div>
                <div className="footer-contact-links-divider" />
                <div className="footer-contact-link-wrapper">
                  <div className="image-wrapper footer-contact-link-icon">
                    <div className="icon-footer"><i className="omfi-envelope" /></div>
                  </div>
                  <div className="footer-contact-link-content">
                    <h6>Write to us</h6>
                    <p>info@flexrent.al</p>
                  </div>
                </div>
                <div className="footer-contact-links-divider" />
                <div className="footer-contact-link-wrapper">
                  <div className="image-wrapper footer-contact-link-icon">
                    <div className="icon-footer"><i className="omfi-location" /></div>
                  </div>
                  <div className="footer-contact-link-content">
                    <h6>Address</h6>
                    <p>Albania, Fier Patos KM 4, Portez 9301</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-footer">
        <div className="row">
          <div className="col-md-4 widget-area">
            <div className="widget clearfix">
              <div className="footer-logo"><img src="img/logo.png" alt="FlexRent" /></div>
              <div className="widget-text">
                <p>Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.</p>
                <div className="social-icons">
                  <ul className="list-inline">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <li><a href="https://wa.me/355692092131"><i className="fa-brands fa-whatsapp" /></a></li>
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <li><a href="https://www.instagram.com/flexrent.al/"><i className="fa-brands fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 offset-md-1 widget-area">
            <div className="widget clearfix usful-links">
              <h3 className="widget-title">Quick Links</h3>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )

export default Footer
