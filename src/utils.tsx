import React from 'react'

export const formatAsLines = (text) =>
  text.split('\n').map((line) => (
    <span>
      {line}
      <br />
    </span>
  ))

export const createPath = (path) => (path.charAt(0) === '/' ? path : '/' + path)
