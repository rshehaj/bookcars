import React from 'react'

const Process: React.FC = () => (
  <>
    <section className="process section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mb-30">
            <div className="section-subtitle">Steps</div>
            <div className="section-title">
              Car Rental
              <span>Process</span>
            </div>
          </div>
        </div>
        <div className="row">
          {[
              { number: '01', title: 'Choose A Car', description: 'View our range of cars, find your perfect car for the coming days.' },
              { number: '02', title: 'Book Your Car', description: 'Our advisor team is ready to help you with the booking process or any questions.' },
              { number: '03', title: 'Enjoy Driving', description: 'Receive the key and enjoy your car. We treat all our cars with respect.' },
            ].map((step, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className="col-md-4 mb-30" key={index}>
                <div className="item">
                  <div className="text">
                    <h5>{step.title}</h5>
                    <p>{step.description}</p>
                  </div>
                  <div className="numb">
                    <div className="numb-curv">
                      <div className="number">
                        {step.number}
                        .
                      </div>
                      <div className="shap-left-top">
                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                          <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff" />
                        </svg>
                      </div>
                      <div className="shap-right-bottom">
                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                          <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mt-15">
            <p>
              <span className="ti-info" />
              {' '}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              If you've never rented a car before, we'll guide you through the process.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="line-vr-section" />
  </>
    )

export default Process
