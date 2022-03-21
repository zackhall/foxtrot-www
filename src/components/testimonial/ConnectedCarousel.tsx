import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Carousel from './Carousel'

export interface ConnectedCarouselProps {
  tag: string
}

const ConnectedCarousel: React.FC<ConnectedCarouselProps> = ({ tag }) => {
  const data = useStaticQuery(graphql`query TestimonialsQuery {
  markdownRemark(frontmatter: {type: {eq: "testimonials"}}) {
    frontmatter {
      type
      testimonials {
        author
        company
        quote
        tags
        avatar {
          childImageSharp {
            fixed(width: 50, quality: 80) {
              src
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

  return (
    <div className="w-full-breakout">
      <Carousel testimonials={testimonials} />
    </div>
  );

}

export default ConnectedCarousel
