import { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../index.scss'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// assets
import mongologo from '../assets/mongologo.svg'

// data
import { product, social, about } from '../data/navbarLists'

// components
import NavLink from './NavLink'
import { GlowOrangePrimary, GlowGrayPrimary } from './Buttons'
import ProductPopover from './ProductPopover'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Popover className={`relative z-10 ${isSticky ? 'max-md:sticky top-0 z-50 glass-overlay sm:bg-transparent' : 'bg-transparent'}`}>
      {({ open }) => (
        <>
          <div className="container mx-auto sm:py-8 md:absolute max-md:relative left-0 right-0">
            <div className="flex max-md:justify-between items-center border-b-2 border-none py-6 md:space-x-10">
              <div className="flex justify-start lg:w-0 flex-1">
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <div className="text-black text-2xl" style={{ fontFamily: 'Kalam' }}>
                    La Jolla Realty
                  </div>
                </Link>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10 ml-auto">
                <NavLink href="/" text="Home" />
                <NavLink href="/listings" text="Listings" />
                <NavLink href="/friends" text="Friends" />
                <ProductPopover />
              </Popover.Group>
              <div className="hidden md:flex items-center space-x-10 ml-auto">
                <GlowGrayPrimary onClick={() => console.log('Clicked!')} padding={'px-4 py-2'}>
                  <FontAwesomeIcon icon={faStar} className="mr-2 text-pink-500" />
                  Services
                </GlowGrayPrimary>
                <GlowOrangePrimary onClick={() => console.log('Clicked!')} padding={'px-4 py-2'}>
                  Contact Us
                </GlowOrangePrimary>
              </div>
              <div className="flex xl:hidden items-center ml-4">
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-black',
                    'rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-black'
                  )}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <div className="xl:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Overlay static className="z-20 fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  static
                  className={`z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top ${
                    isSticky ? 'glass-overlay' : 'bg-transparent'
                  }`}
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 globalbg divide-y-2 divide-gray-200">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-black text-2xl" style={{ fontFamily: 'Kalam' }}>
                            La Jolla Realty
                          </div>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-black',
                              'rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-black'
                            )}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <ul className="mt-3 space-y-4">
                          {about.map((item) => (
                            <li key={item.name} className="text-base truncate">
                              <Link to={item.href} className="font-medium text-gray-600 hover:text-gray-500">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-xs font-bold text-black uppercase tracking-wide">Product</h3>
                        <ul className="mt-3 space-y-4">
                          {product.map((item) => (
                            <li key={item.name} className="text-base truncate">
                              <Link to={item.href} className="font-medium text-gray-600 hover:text-gray-500">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8"></div>
                      <div className="mt-6">
                        <nav className="grid gap-y-8">
                          <h3 className="text-xs font-bold text-black uppercase tracking-wide">Community</h3>
                          {social.map((item) => (
                            <Link key={item.name} to={item.href} className="-m-3 p-3 flex items-center rounded-md">
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <span className="ml-3 text-base font-medium text-gray-600 hover:text-gray-500">{item.name}</span>
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export default NavBar
