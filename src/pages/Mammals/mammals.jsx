import React, { useState } from "react";
import PageLayout from "../../layouts/PageLayout";
import { animals } from "../../data/animals";
import Sidebar from "../../components/Sidebar/sidebar";
import AnimalDetailModal from "../../components/AnimalDetailModal/animalDetailModal";
import AnimalCard from "../../components/AnimalCard/animalCard";
 
const mammals = animals.filter((a) => a.group === "mammals");
 
const Mammals = () => {
  const [activeAnimalName, setActiveAnimalName] = useState(null);
  const [showModal, setShowModal] = useState(false);
 
  const handleAnimalClick = (name) => {
    setActiveAnimalName((prev) => (prev === name ? null : name));
    setShowModal(false);
  };
 
  const handleReadMore = () => {
    setShowModal(true);
  };
 
  const sidebar = (
    <Sidebar
      animals={mammals}
      activeAnimal={activeAnimalName}
      onAnimalClick={handleAnimalClick}
    />
  );
 
  const activeAnimal = mammals.find(
    (animal) => animal.name === activeAnimalName
  );
 
  return (
    <index sidebar={sidebar}>
      {showModal ? (
        <AnimalDetailModal
          animal={activeAnimal}
          onClose={() => setShowModal(false)}
        />
      ) : activeAnimal ? (
        <AnimalCard animal={activeAnimal} onReadMore={handleReadMore} />
      ) : (
        <h2>Learn about Australian Mammals</h2>
      )}
    </index>
  );
};
 
export default Mammals;