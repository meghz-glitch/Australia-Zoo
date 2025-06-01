import React, { useState } from "react";
import { animals } from "../../data/animals";
import Sidebar from "../../components/Sidebar/sidebar";
import AnimalCard from "../../components/AnimalCard/animalCard";
import AnimalDetailModal from "../../components/AnimalDetailModal/animalDetailModal";
 
const reptiles = animals.filter((a) => a.group === "reptiles");
 
const Reptiles = () => {
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
      animals={reptiles}
      activeAnimal={activeAnimalName}
      onAnimalClick={handleAnimalClick}
    />
  );
 
  const activeAnimal = reptiles.find(
    (animal) => animal.name === activeAnimalName
  );
 
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
        <h2>Learn about Australian Reptiles</h2>
      )}
    </PageLayout>
  );
};
 
export default Reptiles;