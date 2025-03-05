import React, { useState } from 'react';
import ContactHero from '../components/ContactHero';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import MapModal from '../components/MapModal';
import ProgramInfo from '../components/ProgramInfo';
import VideoModal from '../components/VideoModal';
import '../css/Contact.css';

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
