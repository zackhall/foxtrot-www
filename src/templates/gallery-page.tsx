import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Layout from '@components/Layout'
import Content, { HTMLContent } from '@components/Content'
import Gallery from '@components/Gallery'
import PreviewNote from '@components/PreviewNote'

export interface GalleryPageTemplateProps {
  content: React.ReactNode
  contentComponent: Function

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
  preview: boolean
}

export const GalleryPageTemplate: React.FC<GalleryPageTemplateProps> = ({
  content,
  contentComponent,
  heading,
  subheading,
  description,
  actionLink,
  featuredimage,
  gallery,
  preview,
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
      ></header>
      <div className='w-full md:container md:mx-auto px-4 text-center md:-mt-12 bg-blue-100 mb-24'>
        <div className='container-sm mx-auto px-4 py-12'>
          <span className='subheading'>{subheading}</span>
          <h1>{heading}</h1>
          <p className='my-4'>{description}</p>
          <Link to={`/${actionLink.url}`}>
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
        {preview ? (
          <PreviewNote>
            Photos not loaded dynamically in preview. Page will show{' '}
            {gallery.length} photo(s).
          </PreviewNote>
        ) : null}
        {!preview ? <Gallery photos={gallery} /> : null}
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
        preview={false}
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
