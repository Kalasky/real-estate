import React, { useEffect, useRef } from 'react'

// logos
import logo1 from '../assets/classiccraft.webp'
import logo2 from '../assets/spiazzi.webp'
import logo3 from '../assets/harvardcookingirl.png'
import logo4 from '../assets/cask.webp'

import '../index.scss'

const LogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4]

  const sliderRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current

    let scrollAmount = 0
    
    const slide = () => {
      scrollAmount -= 1
      if (scrollAmount < -slider.offsetWidth) {
        scrollAmount = 0
      }
      slider.style.transform = `translateX(${scrollAmount}px)`
      animationRef.current = requestAnimationFrame(slide)
    }

    animationRef.current = requestAnimationFrame(slide)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div className="slider xl:w-2/3 max-xl:w-full">
      <div className="slide-track space-x-10" ref={sliderRef}>
        {logos.map((logo, index) => (
          <div key={index} className="slide">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="slide">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoSlider
