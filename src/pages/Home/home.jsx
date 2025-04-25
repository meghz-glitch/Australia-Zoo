import React, { useState } from 'react';
import PageLayout from '../../layouts/PageLayout';
import { animals } from '../../data/animals';
import Sidebar from '../../components/Sidebar/sidebar';
import AnimalCard from '../../components/AnimalCard/animalCard';
import AnimalDetailModal from '../../components/AnimalDetailModal/animalDetailModal';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const Home = () => {
  const [activeAnimalName, setActiveAnimalName] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalAnimal, setModalAnimal] = useState(null);

  const handleAnimalClick = (name) => {
    setActiveAnimalName(prev => prev === name ? null : name);
  };

  const handleReadMore = (animal) => {
    setModalAnimal(animal);
    setShowModal(true);
  };

  const sidebar = (
    <Sidebar
      animals={animals}
      activeAnimal={activeAnimalName}
      onAnimalClick={handleAnimalClick}
    />
  );

  const activeAnimal = animals.find(animal => animal.name === activeAnimalName);

  return (
    <PageLayout sidebar={sidebar}>
      {!activeAnimal && <h2>Welcome to the Australia Zoo Exhibition!</h2>}
      {activeAnimal && (
        <AnimalCard animal={activeAnimal} onReadMore={handleReadMore} />
      )}
      {showModal && (
        <AnimalDetailModal animal={modalAnimal} onClose={() => setShowModal(false)} />
      )}
    </PageLayout>
  );
};

export default Home;