import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export interface DefaultPageTemplateProps {
  content: React.ReactNode
  contentComponent: Function
  title: string
  description: string
  helmet: any
  image?: any
}

export const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({
  content,
  contentComponent,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      {helmet || ''}
      {image ? (
        <header className='my-12'>
          <div className='container mx-auto px-4'>
            <img className='w-full' src={image.childImageSharp.fluid.src} />
          </div>
        </header>
      ) : null}
      <section className='container-sm mx-auto px-4 mt-12 mb-24'>
        <PostContent content={content} />
      </section>
    </>
  )
}

interface DefaultPageProps {
  data: {
    markdownRemark: any
  }
}

const DefaultPage: React.FC<DefaultPageProps> = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DefaultPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate='%s | Foxtrot Aviation Services'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

export default DefaultPage

export const pageQuery = graphql`
  query DefaultPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
