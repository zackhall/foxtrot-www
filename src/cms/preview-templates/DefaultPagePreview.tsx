import React from 'react'

import MdxPreview from './MdxPreview'
import { DefaultPageTemplate } from '@templates/default-page'

const DefaultPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <DefaultPageTemplate
        title={data.title}
        description={data.description}
        helmet={null}
        image={getAsset(data.featuredimage)}
        children={[<MdxPreview>{data.body}</MdxPreview>]}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default DefaultPagePreview
