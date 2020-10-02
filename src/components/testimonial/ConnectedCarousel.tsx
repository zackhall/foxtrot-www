import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Carousel from './Carousel'

interface ConnectedCarouselProps {
  tag: string
}

const ConnectedCarousel: React.FC<ConnectedCarouselProps> = ({ tag }) => {
  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      markdownRemark(frontmatter: { type: { eq: "testimonials" } }) {
        frontmatter {
          type
          testimonials {
            author
            company
            quote
            tags
            avatar {
              childImageSharp {
                fluid(maxWidth: 50, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const testimonials = data.markdownRemark.frontmatter.testimonials.filter(
    (t) => t.tags && t.tags.includes(tag)
  )

  return <Carousel testimonials={testimonials} />
}

export default ConnectedCarousel
