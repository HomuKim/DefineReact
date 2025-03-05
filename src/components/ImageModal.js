import React, { useState, useEffect } from 'react';

function ImageModal({ trainer, onClose, trainers }) {
	const [currentTrainer, setCurrentTrainer] = useState(trainer);
	const [nextTrainer, setNextTrainer] = useState(null);
	const [isActive, setIsActive] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		setIsActive(true);
		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	const changeImage = (next) => {
		setIsTransitioning(true);
		setNextTrainer(next);
		setTimeout(() => {
			setCurrentTrainer(next);
			setNextTrainer(null);
			setIsTransitioning(false);
		}, 300); // 페이드 아웃/인 시간과 동일하게 설정
	};

	const handlePrev = () => {
		const currentIndex = trainers.findIndex(t => t.id === currentTrainer.id);
		const prevIndex = (currentIndex - 1 + trainers.length) % trainers.length;
		changeImage(trainers[prevIndex]);
	};

	const handleNext = () => {
		const currentIndex = trainers.findIndex(t => t.id === currentTrainer.id);
		const nextIndex = (currentIndex + 1) % trainers.length;
		changeImage(trainers[nextIndex]);
	};

	const handleClose = () => {
		setIsActive(false);
		setTimeout(onClose, 300);
	};

	return (
		<div className={`modal ${isActive ? 'active' : ''}`}>
			<span className="close" onClick={handleClose}>&times;</span>
			<button className="prev-btn" onClick={handlePrev}>&lt;</button>
			<div className="modal-content-container">
				<img
					className={`modal-content ${isTransitioning ? 'fading-out' : ''}`}
					src={currentTrainer.fullImage}
					alt={`트레이너 ${currentTrainer.id}`}
					style={{ opacity: isActive && !isTransitioning ? 1 : 0 }}
				/>
				{nextTrainer && (
					<img
						className={`modal-content next-image ${isTransitioning ? 'fading-in' : ''}`}
						src={nextTrainer.fullImage}
						alt={`트레이너 ${nextTrainer.id}`}
						style={{ opacity: isTransitioning ? 1 : 0 }}
					/>
				)}
				<a href={currentTrainer.instagram} className="instagram-button" target="_blank" rel="noopener noreferrer">
					<img src="images/instagram-icon.png" alt="Instagram" className="instagram-icon" />
				</a>
			</div>
			<button className="next-btn" onClick={handleNext}>&gt;</button>
		</div>
	);
}

export default ImageModal;
