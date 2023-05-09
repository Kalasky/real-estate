import React, { useState } from 'react'
import '../index.scss'

// components
import { GlowPinkPrimary } from '../components/Buttons'
import { ListingCard } from '../components/Cards'
import Pagination from '../components/Pagination'

// data
import listings from '../data/listings'

// assets

import listingcircle from '../assets/listingcircle.svg'
import listingcirclenolabels from '../assets/listingcirclenolabels.svg'

const Listings = () => {
  // current page number state
  const [currentPage, setCurrentPage] = useState(1)
  const listingsPerPage = 6

  // get current listings
  const indexOfLastListing = currentPage * listingsPerPage
  const indexOfFirstListing = indexOfLastListing - listingsPerPage
  const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing)

  // change page
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <section className="hero-background -mb-10">
        <div className="hero-height container mx-auto md:pt-32 max-sm:pt-0" style={{ fontFamily: 'Poppins' }}>
          <div className="grid max-md:block grid-flow-row-dense xl:grid-cols-3 sm:grid-cols-1">
            <div id="text-section" className="col-span-1" style={{ marginTop: '5.0625rem' }}>
              <p
                className="font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-fuchsia-400 to-pink-400 inline-block text-transparent bg-clip-text"
                style={{ lineHeight: '5rem' }}
              >
                Rental Listings
              </p>
              <p className="mt-5 sm:text-3xl max-sm:text-2xl text-black text font-bold">
                Let's start with the basics-gentle waves, a mile of sand, a park, restaurants, shops.
              </p>
              <p className="text-gray-800 text-lg mt-5 lg:w-11/12">
                Explore our curated collection of property listings in La Jolla and find your next home in this charming coastal
                community. With beautiful beaches, picturesque landscapes, and a lively community, La Jolla is the perfect place
                to call home. Browse our listings today and find your perfect match.
              </p>
              <div className="mt-10 mb-20 text-base space-y-5">
                <GlowPinkPrimary onClick={() => {}} children="Services" padding={'px-4 py-3'} />
                <GlowPinkPrimary onClick={() => {}} children="Listings" padding={'px-4 py-3'} margin="sm:m-8" />
              </div>
            </div>
            <img
              src={listingcircle}
              alt="surreal"
              className="relative max-xl:hidden"
              style={{ maxWidth: '70rem', right: '14rem', top: '-13rem' }}
            />
            <img src={listingcirclenolabels} alt="surreal" className="relative xl:hidden fullcircle" />
          </div>
        </div>
      </section>
      <section className="sm:pt-40 max-sm:pt-20 bg-white">
        <div className="container mx-auto pb-12 marginListSection" style={{ fontFamily: 'Poppins' }}>
          <p
            className="font-bold text-center xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl mb-20 w-full bg-gradient-to-r from-fuchsia-400 to-pink-400 inline-block text-transparent bg-clip-text"
            style={{ lineHeight: '5rem' }}
          >
            Rental Listings
          </p>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6" id="listingtop">
            {currentListings.map((listing, index) => (
              <ListingCard
                key={index}
                title={listing.title}
                description={listing.description}
                image={listing.image}
                button={<GlowPinkPrimary onClick={() => {}} children="View Listing" padding={'px-10 py-2'} />}
              />
            ))}
          </div>
          <Pagination
            pageCount={Math.ceil(listings.length / listingsPerPage)}
            currentPage={currentPage}
            onPageChange={onPageChange}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
          />
        </div>
      </section>
    </div>
  )
}

export default Listings
