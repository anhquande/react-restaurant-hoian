import React, { useState, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../resources/img/food', false, /\.(png|jpe?g|svg)$/));

const photos = images.map(x=>{
  return {src:x, width:4, height:3}
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
          {/*<div className="portfolio-items">*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 breakfast">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/01-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/01-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title">*/}
          {/*        </img>*/}
          {/*      </a>*/}

          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 dinner">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/02-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/02-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 breakfast">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/03-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/03-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 breakfast">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/04-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/04-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 dinner">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/05-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/05-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 lunch">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/06-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/06-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 lunch">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/07-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/07-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 breakfast">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/08-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/08-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 dinner">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/09-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/09-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 lunch">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/10-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/10-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 lunch">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/11-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/11-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-sm-6 col-md-4 col-lg-4 breakfast">*/}
          {/*    <div className="portfolio-item">*/}
          {/*      <div className="hover-bg"><a href="img/portfolio/12-large.jpg"*/}
          {/*                                   title="Dish Name"*/}
          {/*                                   data-lightbox-gallery="gallery1">*/}
          {/*        <div className="hover-text">*/}
          {/*          <h4>Dish Name</h4>*/}
          {/*        </div>*/}
          {/*        <img src="img/portfolio/12-small.jpg"*/}
          {/*             className="img-responsive"*/}
          {/*             alt="Project Title"/> </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}
export default PhotoGallery;
