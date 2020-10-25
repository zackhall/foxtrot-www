import React from 'react'

export const formatLinesAsSpan = (text) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))

export const formatLinesAsP = (text) =>
  text.split('\n').map((line, i) => <p key={i}>{line}</p>)

export const createPath = (path) => (path.charAt(0) === '/' ? path : '/' + path)
