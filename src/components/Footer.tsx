import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { createPath } from '@root/utils'

import { Instagram, Facebook, LinkedIn } from '@components/socialLinks'

const Footer: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(
        frontmatter: { title: { eq: "footer" }, type: { eq: "menu" } }
      ) {
        frontmatter {
          menuItems {
            type
            title
            path
          }
        }
      }
    }
  `)

  // filter out dropdown items (as those can't be rendered in footer)
  const menuItems = data.markdownRemark.frontmatter.menuItems.filter(
    (item) => item.type === 'link'
  )

  return (
    <footer className='bg-navy-500'>
      <div className='container p-6 mx-auto block md:flex justify-between text-white'>
        <span className='block m-2 text-center'>
          © 2020 Foxtrot Aviation Services
        </span>
        <ul className='block md:space-x-8 mt-0'>
          {menuItems.map((item) => (
            <li key={item.path} className='block text-center md:inline-block'>
              <Link
                to={createPath(item.path)}
                className='hover:opacity-75'
                activeClassName='opacity-75'
              >
                {item.title}
              </Link>
            </li>
          ))}
          <Instagram className='block md:inline-block hover:opacity-75' />
          <Facebook className='block md:inline-block hover:opacity-75' />
          <LinkedIn className='block md:inline-block hover:opacity-75' />
        </ul>
      </div>
    </footer>
  )
}

export default Footer
