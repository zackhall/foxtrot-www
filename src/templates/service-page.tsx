import React from 'react'
import { Helmet } from 'react-helmet'

import MDXRenderer from '@components/MDXRenderer'
import Layout from '@components/Layout'
import Anchor from '@components/Anchor'
import Header from '@components/Header'
import { safelyGetFrontMatter } from '@cms/cms.util'

export interface ServicePageTemplateProps {
  intro: {
    text: string
    actionLabel: string
    actionUrl: string
  }
  title: string
  helmet?: any
  image?: any
  children: any[]
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  intro,
  title,
  helmet,
  image,
  children,
}) => {
  return (
    <>
      { helmet }
      <Header imageUrl={image} title={title} />
      <section className='bg-orange-200 py-12'>
        <div className='container-sm mx-auto px-4 text-center'>
          <p className='my-4'>{intro.text}</p>
          <Anchor to={`/${intro.actionUrl}`}>{intro.actionLabel}</Anchor>
        </div>
      </section>
      <section className='container-sm mx-auto px-4 my-12'>
        <MDXRenderer>{children}</MDXRenderer>
      </section>
    </>
  )
}

interface ServicePageProps {
  pageContext: any
}

const ServicePage: React.FC<ServicePageProps> = (props) => {
  const { pageContext } = props
  const frontmatter = safelyGetFrontMatter(pageContext)

  return (
    <Layout>
      <ServicePageTemplate
        {...props}
        intro={frontmatter.serviceIntro}
        helmet={
          <Helmet titleTemplate='%s | Foxtrot Aviation Services'>
            <title>{`${frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${frontmatter.serviceIntro.text}`}
            />
          </Helmet>
        }
        title={frontmatter.title}
        image={frontmatter.featuredimage}
      />
    </Layout>
  )
}

export default ServicePage
