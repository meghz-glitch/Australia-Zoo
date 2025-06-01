import React, { useEffect } from 'react';
import styles from '../AnimalDetailModal/animalModal.module.css';

const AnimalDetailModal = ({ animal, onClose }) => {
  if (!animal) return null;

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent click from bubbling when clicking inside modal
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        role="dialog"
        aria-modal="true"
        onClick={handleContentClick}
      >
        <button onClick={onClose} className={styles.close}>Close</button>
        <h2>{animal.name}</h2>
        <img src={animal.image} alt={animal.name} className={styles.image} />
        <p>{animal.description}</p>
        <ul>
          <li><strong>Food:</strong> {animal.food}</li>
          <li><strong>Lifespan:</strong> {animal.lifespan} years</li>
          <li><strong>Length:</strong> {animal.length}</li>
          <li><strong>Weight:</strong> {animal.weight}</li>
          <li><strong>Found:</strong> {animal.found}</li>
        </ul>
      </div>
    </div>
  );
};

export default AnimalDetailModal;
