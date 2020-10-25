import React, { useState } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import MenuItem from './MenuItem'
import MobileNav from './MobileNav'
import { Instagram, Facebook, LinkedIn } from '@components/socialLinks'

import LOGO from '../../assets/Nav Logo.svg'

const Navbar = ({ data }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const { menuItems } = data.markdownRemark.frontmatter

  return (
    <div className='relative bg-blue-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-4 md:space-x-10'>
          <div className=''>
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
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <nav className='hidden md:flex space-x-10'>
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </nav>
          <div className='hidden xl:flex items-center justify-end space-x-4'>
            <Instagram />
            <Facebook />
            <LinkedIn />
            <span className='inline-flex rounded-md shadow-sm'>
              <Link
                to='/contact'
                className='font-bold tracking-wider uppercase whitespace-no-wrap inline-flex space-x-3 justify-center px-4 py-2 border border-transparent text-base leading-6 rounded-md text-white bg-gradient-foxtrot focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150'
              >
                <svg
                  className='flex-shrink-0 h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span>Schedule Service</span>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(!mobileOpen)}
        items={menuItems}
      />
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
