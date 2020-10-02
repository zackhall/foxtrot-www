import React from 'react'

export const formatLinesAsSpan = (text) =>
  text.split('\n').map((line) => (
    <span>
      {line}
      <br />
    </span>
  ))

export const formatLinesAsP = (text) =>
  text.split('\n').map((line) => <p>{line}</p>)

export const createPath = (path) => (path.charAt(0) === '/' ? path : '/' + path)
