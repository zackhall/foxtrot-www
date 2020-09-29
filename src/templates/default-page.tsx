import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../components/Layout'
import { safelyGetFrontMatter } from '../cms/cms.util'

export interface DefaultPageTemplateProps {
  title: string
  description: string
  helmet: any
  image?: any
  children: any[]
}

export const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({
  title,
  helmet,
  image,
  children,
}) => {
  return (
    <>
      {helmet || ''}
      {image ? (
        <header className='my-12'>
          <div className='container mx-auto px-4'>
            <img className='w-full' src={image} />
          </div>
        </header>
      ) : null}
      <section className='container-sm mx-auto px-4 mt-12 mb-24'>
        <MDXProvider>{children}</MDXProvider>
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
      />
    </Layout>
  )
}

export default DefaultPage
