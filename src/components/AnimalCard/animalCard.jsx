import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/AnimalCard/animalCard.module.css";
import Styles from "../../components/ImageStyles.module.css";

const AnimalCard = ({ animal, onReadMore, showGroupLink = false }) => {
  const shortDesc = animal.description.slice(0, 200) + "...";
  return (
    <div className={styles.card}>
      <img src={animal.image} alt={animal.name} className={styles.thumb} />
      <h3>{animal.name}</h3>
      <p>{shortDesc}</p>
      <p>
        <strong>Food:</strong> {animal.food}
      </p>
      {showGroupLink && (
        <Link to={`/${animal.group}`} className={styles.groupLink}>
          {animal.group}
        </Link>
      )}
      <br />
      <button
        onClick={() => {
          onReadMore();
        }}
      >
        Read More
      </button>
    </div>
  );
};
 
export default AnimalCard;