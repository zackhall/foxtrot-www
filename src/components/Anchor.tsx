import React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'

import Chevron from './Chevron'

export default class Anchor<TState> extends React.Component<
  GatsbyLinkProps<TState>,
  any
> {
  render() {
    return (
      <span className='font-extrabold'>
        <Link {...this.props}>{this.props.children}</Link>
        <Chevron className='inline ml-2 pb-1' />
      </span>
    )
  }
}
