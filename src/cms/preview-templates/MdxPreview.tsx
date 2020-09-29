import React from 'react'
import MDX from 'mdx-scoped-runtime'
import { ArrowRight, ArrowLeft } from '../../components/Icons/Arrows'

const shortcodes = {
  ArrowLeft,
  ArrowRight,
}

const MdxPreview = ({ children }) => <MDX scope={shortcodes}>{children}</MDX>

export default MdxPreview
