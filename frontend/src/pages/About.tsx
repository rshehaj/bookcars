import React from 'react'
import Master from '../components/Master'

import '../assets/css/about.css'

const About = () => {
  const onLoad = () => { }

  return (
    <Master onLoad={onLoad} strict={false}>
      <div className="about">
        <header>
          <div>
            <a href="/about-us">About Us</a>
            <h1>About Us</h1>
            <span>Welcome to FlexRent.al, your top choice for car rentals in Albania. Driven by a mission to transform the car rental industry, FlexRent connects local car providers with explorers eager to discover the beauty of Albania. Our service is more than just rentals; it&apos;s about creating unforgettable travel experiences with ease, reliability, and exceptional customer support.</span>
            <div />
          </div>
        </header>
        <div>
          <div>
            <h2>Our Mission</h2>
            <p>At FlexRent, we have a dual mission. For car providers, we aim to be the leading platform that boosts visibility and expands business opportunities. We understand the challenges of reaching a broad audience in today&apos;s competitive market and are here to ensure your fleet is noticed by those who need it most. For travelers, whether you&apos;re navigating the historic streets of Tirana, enjoying the beaches of Durres, or taking a scenic drive to Saranda, we strive to provide the perfect vehicle for your journey.</p>
            <h2>Why FlexRent?</h2>
            <ul>
              <li>
                <b>Extensive Network:</b>
                Our comprehensive network spans various locations throughout Albania, including major cities and tourist spots such as Tirana, the Airport, Durres, Shkoder, Fier, Vlore, Korce, Saranda, and beyond. No matter where your travels take you, FlexRent is there.
              </li>
              <li>
                <b>Diverse Fleet:</b>
                We pride ourselves on offering a wide selection of vehicles to meet every preference, need, and budget. From economical city cars for urban adventures to roomy SUVs for family trips, our vehicles are meticulously maintained to ensure your journey is safe and enjoyable.
              </li>
              <li>
                <b>Effortless Booking:</b>
                FlexRent streamlines the car rental process with an intuitive online booking system that saves you time and effort. Browse, compare, and book your ideal car in just a few clicks, and we&apos;ll handle the rest.
              </li>
              <li>
                <b>Local Expertise, Global Standards:</b>
                Although we are firmly rooted in Albania, our services adhere to international standards of quality and professionalism. Our team consists of local experts eager to share Albania&apos;s best with you, providing authentic recommendations and insights for your travels.
              </li>
              <li>
                <b>Dedication to Customer Satisfaction:</b>
                Your satisfaction is our priority. We are committed to delivering outstanding customer service from the moment you visit our website to the end of your rental period. FlexRent is dedicated to making your car rental experience smooth, enjoyable, and memorable.
              </li>
            </ul>
            <h2>Join Our Journey</h2>
            <p>Whether you&apos;re a car provider looking to reach more customers or a traveler ready to explore Albania&apos;s hidden gems, FlexRent invites you to join us. Let&apos;s embark on new adventures, form new connections, and create unforgettable memories together.</p>
          </div>
          <div>
            <a href="/about-us#">FlexRent</a>
            <a href="/about-us#">About Us</a>
            <a href="/about-us#">Car Rentals</a>
          </div>
        </div>
      </div>
    </Master>
  )
}

export default About
