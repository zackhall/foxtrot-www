import React from 'react'
import { Helmet } from 'react-helmet'
import MDX from 'mdx-scoped-runtime'

import Layout from '@components/Layout'
import ContactForm from '@components/ContactForm'
import { formatLinesAsSpan } from '@root/utils'
import Testimonials from '@components/testimonial/ConnectedCarousel'
import { safelyGetFrontMatter } from '@cms/cms.util'
import MDXRenderer from '@components/MDXRenderer'
import PreviewNote from '@components/PreviewNote'

interface ContactPageTemplateProps {
  image: any
  heading: string
  subheading: string
  phone: string
  email: string
  formHeader: string
  testimonialsTag: string
  locations: Array<{
    title: string
    address: string
  }>
  preview: boolean
  children: any[]
}

export const ContactPageTemplate: React.FC<ContactPageTemplateProps> = (
  props
) => {
  const {
    image,
    heading,
    subheading,
    phone,
    email,
    formHeader,
    locations,
    testimonialsTag,
    preview,
    children,
  } = props

  return <>
    <header>
      <div className='bg-orange-200 md:h-6 lg:h-16'></div>
      <div
        className='header bg-contain bg-orange-200 bg-center p-4 md:p-8 lg:p-12 bg-no-repeat'
        style={{
          backgroundImage: `url(${
            image && image.childImageSharp
              ? image.childImageSharp.gatsbyImageData.src
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

    <section className='container px-4 my-24 mx-auto'>
      <h2>Locations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
        {locations &&
          locations.map((loc) => (
            <div key={loc.title}>
              <h4>{formatLinesAsSpan(loc.title)}</h4>
              <MDX>{loc.address}</MDX>
            </div>
          ))}
      </div>
    </section>

    <MDXRenderer>{children}</MDXRenderer>

    {!preview && testimonialsTag ? (
      <Testimonials tag={testimonialsTag} />
    ) : null}

    {preview && testimonialsTag ? (
      <PreviewNote>
        Testimonials not loaded in preview. Page will show testimonials
        matching tag: {testimonialsTag}
      </PreviewNote>
    ) : null}
  </>;
}

const ContactPage = (props) => {
  const { pageContext } = props
  const frontmatter = safelyGetFrontMatter(pageContext)

  return (
    <Layout>
      <Helmet titleTemplate='%s | Foxtrot Aviation Services'>
        <title>{`${frontmatter.title}`}</title>
        <meta name='description' content={`${frontmatter.subheading}`} />
      </Helmet>
      <ContactPageTemplate
        {...props}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        phone={frontmatter.phone}
        email={frontmatter.email}
        formHeader={frontmatter.formHeader}
        testimonialsTag={frontmatter.testimonialsTag}
        locations={frontmatter.locations}
        preview={false}
      />
    </Layout>
  )
}

export default ContactPage
