import React from 'react'
import ICON_ARROW_LEFT from '../../assets/Icon/Arrow-Left.svg'
import ICON_ARROW_RIGHT from '../../assets/Icon/Arrow-Right.svg'

export const ArrowLeft = (props) => (
  <img {...props} src={ICON_ARROW_LEFT} alt='Arrow left' />
)

export const ArrowRight = (props) => (
  <img {...props} src={ICON_ARROW_RIGHT} alt='Arrow right' />
)
