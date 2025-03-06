import React from 'react';
import FacilityHero from '../components/features/Facilities/FacilityHero';
import FacilityGallery from '../components/features/Facilities/FacilityGallery';
import '../components/features/Facilities/facilities.css';

const Facilities = () => {
  return (
    <main>
      <FacilityHero />
      <FacilityGallery />
    </main>
  );
};

export default Facilities;
