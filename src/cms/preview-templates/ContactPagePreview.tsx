import React from 'react'

import MdxPreview from './MdxPreview'
import { ContactPageTemplate } from '@templates/contact-page'

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ContactPageTemplate
        image={getAsset(data.image)}
        heading={data.heading}
        subheading={data.subheading}
        phone={data.phone}
        email={data.email}
        formHeader={data.formHeader}
        locations={data.locations}
        testimonialsTag={data.testimonialsTag}
        preview={true}
        children={[<MdxPreview>{data.body}</MdxPreview>]}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ContactPagePreview
