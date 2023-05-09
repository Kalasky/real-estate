import React from 'react'
import '../index.scss'

// components
import { GlowGrayPrimary, GlowOrangePrimary } from '../components/Buttons'
import { ListingCard } from '../components/Cards'

// assets
import listing204 from '../assets/listing204.jpg'
import listing206 from '../assets/listing206.webp'
import listing248 from '../assets/listing248.webp'
import listing271 from '../assets/listing271.webp'
import listing279 from '../assets/listing279.webp'
import listing401 from '../assets/listing401.webp'
import listing441 from '../assets/listing441.webp'
import listing473 from '../assets/listing473.webp'
import listing476 from '../assets/listing476.webp'
import listing477 from '../assets/listing477.webp'
import listing443 from '../assets/listing443.webp'

const Listings = () => {
  return (
    <div>
      <section className="listings-background -mb-10">
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
      <section style={{ backgroundColor: 'rgb(26,32,45)' }} className="sm:pt-40 max-sm:pt-20">
        <div className="container mx-auto pb-12" style={{ fontFamily: 'Poppins' }}>
          <p
            className="font-bold text-center xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl mb-20 w-full bg-gradient-to-r from-orange-600 to-orange-300 inline-block text-transparent bg-clip-text"
            style={{ lineHeight: '5rem' }}
          >
            Rental Listings
          </p>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing204}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing206}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing248}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing271}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing279}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing401}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing441}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing443}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing473}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing476}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing477}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing204}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
            <ListingCard
              title="La Jolla Shores"
              description="La Jolla Shores is a beach and popular vacation/residential Laureate Park,on Avenida de la Playa in the villa"
              image={listing204}
              button={<GlowOrangePrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Listings
