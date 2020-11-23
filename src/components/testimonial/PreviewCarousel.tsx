import React from 'react'

import { ConnectedCarouselProps } from './ConnectedCarousel'
import PreviewNote from '@components/PreviewNote'

const PreviewCarousel: React.FC<ConnectedCarouselProps> = ({ tag }) => (
  <PreviewNote>
    Testimonials not loaded in preview. Page will show testimonials matching
    tag: {tag}
  </PreviewNote>
)

export default PreviewCarousel
