import React, { useState, useCallback } from 'react'
import RPGallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

export interface GalleryProps {
  photos: Array<{
    image: any
    alt: string
  }>
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const galleryPhotos = photos.map((photo) => ({
    src: photo.image.childImageSharp.fluid.src,
    alt: photo.alt,
    width: photo.image.childImageSharp.fixed.width,
    height: photo.image.childImageSharp.fixed.height,
  }))

  return (
    <div>
      <RPGallery
        photos={galleryPhotos}
        onClick={openLightbox}
        margin={12}
        direction='column'
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={galleryPhotos.map((x) => ({
                ...x,
                source: x.src,
                // caption: x.alt,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default Gallery
