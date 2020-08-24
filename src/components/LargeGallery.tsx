import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Chevron from '../components/Chevron'
import ImageIcon from '../components/Icons/Image'

interface LargeGalleryProps {
  items: Array<{
    image: any
    alt: string
  }>
  heading: string
  linkText: string
  linkUrl: string
}

const LargeGallery: React.FC<LargeGalleryProps> = ({
  items,
  heading,
  linkText,
  linkUrl,
}) => (
  <div className='container p-6 mx-auto my-24 flex' style={{ height: 600 }}>
    {console.log(items)}
    <div className='hidden lg:flex w-3/12 mr-6 flex-col h-full'>
      <div className='w-full h-1/2 pb-3'>
        <div
          className='w-full h-full bg-cover'
          style={{
            backgroundImage: `url(${
              !!items[0].image.childImageSharp
                ? items[0].image.childImageSharp.fluid.src
                : items[0].image
            })`,
          }}
        ></div>
      </div>
      <div className='w-full h-1/2 pt-3'>
        <div
          className='w-full h-full bg-cover'
          style={{
            backgroundImage: `url(${
              !!items[1].image.childImageSharp
                ? items[1].image.childImageSharp.fluid.src
                : items[1].image
            })`,
          }}
        ></div>
      </div>
    </div>
    <div
      className='hidden md:block md:w-5/12 lg:w-4/12 mr-6 bg-cover h-full'
      style={{
        backgroundImage: `url(${
          !!items[2].image.childImageSharp
            ? items[2].image.childImageSharp.fluid.src
            : items[2].image
        })`,
      }}
    ></div>
    <div
      className='w-full md:w-7/12 lg:w-5/12 bg-cover h-full relative'
      style={{
        backgroundImage: `url(${
          !!items[3].image.childImageSharp
            ? items[3].image.childImageSharp.fluid.src
            : items[3].image
        })`,
      }}
    >
      <div
        className='absolute bg-navy-500 text-white text-center px-6 py-4 w-3/4'
        style={{
          bottom: 0,
          left: '50%',
          transform: 'translate3d(-50%, 50%, 0)',
        }}
      >
        <ImageIcon
          className='absolute'
          style={{
            top: 0,
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)',
          }}
        />
        <h4 className='pt-8 pb-4 text-2xl font-bold'>{heading}</h4>
        <span className='pb-2 block'>
          <Link to={`/${linkUrl}`}>
            {linkText}
            <span className='mx-2 inline'>
              <Chevron
                color='white'
                className='flex-shrink-0 inline-block align-middle'
              />
            </span>
          </Link>
        </span>
      </div>
    </div>
  </div>
)

export default LargeGallery
