import React, { useState } from 'react'
import { Link } from 'gatsby'

import { createPath } from '@root/utils'

import FOX_LOGO from '../../assets/Fox.svg'

export interface MobileNavProps {
  isOpen: boolean
  onClose: any
  items: Array<{
    type: string
    title: string
    path: string
    dropdownItems: Array<{
      icon: any
      title: string
      description: string
      path: string
    }>
  }>
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, items }) => {
  const flyouts = items
    .filter((i) => i.type.toUpperCase() === 'DROPDOWN')
    .reduce((acc, val) => {
      return [...acc, ...val.dropdownItems]
    }, [])

  const links = items.filter((i) => i.type.toUpperCase() === 'LINK')

  const renderFlyoutItem = ({ icon, title, path }) => (
    <Link
      to={createPath(path)}
      className='-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150'
    >
      <img className='flex-shrink-0 h-6 w-6' src={icon.publicURL} alt={title} />
      <div className='text-base leading-6 font-medium text-gray-900'>
        {title}
      </div>
    </Link>
  )

  const renderStandardLinks = ({ title, path }) => (
    <Link
      to={createPath(path)}
      className='text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150'
    >
      {title}
    </Link>
  )

  return (
    <div
      className={`${
        !isOpen ? `opacity-0 scale-95 hidden` : `opacity-100 scale-100`
      } absolute top-0 inset-x-0 p-2 transition ease-in-out  transform origin-top-right md:hidden z-50`}
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
                  onClick={onClose}
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
                {flyouts.map((item) => renderFlyoutItem(item))}
              </nav>
            </div>
          </div>
          <div className='py-6 px-5 space-y-6'>
            <div className='grid grid-cols-2 row-gap-4 col-gap-8'>
              {links.map((link) => renderStandardLinks(link))}
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
  )
}

export default MobileNav
