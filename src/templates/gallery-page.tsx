import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import Anchor from '../components/Anchor'
import Gallery from '../components/Gallery'

export interface GalleryPageTemplateProps {
  content: React.ReactNode
  contentComponent: Function
  title: string

  heading: string
  subheading: string
  description: string
  actionLink: {
    text: string
    url: string
  }
  featuredimage?: any
  gallery: Array<{
    image: any
    alt: string
  }>
}

export const GalleryPageTemplate: React.FC<GalleryPageTemplateProps> = ({
  content,
  contentComponent,
  title,
  heading,
  subheading,
  description,
  actionLink,
  featuredimage,
  gallery,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      <header
        className='header-sm flex bg-cover bg-center justify-center items-center'
        style={{
          backgroundImage: `url(${
            featuredimage && featuredimage.childImageSharp
              ? featuredimage.childImageSharp.fluid.src
              : featuredimage
          })`,
        }}
      >
        <h1 className='text-white text-center'>{title}</h1>
      </header>
      <div className='container mx-auto px-4 text-center -mt-12 bg-blue-100 mb-24'>
        <div className='container-sm mx-auto px-4 py-12'>
          <span className='subheading'>{subheading}</span>
          <h1>{title}</h1>
          <p className='my-4'>{description}</p>
          <Link to={actionLink.url}>
            <button className='btn btn-accent'>{actionLink.text}</button>
          </Link>
        </div>
      </div>
      {content ? (
        <section className='container-sm mx-auto px-4 my-24'>
          <PostContent content={content} />
        </section>
      ) : null}
      <section className='container mx-auto px-4 my-24'>
        <Gallery photos={gallery} />
      </section>
    </>
  )
}

interface GalleryPageProps {
  data: {
    markdownRemark: any
  }
}

const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = post

  return (
    <Layout>
      <GalleryPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        {...frontmatter}
      />
    </Layout>
  )
}

export default GalleryPage

export const pageQuery = graphql`
  query GalleryPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
      html
      frontmatter {
        title
        heading
        subheading
        description
        actionLink {
          text
          url
        }
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery {
          image {
            childImageSharp {
              fluid(maxWidth: 750, quality: 72) {
                ...GatsbyImageSharpFluid
              }
              resolutions {
                width
                height
              }
            }
          }
          alt
        }
      }
    }
  }
`
