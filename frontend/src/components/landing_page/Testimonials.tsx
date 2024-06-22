import React from 'react'

const test = [
    {
        name: 'Elena K.',
        role: 'Customer',
        text: 'FlexRent made my trip seamless with their excellent customer service and well-maintained cars!',
    },
    {
        name: 'Mark T.',
        role: 'Customer',
        text: 'Affordable prices and a hassle-free rental process. Highly recommend FlexRent!',
    },
    {
        name: 'Sara M.',
        role: 'Customer',
        text: 'Great experience! The car was in perfect condition and the booking process was quick and easy.',
    },
]
const Testimonials: React.FC = () => (
  <>
    <section className="testimonials section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-30">
            <div className="section-subtitle">Testimonials</div>
            <div className="section-title">What Clients Say</div>
          </div>
          <div className="col-md-12">
            <div className="owl-carousel owl-theme">
              {test.map((testimonial, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                <div className="item" key={index}>
                  <div className="stars">
                    <span className="rate">
                      {[...Array(5)].map((_, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <i className="fa-solid fa-star" key={i} />
                    ))}
                    </span>
                    <div className="shap-left-top">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#ffffff"
                        />
                      </svg>
                    </div>
                    <div className="shap-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#ffffff"
                        />
                      </svg>
                    </div>
                  </div>
                  <i className="fa-solid fa-quote-left" />
                  <div className="text">
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="info mt-30">
                    <div className="ml-30">
                      <h6>{testimonial.name}</h6>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="lets-talk bg-img bg-fixed section-padding"
      style={{
                backgroundImage: 'url(img/slider/3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6>Rent Your Car</h6>
            <h5>Interested in Renting?</h5>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Don't hesitate and send us a message.</p>
            <a
              href="https://wa.me/355692092131"
              target="_blank"
              rel="noopener noreferrer"
              className="button-1 mt-15 mb-15 mr-10"
            >
              <i className="fa-brands fa-whatsapp" />
              {' '}
              WhatsApp
            </a>
            <a
              href="https://app.flexrent.al"
              target="_blank"
              rel="noopener noreferrer"
              className="button-2 mt-15 mb-15"
            >
              Rent Now
              {' '}
              <i className="fa-brands fa-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="clients">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="owl-carousel owl-theme">
              <div className="clients-logo">
                <a href="#0"><img src="img/clients/1.png" alt="Client 1" /></a>
              </div>
              <div className="clients-logo">
                <a href="#0"><img src="img/clients/2.png" alt="Client 2" /></a>
              </div>
              <div className="clients-logo">
                <a href="#0"><img src="img/clients/3.png" alt="Client 3" /></a>
              </div>
              <div className="clients-logo">
                <a href="#0"><img src="img/clients/4.png" alt="Client 4" /></a>
              </div>
              <div className="clients-logo">
                <a href="#0"><img src="img/clients/5.png" alt="Client 5" /></a>
              </div>
              <div className="clients-logo">
                <a href="#0"><img src="img/clients/6.png" alt="Client 6" /></a>
              </div>
              <div className="clients-logo">
                <a href="#0"><img src="img/clients/7.png" alt="Client 7" /></a>
              </div>
              <div className="clients-logo">
                <a href="#0"><img src="img/clients/8.png" alt="Client 8" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Testimonials
