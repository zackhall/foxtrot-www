import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { ArrowLeft, ArrowRight } from './Icons/Arrows'

interface TestimonialsProps {
  testimonials: Array<{
    author: string
    company: string
    quote: string
  }>
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  let [position, setPosition] = useState(0)

  const renderTestimonials = () =>
    testimonials.map((t, index) => (
      <CSSTransition
        in={index >= position}
        timeout={300}
        classNames='testimonial'
        unmountOnExit={true}
        key={t.author}
      >
        <li
          className='testimonial block w-2/5 flex-none mr-6'
          style={{ left: 0 }}
        >
          <p className='text-xl'>{t.quote}</p>
          <div className='flex my-6'>
            <img src='/assets/Icon/Avatar.svg' alt='Avatar' className='mr-6' />
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
      className='bg-orange-200 relative'
      aria-labelledby='testimonial-heading'
    >
      <h3 id='testimonial-heading' className='hidden'>
        Testimonials
      </h3>
      <button
        onClick={() =>
          setPosition(Math.min(testimonials.length - 1, position + 1))
        }
        className='absolute disabled:opacity-50 disabled:cursor-not-allowed'
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
        onClick={() => setPosition(Math.max(0, position - 1))}
        className='absolute disabled:opacity-50 disabled:cursor-not-allowed'
        style={{
          left: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        disabled={position <= 0}
      >
        <ArrowLeft />
      </button>
      <div className='relative container mx-auto px-6 py-24'>
        <div className='absolute bg-orange-fadetoleft inset-y-0 right-0 w-1/5'></div>
        {/* <ul className='flex flex-row overflow-hidden'> */}
        <ul className='flex flex-row overflow-hidden'>
          {renderTestimonials()}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
