import React from 'react'

// components
import { GlowGrayPrimary, GlowOrangePrimary } from '../components/Buttons'
import EmailForm from '../components/EmailForm'

// assets
import contact from '../assets/contact.svg'

const Contact = () => {
  return (
    <div className="h-screen pt-36">
      <div className="hero-height container mx-auto md:pt-32 max-sm:pt-0 h-screen">
        <p
          className="m-auto w-full mb-10 text-center font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl bg-gradient-to-r from-teal-600 to-teal-200 inline-block text-transparent bg-clip-text"
          style={{ lineHeight: '5rem' }}
        >
          Send us your questions
        </p>
        <EmailForm />
      </div>
    </div>
  )
}

export default Contact
