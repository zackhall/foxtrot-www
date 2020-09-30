import React from 'react'

import MdxPreview from './MdxPreview'
import { ServicePageTemplate } from '../../templates/service-page'

const ServicePagePreview = ({ entry, getAsset }) => {
  const entryIntro = entry.getIn(['data', 'serviceIntro'])
  const intro = entryIntro ? entryIntro.toJS() : {}

  const body = entry.getIn(['data', 'body'])

  return (
    <ServicePageTemplate
      image={getAsset(entry.getIn(['data', 'featuredimage']))}
      title={entry.getIn(['data', 'title'])}
      intro={intro}
      children={[<MdxPreview>{body}</MdxPreview>]}
    />
  )
}

export default ServicePagePreview
