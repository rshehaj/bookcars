// src/components/ContactForm.tsx
import React from 'react'

import Map from './Map'

const Form: React.FC = () => (
  <section className="bg-gray contact section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-30">
          <div className="form-box">
            <h5>Get in touch</h5>
            <form method="post" className="contact__form" action="/scripts/mail.php">
              <div className="row">
                <div className="col-12">
                  <div
                    className="alert alert-success contact__msg"
                    style={{ display: 'none' }}
                    role="alert"
                  >
                    {' '}
                    Your message was sent successfully.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input name="name" type="text" placeholder="Your Name *" required />
                </div>
                <div className="col-md-6 form-group">
                  <input name="email" type="email" placeholder="Your Email *" required />
                </div>
                <div className="col-md-6 form-group">
                  <input name="phone" type="text" placeholder="Your Number *" required />
                </div>
                <div className="col-md-6 form-group">
                  <input name="subject" type="text" placeholder="Subject *" required />
                </div>
                <div className="col-md-12 form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={4}
                    placeholder="Message *"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input name="submit" type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <Map />
      </div>
    </div>
  </section>
)

export default Form
