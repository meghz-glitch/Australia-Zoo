import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../components/AnimalCard/animalCard.module.css';

const AnimalCard = ({ animal, onReadMore }) => {
  const shortDesc = animal.description.slice(0, 200) + '...';
  return (
    <div className={styles.card}>
      <img src={animal.image} alt={animal.name} className={styles.thumb} />
      <h3>{animal.name}</h3>
      <p>{shortDesc}</p>
      <p><strong>Food:</strong> {animal.food}</p>
      <Link to={`/${animal.group}`}>{animal.group}</Link>
      <button onClick={() => onReadMore(animal)}>Read More</button>
    </div>
  );
};

export default AnimalCard;