import React from 'react'

// data
import { about } from '../data/footerLists'

const Footer = () => {
  return (
    <footer className="dark-category p-4 text-gray-900 text-lg" style={{ fontFamily: 'Kalam' }}>
      <p className="m-auto text-center mb-5">La Jolla Realty</p>
      <div className="flex justify-center items-center space-x-4">
        {about.map((item) => {
          return (
            <a key={item.name} className="hover:opacity-75" href={item.href}>
              {item.name}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer