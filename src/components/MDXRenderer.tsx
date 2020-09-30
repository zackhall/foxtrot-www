import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { ArrowLeft, ArrowRight } from '@components/Icons/Arrows'
import Anchor from '@components/Anchor'
import FilmStrip from '@components/FilmStrip'

export const MDX_COMPONENTS = {
  Anchor,
  ArrowLeft,
  ArrowRight,
  FilmStrip,
}

const MDXRenderer = ({ children }) => (
  <MDXProvider components={MDX_COMPONENTS}>{children}</MDXProvider>
)

export default MDXRenderer
