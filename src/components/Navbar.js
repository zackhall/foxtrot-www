import React, { useState } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import LOGO from '../assets/Nav Logo.svg'
import FOX_LOGO from '../assets/Fox.svg'
import ICON_ANTIMICROBIAL from '../assets/Icon/Antimicrobial.svg'
import ICON_DETAIL from '../assets/Icon/Detail.svg'
import ICON_FACILITY from '../assets/Icon/Facility.svg'
import ICON_PUBLICSECTOR from '../assets/Icon/Public Sector.svg'
import ICON_REPAIR from '../assets/Icon/Repair.svg'

const Navbar = ({ data }) => {
  const [flyoutOpen, setFlyoutOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { menuItems } = data.markdownRemark.frontmatter

  const renderMenuItem = ({ type, title, path, dropdownItems }) => {
    switch (type.toUpperCase()) {
      case 'DROPDOWN':
        return (
          <div className='relative'>
            {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
            <button
              type='button'
              className='font-bold tracking-wider uppercase text-blue-900 group inline-flex items-center space-x-2 text-base leading-6 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150'
              onClick={() => setFlyoutOpen(!flyoutOpen)}
            >
              <span>{title}</span>
              {/* <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" --> */}
              <svg
                className='text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>

            {/* <!--
                'Services' flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                  From: "opacity-0 translate-y-1"
                  To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100 translate-y-0"
                  To: "opacity-0 translate-y-1"
              --> */}
            <div
              className={`${
                !flyoutOpen
                  ? `opacity-0 translate-y-1 hidden`
                  : `opacity-100 translate-y-0`
              } absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 transition ease-in-out duration-150`}
            >
              <div className='rounded-lg shadow-lg'>
                <div className='rounded-lg shadow-xs overflow-hidden'>
                  <div className='z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    {dropdownItems.map(({ title, description, path, icon }) => (
                      <Link
                        to={`/${path}`}
                        className='-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150'
                      >
                        <img
                          className='flex-shrink-0 h-6 w-6'
                          src={icon.publicURL}
                          alt='{title}'
                        />
                        <div className='space-y-1'>
                          <p className='text-base leading-6 font-medium text-gray-900 my-0'>
                            {title}
                          </p>
                          <p className='text-sm leading-5 text-gray-500 my-0'>
                            {description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className='px-5 py-5 bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                    <div className='flow-root'>
                      <a
                        href='#'
                        className='-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150'
                      >
                        <svg
                          className='flex-shrink-0 h-6 w-6 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                          />
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span>Watch Demo</span>
                      </a>
                    </div>
                    <div className='flow-root'>
                      <a
                        href='#'
                        className='-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150'
                      >
                        <svg
                          className='flex-shrink-0 h-6 w-6 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                          />
                        </svg>
                        <span>Contact Sales</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <Link
            to={`/${path}`}
            className='text-base font-bold tracking-wider uppercase leading-6 text-blue-900 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150'
          >
            {title}
          </Link>
        )
    }
  }

  return (
    <div className='relative bg-blue-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-4 md:space-x-10'>
          <div className='lg:w-0 lg:flex-1'>
            <Link to='/' className='flex'>
              <img className='h-12 w-auto sm:h-20' src={LOGO} alt='Foxtrot' />
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <nav className='hidden md:flex space-x-10'>
            {menuItems.map((item) => renderMenuItem(item))}
          </nav>
          <div className='hidden xl:flex items-center justify-end space-x-8 md:flex-1 lg:w-0'>
            <span className='inline-flex rounded-md shadow-sm'>
              <Link
                to='/contact'
                className='font-bold tracking-wider uppercase whitespace-no-wrap inline-flex space-x-3 justify-center px-4 py-2 border border-transparent text-base leading-6 rounded-md text-white bg-gradient-foxtrot focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150'
              >
                <svg
                  className='flex-shrink-0 h-6 w-6 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span>Schedule Service</span>
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
      <div
        className={`${
          !mobileOpen ? `opacity-0 scale-95 hidden` : `opacity-100 scale-100`
        } absolute top-0 inset-x-0 p-2 transition ease-in-out  transform origin-top-right md:hidden`}
      >
        <div className='rounded-lg shadow-lg'>
          <div className='rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5 space-y-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img className='h-8 w-auto' src={FOX_LOGO} alt='Workflow' />
                </div>
                <div className='-mr-2'>
                  <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    type='button'
                    className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                  >
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav className='grid row-gap-8'>
                  <Link
                    to='/services/repair'
                    className='-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150'
                  >
                    <img
                      className='flex-shrink-0 h-6 w-6'
                      src={ICON_REPAIR}
                      alt='Repair Station'
                    />
                    <div className='text-base leading-6 font-medium text-gray-900'>
                      Repair Station
                    </div>
                  </Link>
                  <Link
                    to='/services/detailing'
                    className='-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150'
                  >
                    <img
                      className='flex-shrink-0 h-6 w-6'
                      src={ICON_DETAIL}
                      alt='Detailing'
                    />
                    <div className='text-base leading-6 font-medium text-gray-900'>
                      Detailing
                    </div>
                  </Link>
                  <Link
                    to='/services/public-sector'
                    className='-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150'
                  >
                    <img
                      className='flex-shrink-0 h-6 w-6'
                      src={ICON_PUBLICSECTOR}
                      alt='Public Sector'
                    />
                    <div className='text-base leading-6 font-medium text-gray-900'>
                      Public Sector
                    </div>
                  </Link>
                  <Link
                    to='/services/facility-care'
                    className='-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150'
                  >
                    <img
                      className='flex-shrink-0 h-6 w-6'
                      src={ICON_FACILITY}
                      alt='Facility Care'
                    />
                    <div className='text-base leading-6 font-medium text-gray-900'>
                      Facility Care
                    </div>
                  </Link>
                  <Link
                    to='/services/antimicrobial-coatings'
                    className='-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150'
                  >
                    <img
                      className='flex-shrink-0 h-6 w-6'
                      src={ICON_ANTIMICROBIAL}
                      alt='Anti-microbial Coatings'
                    />
                    <div className='text-base leading-6 font-medium text-gray-900'>
                      Anti-microbial Coatings
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div className='grid grid-cols-2 row-gap-4 col-gap-8'>
                <Link
                  to='/page/about'
                  className='text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150'
                >
                  About
                </Link>
                <Link
                  to='/contact'
                  className='text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150'
                >
                  Contact
                </Link>
                <Link
                  to='/page/safety'
                  className='text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150'
                >
                  Safety
                </Link>
              </div>
              <div className='space-y-6'>
                <span className='w-full flex rounded-md shadow-sm'>
                  <Link
                    to='/contact'
                    className='w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gradient-foxtrot focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150'
                  >
                    Schedule service
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HydratedNavbar = (props) => (
  <StaticQuery
    query={graphql`
      query MainMenuQuery {
        markdownRemark(
          frontmatter: { title: { eq: "main" }, type: { eq: "menu" } }
        ) {
          id
          frontmatter {
            menuItems {
              type
              title
              path
              dropdownItems {
                title
                description
                path
                icon {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Navbar data={data} {...props} />}
  />
)

export default HydratedNavbar
