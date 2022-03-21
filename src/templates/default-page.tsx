import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '@components/Header'
import Layout from '@components/Layout'
import { safelyGetFrontMatter } from '@cms/cms.util'
import MDXRenderer from '@components/MDXRenderer'

export interface DefaultPageTemplateProps {
  title: string
  helmet: any
  image?: any
  fullWidthHeader?: boolean
  children: any[]
}

export const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({
  title,
  helmet,
  image,
  fullWidthHeader,
  children,
}) => {
  return (
    <>
      {helmet || ''}
      <Header imageUrl={image} title={title} fullWidthHeader={fullWidthHeader} />
      <section className='container-sm mx-auto px-4 mt-12 mb-24'>
        <MDXRenderer>{children}</MDXRenderer>
      </section>
    </>
  )
}

interface DefaultPageProps {
  pageContext: any
  children: any[]
}

const DefaultPage: React.FC<DefaultPageProps> = (props) => {
  const { pageContext } = props
  const frontmatter = safelyGetFrontMatter(pageContext)

  return (
    <Layout>
      <DefaultPageTemplate
        {...props}
        helmet={
          <Helmet titleTemplate='%s | Foxtrot Aviation Services'>
            <title>{`${frontmatter.title}`}</title>
            <meta name='description' content={`${frontmatter.description}`} />
          </Helmet>
        }
        title={frontmatter.title}
        image={frontmatter.featuredimage}
        fullWidthHeader={frontmatter.fullWidthHeader}
      />
    </Layout>
  )
}

export default DefaultPage
