import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export interface HeroProps {
  image?: IGatsbyImageData
}

export const Hero: React.FC<HeroProps> = ({image, children}) => (
  <div style={{ display: "grid" }}>
    <GatsbyImage
      image={image}
      style={{
        gridArea: "1/1",
      }}
      // This is a presentational image, so the alt should be an empty string
      alt=""
    />
    <div
      style={{
        // By using the same grid area for both, they are stacked on top of each other
        gridArea: "1/1",
        position: "relative",
        // This centers the other elements inside the hero component
        placeItems: "center",
        display: "grid",
      }}
    >
      {children}
    </div>
  </div>
)

export default Hero