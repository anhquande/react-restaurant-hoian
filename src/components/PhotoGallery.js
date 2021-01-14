import React, { useState, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../resources/img/food', false, /\.(png|jpe?g|svg)$/));

const photos = images.map(x=>{
  return {src:x.default, width:4, height:3}
});

const PhotoGallery = () => {
  const {t} = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div id="gallery">
      <div className="section-title text-center center">
        <div className="overlay">
          <h2>{t('nav_gallery')}</h2>
          <hr/>
          <p>{t('nav_gallery_description')}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Gallery photos={photos} onClick={openLightbox}/>;
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </div>
  )
}
export default PhotoGallery;
