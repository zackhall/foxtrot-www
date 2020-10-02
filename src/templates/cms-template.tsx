import React from 'react'

import HomePage from './index-page'
import DefaultPage from './default-page'
import ContactPage from './contact-page'
import GalleryPage from './gallery-page'
import ServicePage from './service-page'

import { safelyGetFrontMatter } from '../cms/cms.util'

// Extend this template map to allow your users to choose a page layout from the CMS
// If you're only looking for how to specify a different template per content folder, see:
// https://www.gatsbyjs.org/packages/gatsby-mdx/#installation
const componentTemplateMap = {
  'home-page': HomePage,
  'default-page': DefaultPage,
  'contact-page': ContactPage,
  'gallery-page': GalleryPage,
  'service-page': ServicePage,
}

const CMSTemplate = (props) => {
  const { pageContext } = props
  const { templateKey } = safelyGetFrontMatter(pageContext)
  const Page = componentTemplateMap[templateKey]

  return <>{Page ? <Page {...props} /> : <DefaultPage {...props} />}</>
}

export default CMSTemplate
