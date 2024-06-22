import React from 'react'

const Navbar: React.FC = () => (
  <>
    {/* Preloader */}
    <div className="preloader-bg" />
    <div id="preloader">
      <div id="preloader-status">
        <div className="preloader-position loader">
          <span />
        </div>
      </div>
    </div>
    {/* Progress scroll to top */}
    <div className="progress-wrap cursor-pointer">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo-wrapper">
          <a className="logo" href="/">
            <img src="/img/logo.png" className="logo-img" alt="FlexRent" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i className="fa-solid fa-bars" /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            <li className="nav-item">
              <a className="nav-link" href="/sign-in">Sign In</a>
            </li>
          </ul>
          <div className="navbar-right">
            <div className="wrap">
              <div className="icon"><i className="flaticon-phone-call" /></div>
              <div className="text">
                <p>Need help?</p>
                <h5><a href="tel:355692092131">35569 20 92 131</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
)

export default Navbar
