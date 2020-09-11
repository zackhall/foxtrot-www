import React from 'react'

export const formatAsLines = (text) =>
  text.split('\n').map((line) => (
    <span>
      {line}
      <br />
    </span>
  ))
