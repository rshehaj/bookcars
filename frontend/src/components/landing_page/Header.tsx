import React from 'react'
import Navbar from './Navbar'

const Header: React.FC = () => (
  <>
    <Navbar />
    <header className="header slider-fade">
      <div className="owl-carousel owl-theme">
        {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
        <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/11.html">
          <div className="v-middle caption">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                  <div className="v-middle">
                    <h6>* Premium</h6>
                    <h1 className="brand">
                      <span>Flex</span>
                      Rent
                    </h1>
                    <br />
                    <a href="/search" className="button-1 mt-15 mb-15" rel="noopener noreferrer">
                      View Details
                      {' '}
                      <span className="ti-arrow-top-right" />
                    </a>
                    <a href="/search" target="_blank" data-scroll-nav="1" className="button-2 mt-15 mb-15" rel="noopener noreferrer">
                      Rent Now
                      {' '}
                      <span className="ti-arrow-top-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/12.jpg">
          <div className="v-middle caption">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                  <div className="v-middle">
                    <h6>* Premium</h6>
                    <h1 className="brand">
                      <span>Flex</span>
                      Rent
                    </h1>
                    <br />
                    <a href="/search" target="_blank" className="button-1 mt-15 mb-15" rel="noopener noreferrer">
                      View Details
                      {' '}
                      <span className="ti-arrow-top-right" />
                    </a>
                    <a href="/search" target="_blank" data-scroll-nav="1" className="button-2 mt-15 mb-15" rel="noopener noreferrer">
                      Rent Now
                      {' '}
                      <span className="ti-arrow-top-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/14.jpg">
          <div className="v-middle caption">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                  <div className="v-middle">
                    <h6>* Premium</h6>
                    <h1 className="brand">
                      <span>Flex</span>
                      Rent
                    </h1>
                    <br />
                    <a href="/search" target="_blank" className="button-1 mt-15 mb-15">
                      View Details
                      {' '}
                      <span className="ti-arrow-top-right" />
                    </a>
                    <a href="/search" target="_blank" data-scroll-nav="1" className="button-2 mt-15 mb-15" rel="noopener noreferrer">
                      Rent Now
                      {' '}
                      <span className="ti-arrow-top-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="line-vr-section" />
  </>
)

export default Header
