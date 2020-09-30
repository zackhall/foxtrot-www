import React from 'react'
import MDX from 'mdx-scoped-runtime'

import { MDX_COMPONENTS } from '@components/MDXRenderer'

const MdxPreview = ({ children }) => (
  <MDX scope={MDX_COMPONENTS}>{children}</MDX>
)

export default MdxPreview
