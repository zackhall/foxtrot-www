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
  )
}

export default FilmStrip
