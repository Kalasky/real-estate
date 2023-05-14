import React from 'react'

// components
import { GlowGrayPrimary, GlowOrangePrimary } from '../components/Buttons'
import LogoSlider from '../components/LogoSlider'

// assets
import herofriends from '../assets/herofriends.svg'

const Friends = () => {
  return (
    <div className="h-screen">
      <section className="hero-background">
        <div className="hero-height container mx-auto md:pt-32 max-sm:pt-0" style={{ fontFamily: 'Poppins' }}>
          <div className="grid max-md:block grid-flow-row-dense xl:grid-cols-3 sm:grid-cols-1">
            <div id="text-section" className="col-span-1" style={{ marginTop: '5.0625rem' }}>
              <p className="font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-teal-600 to-teal-200 inline-block text-transparent bg-clip-text">
                Builders, Artists, Consultants, Foodies
              </p>
              <p className="mt-5 sm:text-3xl max-sm:text-2xl text-black text font-bold">Our Partners</p>
              <p className="text-gray-800 text-lg mt-5 lg:w-11/12">
                Ready to rent or own a piece of paradise in La Jolla? Let us guide you through the process. Whether you're buying
                or selling, we're here to help. As a Broker Associate with Latitude 32 Realty, Mariola Stojic has the expertise to
                make your real estate dreams a reality.
              </p>
              <div>
                <LogoSlider />
              </div>
            </div>
            <img
              src={herofriends}
              alt="friends"
              className="relative max-xl:hidden"
              style={{ maxWidth: '70rem', right: '20rem', top: '0' }}
            />
            {/* <img src={fullcircle} alt="surreal" className="relative xl:hidden fullcircle" /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Friends
