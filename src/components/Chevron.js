import React from 'react'
import ICON_CHEVRON from '../assets/Icon/Chevron.svg'
import ICON_CHEVRON_WHITE from '../assets/Icon/Chevron-White.svg'

const Chevron = ({ color, ...props }) => (
  <img
    {...props}
    src={
      color && color.toUpperCase() === 'WHITE'
        ? ICON_CHEVRON_WHITE
        : ICON_CHEVRON
    }
    alt='Chevron'
  />
)

export default Chevron
