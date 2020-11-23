import React from 'react'
import MDX from 'mdx-scoped-runtime'

import { PREVIEW_MDX_COMPONENTS } from '@components/MDXRenderer'

const MdxPreview = ({ children }) => (
  <MDX scope={PREVIEW_MDX_COMPONENTS}>{children}</MDX>
)

export default MdxPreview
