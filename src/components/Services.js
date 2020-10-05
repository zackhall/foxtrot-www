import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Fade, Slide } from 'react-awesome-reveal'

import { createPath } from '@root/utils'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ICON_CHEVRON from '../assets/Icon/Chevron.svg'

const Services = ({ heading, subheading, description, gridItems }) => (
  <>
    <div className='w-2/3 md:w-1/2 lg:1/3 mx-auto text-center my-12'>
      <span className='block uppercase tracking-wider text-gray-500 text-sm font-bold'>
        {subheading}
      </span>
      <h2 className='font-black text-4xl mt-2 mb-4'>{heading}</h2>
      <p>{description}</p>
    </div>
    <div className='container mx-auto block md:flex md:flex-wrap justify-center my-12'>
      {gridItems.map((item, i) => (
        <div
          key={item.heading}
          className='w-2/3 md:w-1/2 text-center my-6 mx-auto md:mx-0 md:px-2'
        >
          <Fade triggerOnce>
            <Slide direction='up' triggerOnce>
              {item.image ? (
                <Link
                  to={createPath(item.linkUrl)}
                  className='flex-shrink-0 h-12 inline-block my-2'
                >
                  <img
                    src={item.image.publicURL}
                    alt={item.heading}
                    className=''
                  />
                </Link>
              ) : null}
            </Slide>
          </Fade>
          <h3 className='font-bold text-2xl my-2'>{item.heading}</h3>
          <p className='my-2'>{item.text}</p>
          <span className='block'>
            <Link to={createPath(item.linkUrl)} className='font-bold'>
              Service details
              <span className='mx-2 inline'>
                <img
                  className='flex-shrink-0 inline-block align-middle'
                  src={ICON_CHEVRON}
                  alt='Chevron'
                />{' '}
              </span>
            </Link>
          </span>
        </div>
      ))}
    </div>
  </>
)

Services.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      heading: PropTypes.string,
      linkUrl: PropTypes.string,
    })
  ),
}

export default Services
