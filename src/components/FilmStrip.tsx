import React from 'react'

import Anchor from '@components/Anchor'

export interface FilmStripProps {
  photos: Array<{
    src: any
    alt: string
  }>
  link?: {
    text: string
    path: string
  }
}

const FilmStrip: React.FC<FilmStripProps> = ({ photos, link }) => {
  return (
    <div className='my-12 lg:my-16'>
      <div className='w-full h-48'>
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={`inline-block w-4/12 h-full object-cover ${
              i !== 0 ? 'pl-2' : ''
            } ${i < photos.length - 1 ? 'pr-2' : ''}`}
          />
        ))}
      </div>
      {link && link.text && link.path ? (
        <div className='text-right mt-8'>
          <Anchor to={`/${link.path}`}>{link.text}</Anchor>
        </div>
      ) : null}
    </div>
  )
}

export default FilmStrip
