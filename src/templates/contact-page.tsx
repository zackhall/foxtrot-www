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
    <>
      <header>
        <div className='bg-orange-200 h-16'></div>
        <div
          className='header bg-contain bg-orange-200 bg-center p-12 bg-no-repeat'
          style={{
            backgroundImage: `url(${
              image && image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            })`,
          }}
        >
          <div className='container px-4 mx-auto flex flex-col justify-end h-full'>
            <h2 className='md:w-1/2 xl:w-1/4 text-orange-500'>{heading}</h2>
            <p className='md:w-1/2 lg:w-1/4 xl:w-1/5'>{subheading}</p>
          </div>
        </div>
        <div className='bg-orange-200 h-16'></div>
      </header>
      <section className='container px-4 py-24 mx-auto grid grid-cols-3 gap-8'>
        {locations.map((loc) => (
          <div key={loc.title}>
            <h3>{loc.title}</h3>
            <p>
              {loc.address.split('\n').map((line) => (
                <span>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </section>
      <section className='container px-4 py-24 mx-auto'>
        <h2 className='text-center'>{formHeader}</h2>
        <div className='flex py-12'>
          <ContactForm className='w-1/2' />
          <div className='w-1/2 px-12'>
            <p className='text-xl my-4'>
              <b>E-mail:</b>
              {' ' + email}
            </p>
            <p className='text-xl my-4'>
              <b>Phone:</b>
              {' ' + phone}
            </p>
          </div>
        </div>
      </section>
      <PageContent className='content' content={content} />
    </>
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
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
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
