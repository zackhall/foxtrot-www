import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '@templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        heading={data.heading}
        subheading={data.subheading}
        intro={data.intro}
        about={data.about}
        gallery={data.galleryPreview}
        brands={data.brands}
        testimonialsTag={data.testimonialsTag}
        preview={true}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
