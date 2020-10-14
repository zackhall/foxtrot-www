import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { ArrowLeft, ArrowRight } from '@components/Icons/Arrows'
import Anchor from '@components/Anchor'
import FilmStrip from '@components/FilmStrip'
import Testimonials from '@components/testimonial/ConnectedCarousel'
import { FeatureTable, FeatureTableColumn } from '@components/FeatureTable'
import StyledList from '@components/StyledList'

export const MDX_COMPONENTS = {
  Anchor,
  ArrowLeft,
  ArrowRight,
  FeatureTable,
  FeatureTableColumn,
  FilmStrip,
  Testimonials,
  ul: StyledList,
}

const MDXRenderer = ({ children }) => (
  <MDXProvider components={MDX_COMPONENTS}>{children}</MDXProvider>
)

export default MDXRenderer
