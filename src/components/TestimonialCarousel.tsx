import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { ArrowLeft, ArrowRight } from './Icons/Arrows'

interface TestimonialsProps {
  testimonials: Array<{
    author: string
    company: string
    quote: string
    avatar: any
  }>
}

enum DIRECTION {
  NONE = '',
  LEFT = 'to-left',
  RIGHT = 'to-right',
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  let [position, setPosition] = useState(0)
  let [direction, setDirection] = useState(DIRECTION.NONE)

  const renderTestimonials = () =>
    testimonials.map((t, index) => (
      <CSSTransition
        in={index === position}
        timeout={300}
        classNames='testimonial'
        unmountOnExit={true}
        key={t.author}
      >
        <li className='testimonial block w-full md:w-2/3 flex-none mx-auto px-4 md:px-0'>
          {console.log({ index, position, eq: index === position })}
          <p className='text-xl'>{t.quote}</p>
          <div className='flex my-6'>
            <img
              src={t.avatar.childImageSharp.fluid.src}
              alt={t.author}
              className='mr-6'
            />
            <div>
              <span className='block font-bold'>{t.author}</span>
              <span className='block text-sm'>{t.company}</span>
            </div>
          </div>
        </li>
      </CSSTransition>
    ))

  return (
    <section
      className='bg-orange-200 relative px-6 py-12'
      aria-labelledby='testimonial-heading'
    >
      <h3 id='testimonial-heading' className='hidden'>
        Testimonials
      </h3>
      <button
        onClick={() => {
          setPosition(Math.min(testimonials.length - 1, position + 1))
          setDirection(DIRECTION.RIGHT)
        }}
        className='absolute disabled:opacity-50 disabled:cursor-not-allowed z-10'
        style={{
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        disabled={position >= testimonials.length - 1}
      >
        <ArrowRight />
      </button>
      <button
        onClick={() => {
          setPosition(Math.max(0, position - 1))
          setDirection(DIRECTION.LEFT)
        }}
        className='absolute disabled:opacity-50 disabled:cursor-not-allowed z-10'
        style={{
          left: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        disabled={position <= 0}
      >
        <ArrowLeft />
      </button>
      <div className='relative container mx-auto'>
        <div className='hidden md:visible absolute bg-orange-fadetoleft inset-y-0 right-0 w-1/5'></div>
        <ul className={`block overflow-hidden min-h-64 ${direction}`}>
          {renderTestimonials()}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
