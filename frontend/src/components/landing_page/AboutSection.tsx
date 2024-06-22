// src/components/About.tsx
import React from 'react'

const AboutSection: React.FC = () => (
  <section className="about section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="content">
            <div className="section-subtitle">FlexRent</div>
            <div className="section-title">
              We Are More Than
              <span>A Car Rental Company</span>
            </div>
            <p>Welcome to FlexRent.al, your top choice for car rentals in Albania. Driven by a mission to transform the car rental industry, FlexRent connects local car providers with explorers eager to discover the beauty of Albania.</p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="mb-30">Our service is more than just rentals; it's about creating unforgettable travel experiences with ease, reliability, and exceptional customer support.</p>
            <div>
              <div>
                <h2 className="section-title mb-30">Our Mission</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="mb-30">At FlexRent, we have a dual mission. For car providers, we aim to be the leading platform that boosts visibility and expands business opportunities. We understand the challenges of reaching a broad audience in today's competitive market and are here to ensure your fleet is noticed by those who need it most. For travelers, whether you're navigating the historic streets of Tirana, enjoying the beaches of Durres, or taking a scenic drive to Saranda, we strive to provide the perfect vehicle for your journey.</p>
                <h2 className="section-title mb-30">Why FlexRent?</h2>
                <ul className="list-unstyled list mb-30">
                  <li>
                    <div className="list-icon">
                      {' '}
                      <span className="ti-check" />
                      {' '}
                    </div>
                    <p className="list-text">
                      <b>Extensive Network:</b>
                      {' '}
                      Our comprehensive network spans various locations throughout Albania, including major cities and tourist spots such as Tirana, the Airport, Durres, Shkoder, Fier, Vlore, Korce, Saranda, and beyond. No matter where your travels take you, FlexRent is there.
                    </p>
                  </li>
                  <li>
                    <div className="list-icon">
                      {' '}
                      <span className="ti-check" />
                      {' '}
                    </div>
                    <p className="list-text">
                      <b>Diverse Fleet:</b>
                      {' '}
                      We pride ourselves on offering a wide selection of vehicles to meet every preference, need, and budget. From economical city cars for urban adventures to roomy SUVs for family trips, our vehicles are meticulously maintained to ensure your journey is safe and enjoyable.
                    </p>
                  </li>
                  <li>
                    <div className="list-icon">
                      {' '}
                      <span className="ti-check" />
                      {' '}
                    </div>
                    <p className="list-text">
                      <b>Effortless Booking:</b>
                      {' '}
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      FlexRent streamlines the car rental process with an intuitive online booking system that saves you time and effort. Browse, compare, and book your ideal car in just a few clicks, and we'll handle the rest.
                    </p>
                  </li>
                  <li>
                    <div className="list-icon">
                      {' '}
                      <span className="ti-check" />
                      {' '}
                    </div>
                    <p className="list-text">
                      <b>Local Expertise, Global Standards:</b>
                      {' '}
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Although we are firmly rooted in Albania, our services adhere to international standards of quality and professionalism. Our team consists of local experts eager to share Albania's best with you, providing authentic recommendations and insights for your travels.
                    </p>
                  </li>
                  <li>
                    <div className="list-icon">
                      {' '}
                      <span className="ti-check" />
                      {' '}
                    </div>
                    <p className="list-text">
                      <b>Dedication to Customer Satisfaction:</b>
                      {' '}
                      Your satisfaction is our priority. We are committed to delivering outstanding customer service from the moment you visit our website to the end of your rental period. FlexRent is dedicated to making your car rental experience smooth, enjoyable, and memorable.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 offset-md-1">
          <div className="item">
            <img src="img/about.jpg" className="img-fluid" alt="About Us" />
            <div className="curv-butn icon-bg">
              <div className="br-left-top">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff" />
                </svg>
              </div>
              <div className="br-right-bottom">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )

export default AboutSection
