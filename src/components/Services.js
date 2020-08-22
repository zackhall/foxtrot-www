import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ICON_CHEVRON from '../assets/Icon/Chevron.svg'

const Services = ({ heading, subheading, description, gridItems }) => (
  <>
    <div className='w-1/4 mx-auto text-center my-12'>
      <span className='block uppercase tracking-wider text-gray-500 text-sm font-bold'>
        {subheading}
      </span>
      <h2 className='font-black text-4xl mt-2 mb-4'>{heading}</h2>
      <p>{description}</p>
    </div>
    <div className='container mx-auto flex flex-wrap justify-center'>
      {gridItems.map((item) => (
        <div key={item.heading} className='w-1/3 text-center my-6 inline-block'>
          {item && item.image ? (
            <img
              src={item.image.publicURL}
              alt={item.heading}
              className='flex-shrink-0 h-12 inline-block my-2'
            />
          ) : null}
          <h3 className='font-bold text-2xl my-2'>{item.heading}</h3>
          <p className='my-2'>{item.text}</p>
          <span className='block'>
            <a href='' className='font-bold'>
              Service details
              <span className='mx-2 inline'>
                <img
                  className='flex-shrink-0 inline-block align-middle'
                  src={ICON_CHEVRON}
                  alt='Chevron'
                />{' '}
              </span>
            </a>
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
