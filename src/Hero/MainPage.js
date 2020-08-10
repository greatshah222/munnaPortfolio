import React from 'react';

import FrontPage from './pages/FrontPage';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import Skills from '../Skills/Skills';
import Gallery from '../Gallery/Gallery';

function MainPage() {
  return (
    <>
      {' '}
      <FrontPage />
      <Services />
      <Gallery />
      <Experience />
    </>
  );
}

export default MainPage;
