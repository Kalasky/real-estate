import React from 'react'

// data
import { social, product, legal, about } from '../data/footerLists'

// assets
import mongologo from '../assets/mongoFullLogo.svg'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faYoutube,
  faStackOverflow,
  faDiscord,
  faRedditAlien,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="dark-category flex-grow border-t border-gray-700">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
          <div>
            <div className="text-white text-2xl" style={{ fontFamily: 'Kalam' }}>
              La Jolla Realty
            </div>

            <p className="max-w-full mt-4 text-sm text-white">
              With an SQL-style query language, real-time queries with highly-efficient related data retrieval, advanced security
              permissions for multi-tenant access, and support for performant analytical workloads, SurrealDB is the next
              generation serverless database.
            </p>
            <p className="space-x-4 text-3xl mt-6">
              <FontAwesomeIcon icon={faGithub} className="text-gray-400" />
              <FontAwesomeIcon icon={faTwitter} className="text-gray-400" />
              <FontAwesomeIcon icon={faYoutube} className="text-gray-400" />
              <FontAwesomeIcon icon={faStackOverflow} className="text-gray-400" />
              <FontAwesomeIcon icon={faDiscord} className="text-gray-400" />
              <FontAwesomeIcon icon={faRedditAlien} className="text-gray-400" />
              <FontAwesomeIcon icon={faLinkedin} className="text-gray-400" />
            </p>
            <div className="border-t border-gray-700 mt-10"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-semibold text-white">COMMUNITY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-400 leading-9">
                {social.map((item) => {
                  return (
                    <a key={item.name} className="hover:opacity-75" href={item.href}>
                      <span>
                        <FontAwesomeIcon icon={item.icon} className="mr-3" />
                      </span>
                      {item.name}
                    </a>
                  )
                })}
              </nav>
            </div>
            <div>
              <p className="font-semibold text-white">PRODUCT</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-400 leading-9">
                {product.map((item) => {
                  return (
                    <a key={item.name} className="hover:opacity-75" href={item.href}>
                      {item.name}
                    </a>
                  )
                })}
              </nav>
            </div>
            <div>
              <p className="font-semibold text-white max-md:mt-12">LEGAL</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-400 leading-9">
                {legal.map((item) => {
                  return (
                    <a key={item.name} className="hover:opacity-75" href={item.href}>
                      {item.name}
                    </a>
                  )
                })}
              </nav>
            </div>
            <div>
              <p className="font-semibold text-white max-md:mt-12">ABOUT</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-400 leading-9">
                {about.map((item) => {
                  return (
                    <a key={item.name} className="hover:opacity-75" href={item.href}>
                      {item.name}
                    </a>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10"></div>
        <div className="text-white text-2xl mt-10" style={{ fontFamily: 'Kalam' }}>
          La Jolla Realty
        </div>
      </div>
    </footer>
  )
}

export default Footer
