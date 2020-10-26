import React from 'react'
import useSiteMetadata from '@components/SiteMetadata'

export const Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 512 512'
    width='20'
    height='20'
  >
    <title>Logo Facebook</title>
    <path
      d='M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z'
      fillRule='evenodd'
    />
  </svg>
)

export const Facebook: React.FC<{
  className?
}> = ({ className }) => {
  const { socialLinks } = useSiteMetadata()

  return socialLinks && socialLinks.facebook ? (
    <a href={socialLinks.facebook} className={className}>
      <Icon />
    </a>
  ) : null
}
