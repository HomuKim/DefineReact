import React, { useState } from 'react';
import ContactHero from '../components/features/Contact/ContactHero';
import FAQ from '../components/features/Contact/FAQ';
import ContactSection from '../components/features/Contact/ContactSection';
//import MapModal from '../components/MapModal';
import ProgramInfo from '../components/features/Contact/ProgramInfo';
//import VideoModal from '../components/VideoModal';
import '../components/features/Contact/contact.css';

const Contact = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const openMap = () => setIsMapModalOpen(true);
  const closeMapModal = () => setIsMapModalOpen(false);

  const openVideoModal = (id) => {
    setVideoId(id);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setVideoId('');
  };

  return (
    <main>
      <ContactHero />
      <section className="content-section">
        <FAQ />
        <ContactSection openMap={openMap} />
        <ProgramInfo openVideoModal={openVideoModal} />
      </section>
      {isMapModalOpen && <MapModal closeMap={closeMapModal} />}
      {isVideoModalOpen && <VideoModal videoId={videoId} closeVideo={closeVideoModal} />}
    </main>
  );
};

export default Contact;
