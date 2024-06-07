import React, { useState, useEffect } from 'react'
import { FormControl, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { DateTimeValidationError } from '@mui/x-date-pickers'
import * as bookcarsTypes from ':bookcars-types'
import { strings as commonStrings } from '../lang/common'
import { strings } from '../lang/home'
import * as UserService from '../services/UserService'
import Master from '../components/Master'
import LocationSelectList from '../components/LocationSelectList'
import DateTimePicker from '../components/DateTimePicker'
import SecurePayment from '../assets/img/secure-payment.png'
import '../assets/css/home.css'

const Home = () => {
  const navigate = useNavigate()

  const _minDate = new Date()
  _minDate.setDate(_minDate.getDate() + 1)

  const [pickupLocation, setPickupLocation] = useState('')
  const [dropOffLocation, setDropOffLocation] = useState('')
  const [minDate, setMinDate] = useState(_minDate)
  const [maxDate, setMaxDate] = useState<Date>()
  const [from, setFrom] = useState<Date>()
  const [to, setTo] = useState<Date>()
  const [sameLocation, setSameLocation] = useState(true)
  const [fromError, setFromError] = useState(false)
  const [toError, setToError] = useState(false)

  useEffect(() => {
    const _from = new Date()
    _from.setDate(_from.getDate() + 1)
    _from.setHours(10)
    _from.setMinutes(0)
    _from.setSeconds(0)
    _from.setMilliseconds(0)

    const _to = new Date(_from)
    _to.setDate(_to.getDate() + 3)

    const _maxDate = new Date(_to)
    _maxDate.setDate(_maxDate.getDate() - 1)
    setMaxDate(_maxDate)

    const __minDate = new Date(_from)
    __minDate.setDate(__minDate.getDate() + 1)

    setMinDate(__minDate)
    setFrom(_from)
    setTo(_to)
  }, [])

  useEffect(() => {
    if (from) {
      const __minDate = new Date(from)
      __minDate.setDate(from.getDate() + 1)
      setMinDate(__minDate)
    }
  }, [from])

  const handlePickupLocationChange = (values: bookcarsTypes.Option[]) => {
    const _pickupLocation = (values.length > 0 && values[0]._id) || ''
    setPickupLocation(_pickupLocation)

    if (sameLocation) {
      setDropOffLocation(_pickupLocation)
    }
  }

  const handleSameLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSameLocation(e.target.checked)

    if (e.target.checked) {
      setDropOffLocation(pickupLocation)
    } else {
      setDropOffLocation('')
    }
  }

  const handleDropOffLocationChange = (values: bookcarsTypes.Option[]) => {
    setDropOffLocation((values.length > 0 && values[0]._id) || '')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!pickupLocation || !dropOffLocation || !from || !to || fromError || toError) {
      return
    }

    navigate('/search', {
      state: {
        pickupLocationId: pickupLocation,
        dropOffLocationId: dropOffLocation,
        from,
        to,
      },
    })
  }

  const onLoad = () => {}

  return (
    <Master onLoad={onLoad} strict={false}>
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          {/* Content for Hero section goes here */}
          <h1>Welcome to FlexRent</h1>
          <p>Your go-to car rental service in Albania.</p>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          {/* Content for Testimonials section goes here */}
          <h2>What our customers say</h2>
          <div className="testimonial-list">
            {/* Individual testimonials */}
            <div className="testimonial">
              <p>&quot;Great service! Highly recommended.&quot;</p>
              <span>- John Doe</span>
            </div>
            <div className="testimonial">
              <p>&quot;Easy booking process.&quot;</p>
              <span>- Jane Smith</span>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="how-it-works">
          {/* Content for How it works section goes here */}
          <h2>How It Works</h2>
          <ol>
            <li>Choose your pickup location and date.</li>
            <li>Select your drop-off location and date.</li>
            <li>Click search to find available cars.</li>
          </ol>
        </section>

        {/* Facts by Numbers Section */}
        <section className="facts">
          {/* Content for Facts by Numbers section goes here */}
          <h2>By the Numbers</h2>
          <div className="fact-cards">
            <div className="fact-card">
              <h3>500+</h3>
              <p>Cars available for rent</p>
            </div>
            <div className="fact-card">
              <h3>97%</h3>
              <p>Customer satisfaction rate</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          {/* Content for Why Choose Us section goes here */}
          <h2>Why Choose Us</h2>
          <ul>
            <li>Wide selection of vehicles.</li>
            <li>Competitive pricing.</li>
            <li>24/7 customer support.</li>
          </ul>
        </section>

        {/* Q&A Section */}
        <section className="qna">
          {/* Content for Q&A section goes here */}
          <h2>Questions & Answers</h2>
          <div className="faq-list">
            <div className="faq">
              <h3>Is insurance included?</h3>
              <p>Yes, basic insurance is included.</p>
            </div>
            <div className="faq">
              <h3>How do I modify my booking?</h3>
              <p>You can modify your booking online or contact our support.</p>
            </div>
          </div>
        </section>

        {/* Existing Home Content (Search Form) */}
        <div className="home-content">
          {/* Your existing search form content */}
          {/* Ensure to maintain the existing structure here */}
        </div>

        <footer>
          {/* Copyright footer */}
          <div className="copyright">
            <span className="part1">{strings.COPYRIGHT_PART1}</span>
            <span className="part2">{strings.COPYRIGHT_PART2}</span>
            <span className="part3">{strings.COPYRIGHT_PART3}</span>
          </div>
        </footer>
      </div>
    </Master>
  )
}

export default Home
