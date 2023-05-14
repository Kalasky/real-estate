import React, { useState } from 'react'
import '../index.scss'

// motion
import { motion } from 'framer-motion'

const hoverEffect = {
  scale: 1.1,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
}

// assets
import camino from '../assets/camino.webp'
import paseo401 from '../assets/paseo401.webp'
import paseo206 from '../assets/paseo206.webp'
import mariola from '../assets/mariola.webp'
import lajolla from '../assets/lajolla.webp'
import herotravel from '../assets/herotravel.svg'
import fullcircle from '../assets/fullcircle.svg'

// components
import { GlowGrayPrimary, GlowOrangePrimary } from '../components/Buttons'

const Home = () => {
  const [isCopied, setIsCopied] = useState(false)
  const phoneNumber = '858-204-6947'

  const handleClick = () => {
    navigator.clipboard.writeText(phoneNumber)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div>
      <section className="hero-background">
        <div className="hero-height container mx-auto md:pt-32 max-sm:pt-0" style={{ fontFamily: 'Poppins' }}>
          <div className="grid max-md:block grid-flow-row-dense xl:grid-cols-3 sm:grid-cols-1">
            <div id="text-section" className="col-span-1" style={{ marginTop: '5.0625rem' }}>
              <p className="font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-orange-600 to-orange-300 inline-block text-transparent bg-clip-text">
                La Jolla Shores Real Estate Sales and Rental Expert
              </p>
              <p className="mt-5 sm:text-3xl max-sm:text-2xl text-black text font-bold">We make real estate a breeze!</p>
              <p className="text-gray-800 text-lg mt-5 lg:w-11/12">
                Ready to rent or own a piece of paradise in La Jolla? Let us guide you through the process. Whether you're buying
                or selling, we're here to help. As a Broker Associate with Latitude 32 Realty, Mariola Stojic has the expertise to
                make your real estate dreams a reality.
              </p>
              <div className="mt-10 mb-20 text-base space-y-5">
                <GlowGrayPrimary onClick={() => {}} children="Services" padding={'px-4 py-3'} />
                <GlowGrayPrimary onClick={() => {}} children="Listings" padding={'px-4 py-3'} margin="sm:m-8" />
                <GlowOrangePrimary onClick={handleClick} padding={'px-4 py-3'}>
                  {isCopied ? 'Copied!' : 'Copy Phone Number'}
                </GlowOrangePrimary>
              </div>
            </div>
            <img
              src={herotravel}
              alt="surreal"
              className="relative max-xl:hidden"
              style={{ maxWidth: '70rem', right: '6rem', top: '-13rem', height: '80%' }}
            />
            <img src={fullcircle} alt="surreal" className="relative xl:hidden fullcircle" />
          </div>
        </div>
      </section>
      <section className="globalbg">
        <div className="container mx-auto max-sm:pt-14 pb-12 marginListSection" style={{ fontFamily: 'Poppins' }}>
          <div className="mt-10 text-base space-y-5">
            <p
              className="mt-14 max-sm:mt-0 font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-orange-600 to-orange-300 inline-block text-transparent bg-clip-text text-center"
              style={{ lineHeight: 2 }}
            >
              Check Out Our Listings
            </p>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-24 gap-6">
            <div className="md:order-1">
              <motion.img
                src={paseo206}
                alt="apiSecurity"
                className="m-auto max-lg:mb-14 shadow-2xl rounded-2xl mb-20"
                whileHover={hoverEffect}
                initial="hidden"
                transition={{ duration: 0.25 }}
              />
            </div>
            <div className="m-auto md:order-2">
              <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-black">
                8110 El Paseo Grande #206, La Jolla, CA 92037
              </p>
              <p className="mt-6 font-light text-base text-gray-800 leading-7">
                One of our jewels. With 1,338 square feet of tastefully designed living space, this residence features two
                comfortably appointed bedrooms and two well-appointed bathrooms. Experience the pinnacle of upscale living at its
                finest.
              </p>
              <GlowGrayPrimary onClick={() => {}} children="Find Out More" padding={'px-4 py-3 mt-8'} />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-40 gap-6">
            <div className="lg:order-2">
              <motion.img
                src={camino}
                alt="apiSecurity"
                className="m-auto max-lg:mb-14 shadow-2xl rounded-2xl"
                whileHover={hoverEffect}
                initial="hidden"
                transition={{ duration: 0.25 }}
              />
            </div>
            <div className="m-auto md:order-1">
              <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-black">
                8263 Camino Del Oro #473, La Jolla, CA 92037
              </p>
              <p className="mt-6 font-light text-base text-gray-800 leading-7">
                Experience unparalleled luxury living in this breathtaking penthouse boasting 2 bedrooms and a den, all with
                stunning white water views of the La Jolla Shores coastline. This is the unit that catches your eye from the
                beach, beckoning you to make it yours.
              </p>
              <GlowGrayPrimary onClick={() => {}} children="Find Out More" padding={'px-4 py-3 mt-8'} />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-40 gap-6">
            <div className="md:order-1">
              <motion.img
                src={paseo401}
                alt="apiSecurity"
                className="m-auto max-lg:mb-14 shadow-2xl rounded-2xl"
                whileHover={hoverEffect}
                initial="hidden"
                transition={{ duration: 0.25 }}
              />
            </div>
            <div className="m-auto md:order-2">
              <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-black">
                8110 El Paseo Grande #401, La Jolla, CA 92037
              </p>
              <p className="mt-6 font-light text-base text-gray-800 leading-7">
                Unwind in this stunning ocean-view penthouse - a rare find in the esteemed La Jolla Shores Clubdominiums. Boasting
                3 bedrooms (including a converted den), 2 beautifully appointed baths, and a spacious living and dining area, this
                1,520 square foot unit has been recently remodeled to showcase luxurious touches such as marble countertops, air
                conditioning, and a master walk-in shower. Experience coastal living at its finest with this exclusive residence.
              </p>
              <GlowGrayPrimary onClick={() => {}} children="Find Out More" padding={'px-4 py-3 mt-8'} />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-36">
        <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins', height: '55rem' }}>
          <div className="grid grid-flow-row-dense xl:grid-cols-3 sm:grid-cols-1">
            <div id="text-section" className="col-span-1" style={{ marginTop: '5.0625rem' }}>
              <p className="font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-orange-600 to-orange-300 inline-block text-transparent bg-clip-text">
                Who Will Pick Up When You Call?
              </p>
              <p className="mt-5 sm:text-3xl max-sm:text-2xl text-black text font-bold">
                Mariola
                <span>
                  <img
                    src={mariola}
                    alt="pfp"
                    className="inline-block w-10 rounded-full ml-2 xl:hidden"
                    style={{ height: '2.75rem', width: '2.75rem' }}
                  />
                </span>
              </p>
              <p className="text-gray-800 text-lg mt-5 lg:w-11/12 max-sm:text-base">
                I call myself "an accidental Realtor" because my early career had little to do with buildings and I had no
                interest in selling anything. In fact, my husband's construction business drew me into the real estate business.
                While I had to pay attention to the details of what it is that makes a house a comfortable home for our clients, I
                started to look at homes differently. Clients told us that we make a difference in transforming their houses into
                their dream homes. 25 years later I "fell into real estate" and being a proud La Jollan, I am applying the same
                skills to find dream homes for my clients. Mariola Stojic, Broker Associate, Latitude 32 Realty, Inc. CA DRE LIC
                #02038958
              </p>
              <div className="mt-10 mb-10 text-base space-y-5">
                <GlowOrangePrimary onClick={handleClick} padding={'px-4 py-3'}>
                  {isCopied ? 'Copied!' : 'Copy Phone Number'}
                </GlowOrangePrimary>
              </div>
            </div>
            <motion.img
              src={mariola}
              alt="mariolapfp"
              className="m-auto max-lg:mb-14 shadow-2xl rounded-2xl max-xl:hidden"
              whileHover={hoverEffect}
              initial="hidden"
              transition={{ duration: 0.25 }}
            />
          </div>
        </div>
        <div className="container mx-auto max-sm:pt-14" style={{ fontFamily: 'Poppins' }}>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="md:order-1">
              <motion.img
                src={lajolla}
                alt="apiSecurity"
                className="m-auto max-lg:mb-14 shadow-2xl rounded-2xl"
                whileHover={hoverEffect}
                initial="hidden"
                transition={{ duration: 0.25 }}
              />
            </div>
            <div className="m-auto md:order-2">
              <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-black">
                La Jolla Shores In A Nutshell
              </p>
              <p className="mt-6 font-light text-base text-gray-800 leading-7">
                Welcome to La Jolla Shores, a coastal community known for its picturesque beach, world-renowned Scripps
                Institution of Oceanography, and charming seaside shops and restaurants. With a relaxed, laid-back vibe and
                stunning natural beauty, this is the perfect place to call home.
              </p>
              <GlowGrayPrimary onClick={() => {}} children="What Do We Have Here" padding={'px-4 py-3 mt-8'} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
