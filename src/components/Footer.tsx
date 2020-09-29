import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer: React.FC<{}> = () => (
  <footer className='bg-navy-500'>
    <div className='container p-6 mx-auto flex justify-between text-white'>
      <span className='block m-2'>
        © 2020 Foxtrot Aviation Services (Repair Station FT2R835D)
      </span>
      <ul className='block space-x-8 mt-0'>
        <li className='inline-block'>
          <a href=''>About</a>
        </li>
        <li className='inline-block'>
          <a href=''>Contact</a>
        </li>
        <li className='inline-block'>
          <a href=''>Services</a>
        </li>
        <li className='inline-block space-x-4'>
          <a href=''>
            <img
              src='assets/Icon/Instagram.svg'
              alt=''
              className='inline-block'
            />
          </a>
          <a href=''>
            <img
              src='assets/Icon/Twitter.svg'
              alt=''
              className='inline-block'
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
