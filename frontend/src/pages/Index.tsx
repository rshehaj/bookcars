import React from 'react'

import Header from '../components/landing_page/Header'
import Services from '../components/landing_page/Services'
import Process from '../components/landing_page/Process'
import Testimonials from '../components/landing_page/Testimonials'
import Footer from '../components/landing_page/Footer'
import Scripts from '../components/landing_page/Scripts'

import '../assets/css/landing_page/css/plugins.css'
import '../assets/css/landing_page/css/style.css'

const Index: React.FC = () => (
  <div>
    <Header />
    <Services />
    <Process />
    <Testimonials />
    <Footer />
    <Scripts />
  </div>
    )

export default Index
