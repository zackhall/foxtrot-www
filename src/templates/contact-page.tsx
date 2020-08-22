import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ContactForm from '../components/ContactForm'

interface ContactPageTemplateProps {
  title: string
  image: any
  heading: string
  subheading: string
  phone: string
  email: string
  formHeader: string
  locations: Array<{
    title: string
    address: string
  }>
  content: string
  contentComponent?: any
}

export const ContactPageTemplate: React.FC<ContactPageTemplateProps> = (
  props
) => {
  const {
    title,
    image,
    heading,
    subheading,
    phone,
    email,
    formHeader,
    locations,
    content,
    contentComponent,
  } = props
  const PageContent = contentComponent || Content

  return (
    <div
      className='flex bg-cover bg-center p-12 py-24 lg:py-48 xl:py-56 flex justify-center'
      style={{
        backgroundImage: `url(${
          image && image.childImageSharp
            ? image.childImageSharp.fluid.src
            : image
        })`,
      }}
    >
      <PageContent className='content' content={content} />
      <ContactForm />
    </div>
  )
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = post

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        content={frontmatter.html}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        phone={frontmatter.phone}
        email={frontmatter.email}
        formHeader={frontmatter.formHeader}
        locations={frontmatter.locations}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        phone
        email
        formHeader
        locations {
          title
          address
        }
      }
    }
  }
`
