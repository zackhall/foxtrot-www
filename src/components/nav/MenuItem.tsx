import React, { useState } from 'react'
import { Link } from 'gatsby'

import { createPath } from '@root/utils'

interface MenuItemProps {
  type: string
  title: string
  path: string
  dropdownItems: Array<{
    icon: any
    title: string
    description: string
    path: string
  }>
}

const MenuItem: React.FC<MenuItemProps> = ({
  type,
  title,
  path,
  dropdownItems,
}) => {
  const [flyoutOpen, setFlyoutOpen] = useState(false)

  switch (type.toUpperCase()) {
    case 'DROPDOWN':
      return (
        <div className='relative'>
          <button
            type='button'
            className='font-bold tracking-wider uppercase text-blue-900 group inline-flex items-center space-x-2 text-base leading-6 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150'
            onClick={() => setFlyoutOpen(!flyoutOpen)}
          >
            <span>{title}</span>
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

          <div
            className={`${
              !flyoutOpen
                ? `opacity-0 translate-y-1 hidden`
                : `opacity-100 translate-y-0`
            } absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 transition ease-in-out duration-150 z-50`}
          >
            <div className='rounded-lg shadow-lg'>
              <div className='rounded-lg shadow-xs overflow-hidden'>
                <div className='z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  {dropdownItems.map(({ title, description, path, icon }) => (
                    <Link
                      to={createPath(path)}
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
                <div className='px-5 py-5 bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 flex justify-around'>
                  <div>
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
                      <Link to='/contact'>Contact Sales</Link>
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

export default MenuItem
