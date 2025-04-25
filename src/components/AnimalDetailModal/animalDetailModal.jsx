import React from 'react';
import styles from '../AnimalDetailModal/animalModal.module.css';

const AnimalDetailModal = ({ animal, onClose }) => {
  if (!animal) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
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