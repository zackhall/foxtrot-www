import React from 'react'
import PropTypes from 'prop-types'
import { ServicePageTemplate } from '../../templates/service-page'

// ProductPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// }

const ServicePagePreview = ({ entry, getAsset }) => {
  const entryIntro = entry.getIn(['data', 'intro'])
  const intro = entryIntro ? entryIntro.toJS() : {}

  return (
    <ServicePageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      intro={intro}
    />
  )
}

export default ServicePagePreview
