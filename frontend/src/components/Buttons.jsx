import React from 'react'
import '../index.scss'

export const GlowGrayPrimary = ({ onClick, children, padding = '', margin = 'auto' }) => {
  return (
    <button className={`btn-hover color-8 max-sm:w-full ${margin} ${padding}`} onClick={onClick}>
      {children}
    </button>
  )
}

export const GlowOrangePrimary = ({ onClick, children, padding = '', margin = 'auto' }) => {
  return (
    <button className={`btn-hover color-1 max-sm:w-full ${margin} ${padding}`} onClick={onClick}>
      {children}
    </button>
  )
}

export const GlowPinkPrimary = ({ onClick, children, padding = '', margin = 'auto' }) => {
  return (
    <button className={`btn-hover color-pink max-sm:w-full ${margin} ${padding}`} onClick={onClick}>
      {children}
    </button>
  )
}
