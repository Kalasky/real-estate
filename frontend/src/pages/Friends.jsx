import React from 'react'

// components
import { GlowGrayPrimary, GlowOrangePrimary } from '../components/Buttons'

const Friends = () => {
  return (
    <div>
      <section className="globalbg -mb-10">
        <div className="hero-height container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
          <div className="grid grid-flow-row-dense xl:grid-cols-3 sm:grid-cols-1">
            <div id="text-section" className="col-span-1" style={{ marginTop: '5.0625rem' }}>
              <p
                className="font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-orange-600 to-orange-300 inline-block text-transparent bg-clip-text"
                style={{ lineHeight: '5rem' }}
              >
                Rental Listings
              </p>
              <p className="mt-5 sm:text-3xl max-sm:text-2xl text-white text font-bold">
                Let's start with the basics-gentle waves, a mile of sand, a park, restaurants, shops.
              </p>
              <div className="mt-10 mb-20 text-base space-y-5">
                <GlowOrangePrimary onClick={() => {}} children="Services" padding={'px-4 py-3'} />
                <GlowOrangePrimary onClick={() => {}} children="Listings" padding={'px-4 py-3'} margin="sm:m-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Friends
