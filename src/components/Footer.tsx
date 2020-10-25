import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { createPath } from '@root/utils'

import logo from '@img/logo.svg'
import facebook from '@img/social/facebook.svg'
import instagram from '@img/social/instagram.svg'
import twitter from '@img/social/twitter.svg'
import vimeo from '@img/social/vimeo.svg'

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
          © 2020 Foxtrot Aviation Services (Repair Station FT2R835D)
        </span>
        <ul className='block md:space-x-8 mt-0'>
          {menuItems.map((item) => (
            <li key={item.path} className='block text-center md:inline-block'>
              <Link to={createPath(item.path)}>{item.title}</Link>
            </li>
          ))}
          {/* <li className='inline-block space-x-4'>
            <a href=''>
              <img
                src='assets/Icon/Instagram.svg'
                alt=''
                className='inline-block'
              />
            </a>
            <a href=''>
              <img
                src='assets/Icon/Twitter.svg'
                alt=''
                className='inline-block'
              />
            </a>
          </li> */}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
