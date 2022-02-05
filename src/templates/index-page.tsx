import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '@components/Layout'
import Services from '@components/Services'
import AboutSection from '@components/AboutSection'
import LargeGallery from '@components/LargeGallery'
import Testimonials from '@components/testimonial/ConnectedCarousel'
import TestimonialsPreview from '@components/testimonial/PreviewCarousel'
import Plane from '@components/Icons/Plane'

interface IndexPageTemplateProps {
  image: any
  heading: string
  subheading: string
  intro: {
    blurbs: Array<any>
    heading: string
    subheading: string
    description: string
  }
  about: {
    heading: string
    subheading: string
    links: Array<any>
    blurbs: Array<any>
    image: any
  }
  gallery: {
    items: Array<any>
    heading: string
    linkText: string
    linkUrl: string
  }
  brands: Array<{
    image: any
    alt: string
  }>
  testimonialsTag: string
  preview?: boolean
}

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({
  image,
  heading,
  subheading,
  intro,
  about,
  gallery,
  brands,
  testimonialsTag,
  preview = false,
}) => (
  <>
    {/* Banner */}
    <div
      className='flex bg-cover bg-center p-12 py-24 lg:py-48 xl:py-56 justify-center'
      style={{
        backgroundImage: `url(${
            image?.childImageSharp?.fixed?.src || "blank"
        })`,
      }}
    >
      <div className='w-3/4 lg:w-2/3'>
        <span className='block text-white text-center uppercase min-w-full tracking-wider font-extrabold text-s, md:text-base my-1'>
          {subheading}
        </span>
        <h1 className='text-white text-2xl lg:text-4xl xl:text-6xl font-black text-center my-6'>
          {heading}
        </h1>
        {/* Hide the play button until there is a video */}
        {/* <div className='flex flex-row justify-center items-center'>
          <Play className='flex-shrink-0 h-8 w-8 lg:h-12 lg:w-12 mx-2' />
          <a className='text-white font-bold h-full mx-2' href='#'>
            See how Foxtrot works
          </a>
        </div> */}
      </div>
    </div>
    {/* End Banner */}

    {/* Brand Stripe */}
    <div className='bg-orange-200 relative'>
      <div
        className='absolute bg-orange-200 rounded-full h-24 w-24 flex justify-center items-center p-2'
        style={{
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Plane className='flex-shrink-0 h-1/2 animate-bounce' />
      </div>
      <div className='hidden my-6 uppercase font-bold tracking-wider text-sm md:hidden'>
        Trusted in the industry
      </div>
      <div className='container mx-auto py-12 flex justify-center items-center flex-wrap'>
        <span className='block w-full md:w-auto text-center mx-6 uppercase font-bold tracking-wider text-sm'>
          Trusted in the industry
        </span>
        {brands.map((brand) => (
          <img
            className='flex-shrink-0 h-8 lg:h-12 m-6'
            src={ brand?.image?.childImageSharp?.fixed?.src || "unknown" }
            alt={brand.alt}
          />
        ))}
      </div>
    </div>
    {/* End Brand Stripe */}

    <Services
      heading={intro.heading}
      subheading={intro.subheading}
      description={intro.description}
      gridItems={intro.blurbs}
    />

    <AboutSection
      heading={about.heading}
      subheading={about.subheading}
      links={about.links}
      blurbs={about.blurbs}
      image={about.image}
    />

    <LargeGallery
      items={gallery.items}
      heading={gallery.heading}
      linkText={gallery.linkText}
      linkUrl={gallery.linkUrl}
    />

    {/* Text well */}
    <div className='container p-6 mx-auto py-24 flex flex-col md:flex-row'>
      <div className='w-full md:w-7/12 mb-6'>
        <p className='font-black text-4xl leading-tight'>
          Next time you see an orange shirt in the hangar, introduce yourself
          and you’ll see what it means to be a part of the Foxtrot family.
        </p>
      </div>
      <div className='hidden md:block w-1/12'></div>
      <div className='w-full md:w-4/12'>
        <p className='text-xl cols-1 --lg:cols-2'>
          If there is a mistake, our team mobilizes to make it right, with early
          notification, world class event reporting, and constant communication.
        </p>
      </div>
    </div>
    {/* End Text well */}

    {!preview && testimonialsTag ? (
      <Testimonials tag={testimonialsTag} />
    ) : null}
    {preview && testimonialsTag ? (
      <TestimonialsPreview tag={testimonialsTag} />
    ) : null}
  </>
)

interface IndexPageProps {
  data: {
    markdownRemark: {
      frontmatter: any
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
        about={frontmatter.about}
        gallery={frontmatter.galleryPreview}
        brands={frontmatter.brands}
        testimonialsTag={frontmatter.testimonialsTag}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      image {
        childImageSharp {
          fixed(width: 2000){
            src
          }
        }
      }
      heading
      subheading
      intro {
        blurbs {
          image {
            publicURL
          }
          text
          heading
          linkUrl
        }
        heading
        subheading
        description
      }
      about {
        blurbs {
          icon {
            publicURL
          }
          heading
          text
        }
        links {
          text
          url
        }
        heading
        subheading
        image {
          childImageSharp {
            fixed(width: 650, quality: 80) {
              src
            }
          }
        }
      }
      galleryPreview {
        items {
          image {
            childImageSharp {
              fixed(width: 650, quality: 80) {
                src
              }
            }
          }
          alt
        }
        heading
        linkText
        linkUrl
      }
      testimonialsTag
      brands {
        image {
          childImageSharp {
            fixed(width: 250, quality: 80) {
              src
            }
          }
        }
        alt
      }
    }
  }
}
`
