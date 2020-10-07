import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export const Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 512 512'
    width='20'
    height='20'
  >
    <title>Logo Instagram</title>
    <path d='M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z' />
    <path d='M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z' />
  </svg>
)

export const Instagram: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query Instagram {
      site {
        siteMetadata {
          socialLinks {
            instagram
          }
        }
      }
    }
  `)

  const { instagram: linkUrl } = data.site.siteMetadata.socialLinks
  return (
    <Link to={linkUrl}>
      <Icon />
    </Link>
  )
}
