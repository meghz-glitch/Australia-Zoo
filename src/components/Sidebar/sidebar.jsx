import React from 'react';
import styles from '../Sidebar/sidebar.module.css';

const Sidebar = ({ animals, activeAnimal, onAnimalClick }) => (
  <ul className={styles.sidebarList}>
    {animals.map((animal) => (
    <li
    key={animal.name}
    className={`${styles.animalItem} ${
      activeAnimal === animal.name ? styles.active : ''
    }`}
    onClick={() => onAnimalClick(animal.name)}
  >
    {animal.name}
  </li>
    ))}
  </ul>
);

export default Sidebar;