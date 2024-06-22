import React from 'react'

const Slider: React.FC = () => (
  <header className="header slider-fade">
    <div className="owl-carousel owl-theme">
      <div className="item bg-img" data-overlay-dark="5" data-background="/img/slider/11.jpg">
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
                  <a href="https://app.flexrent.al" target="_blank" className="button-1 mt-15 mb-15" rel="noreferrer">
                    View Details
                    <span className="ti-arrow-top-right" />
                  </a>
                  <a href="https://app.flexrent.al" target="_blank" className="button-2 mt-15 mb-15" rel="noreferrer">
                    Rent Now
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
    )

export default Slider
