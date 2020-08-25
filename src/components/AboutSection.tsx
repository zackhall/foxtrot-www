import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Chevron from '../components/Chevron'

// TODO add feature image
const Services: React.FC<{
  heading: string
  subheading: string
  blurbs: Array<{ icon: any; heading: string; text: string }>
  links: Array<{ text: string; url: string }>
  image: any
}> = ({ heading, subheading, blurbs, links, image }) => (
  <div className='bg-orange-200 relative'>
    <div className='container mx-auto px-4 block xl:flex py-12'>
      <div className='w-full xl:w-1/2 xl:pr-12 my-12 flex justify-center items-center'>
        <Fade delay={300} duration={700} triggerOnce>
          <Slide direction='left' triggerOnce>
            <img src={image.childImageSharp.fluid.src} alt={heading} />
          </Slide>
        </Fade>
      </div>
      <div className='w-full lg:w-2/3 mx-auto xl:w-1/2 xl:mx-0 xl:pl-12 my-12'>
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
                alt={blurb.heading}
              />
            </div>
            <div>
              <h4 className='text-xl font-bold my-1'>{blurb.heading}</h4>
              <p>{blurb.text}</p>
            </div>
          </div>
        ))}

        <div>
          {links.map((link) => (
            <span className='inline-block mr-6'>
              <a href={`/${link.url}`} className='font-black'>
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
