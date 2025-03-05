import React from 'react';
import FacilityHero from '../components/FacilityHero';
import FacilityGallery from '../components/FacilityGallery';
import '../css/Facilities.css';

const Facilities = () => {
  return (
    <main>
      <FacilityHero />
      <FacilityGallery />
    </main>
  );
};

export default Facilities;
