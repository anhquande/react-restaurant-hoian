import React from 'react';
import HomeHeader from '../components/HomeHeader';
import About from '../components/About';
import RestaurantMenu from '../components/RestaurantMenu';
import PhotoGallery from '../components/PhotoGallery';

export const HomePage = () => {
  return (
    <>
      <HomeHeader/>
      <About/>
      <RestaurantMenu/>
      <PhotoGallery/>
    </>
  )
}
