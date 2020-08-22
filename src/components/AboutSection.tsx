import React from 'react'
import Img from 'gatsby-image'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Chevron from '../components/Chevron'

// TODO add feature image
const Services: React.FC<{
  heading: string
  subheading: string
  blurbs: Array<{ icon: any; heading: string; text: string }>
  links: Array<{ text: string; url: string }>
}> = ({ heading, subheading, blurbs, links }) => (
  <div className='bg-orange-200 relative'>
    <div className='container mx-auto flex py-24'>
      <div className='w-1/2 pr-12'>
        <img src='assets/images/homepage-feature-image.png' />
      </div>
      <div className='w-1/2 pl-12'>
        <span className='block uppercase tracking-wider text-gray-500 text-sm font-bold'>
          {subheading}
        </span>
        <h2 className='font-black text-3xl mt-2 mb-4'>{heading}</h2>
        {blurbs.map((blurb) => (
          <div className='flex mb-8'>
            <div>
              <img
                className='flex-shrink-0 w-8 inline-block mr-6 mt-2'
                src={blurb.icon.publicURL}
                alt='Eye'
              />
            </div>
            <div>
              <h4 className='text-xl font-bold'>{blurb.heading}</h4>
              <p>{blurb.text}</p>
            </div>
          </div>
        ))}

        <div>
          {links.map((link) => (
            <span className='inline-block mr-6'>
              <a href={link.url} className='font-black'>
                {link.text}
                <span className='mx-2 inline'>
                  <Chevron className='flex-shrink-0 inline-block align-middle' />
                </span>
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Services
