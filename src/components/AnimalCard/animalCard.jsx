import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/AnimalCard/animalCard.module.css";

const AnimalCard = ({ animal, showGroupLink = false, onReadMore }) => {
  const shortDesc = animal.description.slice(0, 200) + "...";

  return (
    <div className={styles.card}>
      <img src={animal.image} alt={animal.name} className={styles.thumb} />

      <h3 className={styles.name}>{animal.name}</h3>
      <p className={styles.description}>{shortDesc}</p>
      <p>
        <strong>Food:</strong> {animal.food}
      </p>
      {showGroupLink && (
        <Link to={`⁠/${animal.group}`} className={styles.groupLink}>
          {animal.group}
        </Link>
      )}
      <br />
      <button className={styles.readMore} onClick={onReadMore}>
        Read More
      </button>
    </div>
  );
};

export default AnimalCard;
