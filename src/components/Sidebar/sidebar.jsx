import React from 'react';
import styles from '../Sidebar/sidebar.module.css';

const Sidebar = ({ animals, activeAnimal, onAnimalClick }) => (
  <nav aria-label="Animal Navigation" className={styles.sidebar}>
    <ul className={styles.sidebarList}>
      {animals.map((animal) => (
        <li key={animal.name} className={styles.animalItem}>
          <button
            className={`${styles.animalButton} ${
              activeAnimal === animal.name ? styles.active : ''
            }`}
            onClick={() => onAnimalClick(animal.name)}
            aria-current={activeAnimal === animal.name ? 'true' : undefined}
          >
            {animal.name}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
