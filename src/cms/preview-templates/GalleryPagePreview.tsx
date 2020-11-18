import React from 'react'

import MdxPreview from './MdxPreview'
import { GalleryPageTemplate } from '@templates/gallery-page'
import { HTMLContent } from '@components/Content'

const GalleryPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <GalleryPageTemplate
        featuredimage={getAsset(data.featuredimage)}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        actionLink={data.actionLink}
        gallery={data.gallery}
        content={data.body}
        contentComponent={HTMLContent}
        preview={true}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default GalleryPagePreview
