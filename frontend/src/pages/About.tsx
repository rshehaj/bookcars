import React from 'react'

import Footer from '../components/landing_page/Footer'
import Scripts from '../components/landing_page/Scripts'

import '../assets/css/landing_page/css/plugins.css'
import '../assets/css/landing_page/css/style.css'
import Navbar from '../components/landing_page/Navbar'
import Testimonials from '../components/landing_page/Testimonials'
import AboutSection from '../components/landing_page/AboutSection'
import Banner from '../components/landing_page/Banner'

const About = () => {
    const onLoad = () => {
    }

    return (
      <>
        <Navbar />
        <Banner />
        <AboutSection />
        <Testimonials />
        <Footer />
        <Scripts />
      </>
)
}

export default About
