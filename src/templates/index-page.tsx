import React from 'react'
import { Link, graphql } from 'gatsby'
import { Bounce } from 'react-awesome-reveal'

import Layout from '@components/Layout'
import Services from '@components/Services'
import AboutSection from '@components/AboutSection'
import LargeGallery from '@components/LargeGallery'
import ConnectedCarousel from '@components/testimonial/ConnectedCarousel'
import Plane from '@components/Icons/Plane'
import Play from '@components/Icons/Play'

interface IndexPageTemplateProps {
  image: any
  title: string
  heading: string
  subheading: string
  mainpitch: any
  description: string
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
}

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  about,
  gallery,
  brands,
  testimonialsTag,
}) => (
  <>
    {/* Banner */}
    <div
      className='flex bg-cover bg-center p-12 py-24 lg:py-48 xl:py-56 justify-center'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className='w-3/4 lg:w-2/3'>
        <span className='block text-white text-center uppercase min-w-full tracking-wider font-bold text-xs md:text-sm my-1'>
          Aviation Service and Refurbishment Experts
        </span>
        <h1 className='text-white text-2xl lg:text-4xl xl:text-6xl font-black text-center my-6'>
          Experience you can trust.
        </h1>
        <div className='flex flex-row justify-center items-center'>
          <Play className='flex-shrink-0 h-8 w-8 lg:h-12 lg:w-12 mx-2' />
          <a className='text-white font-bold h-full mx-2' href='#'>
            See how Foxtrot works
          </a>
        </div>
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
      <div className='container mx-auto py-12 flex justify-center items-center'>
        <span className='block mx-6 uppercase font-bold tracking-wider text-sm'>
          Trusted in the industry
        </span>
        {brands.map((brand) => (
          <img
            className='flex-shrink-0 h-8 lg:h-12 mx-6'
            src={brand.image.childImageSharp.fluid.src}
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

    <ConnectedCarousel tag={testimonialsTag} />
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
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
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
              fluid(maxWidth: 650, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        galleryPreview {
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 650, quality: 80) {
                  ...GatsbyImageSharpFluid
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
              fluid(maxWidth: 250, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`
