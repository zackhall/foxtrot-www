import React from 'react'

export interface FilmStripProps {
  photos: Array<{
    src: any
    alt: string
  }>
}

const FilmStrip: React.FC<FilmStripProps> = ({ photos }) => {
  return (
    <div className='w-full h-48'>
      {photos.map((photo) => (
        <img
          src={photo.src}
          alt={photo.alt}
          className='inline-block w-4/12 h-full object-cover'
        />
      ))}
    </div>
  )
}

export default FilmStrip
