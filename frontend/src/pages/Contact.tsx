import React from 'react'
import Master from '../components/Master'

import '../assets/css/contact.css'
import Footer from '../components/landing_page/Footer'
import Navbar from '../components/landing_page/Navbar'
import Scripts from '../components/landing_page/Scripts'
import Banner from '../components/landing_page/Contact/Banner'
import Info from '../components/landing_page/Contact/Info'
import Form from '../components/landing_page/Contact/Form'

import '../assets/css/landing_page/css/plugins.css'
import '../assets/css/landing_page/css/style.css'

const Contact = () => (
  <>
    <div className="bg-gray">
      <Navbar />
      <Banner />
      <Info />
      <Form />
      <Footer />
      <Scripts />
    </div>
  </>
)

export default Contact
