import React, { useState } from "react";
import PageLayout from "../../layouts/PageLayout";
import { animals } from "../../data/animals";
import Sidebar from "../../components/Sidebar/sidebar";
import AnimalCard from "../../components/AnimalCard/animalCard";
import AnimalDetailModal from "../../components/AnimalDetailModal/animalDetailModal";
 
const Home = () => {
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
      animals={animals}
      activeAnimal={activeAnimalName}
      onAnimalClick={handleAnimalClick}
    />
  );
 
  const activeAnimal = animals.find(
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
        <AnimalCard
          animal={activeAnimal}
          onReadMore={handleReadMore}
          showGroupLink={true}
        />
      ) : (
        <h2>Welcome to the Australia Zoo Exhibition!</h2>
      )}
    </PageLayout>
  );
};
 
export default Home;