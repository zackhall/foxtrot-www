import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { ArrowLeft, ArrowRight } from '@components/Icons/Arrows'
import Anchor from '@components/Anchor'
import FilmStrip from '@components/FilmStrip'
import Header from '@components/Header'
import Testimonials from '@components/testimonial/ConnectedCarousel'
import TestimonialsPreview from '@components/testimonial/PreviewCarousel'
import { FeatureTable, FeatureTableColumn } from '@components/FeatureTable'
import Spacer from '@components/Spacer'
import StyledList from '@components/StyledList'

export const MDX_COMPONENTS = {
  Anchor,
  ArrowLeft,
  ArrowRight,
  FeatureTable,
  FeatureTableColumn,
  FilmStrip,
  Header,
  Spacer,
  Testimonials,
  ul: StyledList,
}

export const PREVIEW_MDX_COMPONENTS = {
  ...MDX_COMPONENTS,
  Testimonials: TestimonialsPreview,
}

const MDXRenderer = ({ children }) => (
  <MDXProvider components={MDX_COMPONENTS}>{children}</MDXProvider>
)

export default MDXRenderer
