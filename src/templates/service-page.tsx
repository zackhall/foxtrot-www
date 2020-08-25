import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Anchor from '../components/Anchor'

export interface ServicePageTemplateProps {
  content: React.ReactNode
  contentComponent: Function
  intro: {
    text: string
    actionLabel: string
    actionUrl: string
  }
  title: string
  helmet: any
  image?: any
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  content,
  contentComponent,
  intro,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      {helmet || ''}
      <header
        className='header-sm flex bg-cover bg-center justify-center items-center'
        style={{
          backgroundImage: `url(${
            image && image.childImageSharp
              ? image.childImageSharp.fluid.src
              : image
          })`,
        }}
      >
        <h1 className='text-white text-center'>{title}</h1>
      </header>
      <section className='bg-orange-200 py-12'>
        <div className='container-sm mx-auto px-4 text-center'>
          <p className='my-4'>{intro.text}</p>
          <Anchor to={`/${intro.actionUrl}`}>{intro.actionLabel}</Anchor>
        </div>
      </section>
      <section className='container-sm mx-auto px-4 my-12'>
        <PostContent content={content} />
      </section>
    </>
  )
}

interface ServicePageProps {
  data: {
    markdownRemark: any
  }
}

const ServicePage: React.FC<ServicePageProps> = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicePageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        intro={post.frontmatter.serviceIntro}
        helmet={
          <Helmet titleTemplate='%s | Foxtrot Aviation Services'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.serviceIntro.text}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

export default ServicePage

export const pageQuery = graphql`
  query ServicePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        serviceIntro {
          text
          actionLabel
          actionUrl
        }
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
