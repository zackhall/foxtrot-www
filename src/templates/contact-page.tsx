import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import Content, { HTMLContent } from '@components/Content'
import ContactForm from '@components/ContactForm'
import { formatLinesAsSpan } from '@root/utils'
import Testimonials from '@components/testimonial/ConnectedCarousel'

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
        <div className='bg-orange-200 md:h-6 lg:h-16'></div>
        <div
          className='header bg-contain bg-orange-200 bg-center p-4 md:p-8 lg:p-12 bg-no-repeat'
          style={{
            backgroundImage: `url(${
              image && image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            })`,
          }}
        >
          <div className='invisible lg:visible container px-4 mx-auto flex flex-col justify-end h-full'>
            <h2 className='md:w-1/2 xl:w-1/4 text-orange-500'>{heading}</h2>
            <p className='md:w-1/2 lg:w-1/4 xl:w-1/5'>{subheading}</p>
          </div>
        </div>
        <div className='bg-orange-200 min-h-6 lg:min-h-16'>
          <div className='lg:invisible w-4/5 mx-auto text-center py-6 px-4'>
            <h2 className='text-orange-500 m-0'>{heading}</h2>
            <p className='m-0'>{subheading}</p>
          </div>
        </div>
      </header>
      <section className='container px-4 my-24 mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
        {locations.map((loc) => (
          <div key={loc.title}>
            <h3>{formatLinesAsSpan(loc.title)}</h3>
            <p>{formatLinesAsSpan(loc.address)}</p>
          </div>
        ))}
      </section>
      <section className='container px-4 my-24 mx-auto'>
        <h2 className='text-center'>{formHeader}</h2>
        <div className='flex flex-col lg:flex-row my-6 lg:my-12'>
          <ContactForm className='lg:w-1/2 my-6' />
          <div className='lg:w-1/2 px-12 my-6 order-first lg:order-last text-center lg:text-left'>
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
      <Testimonials tag='home' />
    </>
  )
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = post

  return (
    <Layout>
      <Helmet titleTemplate='%s | Foxtrot Aviation Services'>
        <title>{`${frontmatter.title}`}</title>
        <meta name='description' content={`${frontmatter.subheading}`} />
      </Helmet>
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
