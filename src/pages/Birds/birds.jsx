import React, { useState } from "react";
import { animals } from "../../data/animals.js";
import Sidebar from "../../components/Sidebar/sidebar";
import AnimalDetailModal from "../../components/AnimalDetailModal/animalDetailModal";
import AnimalCard from "../../components/AnimalCard/animalCard";
 
const birds = animals.filter((a) => a.group === "birds");
 
const Birds = () => {
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
      animals={birds}
      activeAnimal={activeAnimalName}
      onAnimalClick={handleAnimalClick}
    />
  );
 
  const activeAnimal = birds.find((animal) => animal.name === activeAnimalName);
 
  return (
    <PageLayout sidebar={sidebar}>
      {showModal ? (
        <AnimalDetailModal
          animal={activeAnimal}
          onClose={() => setShowModal(false)}
        />
      ) : activeAnimal ? (
        <AnimalCard animal={activeAnimal} onReadMore={handleReadMore} />
      ) : (
        <h2>Learn about Australian Birds</h2>
      )}
    </PageLayout>
  );
};
 
export default Birds;
 