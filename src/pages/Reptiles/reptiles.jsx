import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { animals } from '../../data/animals';
import Sidebar from '../../components/Sidebar/sidebar';
import AnimalDetailModal from '../../components/AnimalDetailModal/animalDetailModal';

const Reptiles = () => {
  const [modalAnimal, setModalAnimal] = React.useState(null);
  const reptiles = animals.filter(a => a.group === 'reptiles');

  const sidebar = (
    <Sidebar animals={reptiles} onAnimalClick={(name) => {
      const animal = reptiles.find(a => a.name === name);
      setModalAnimal(animal);
    }} />
  );

  return (
    <PageLayout sidebar={sidebar}>
      <h2>Learn about Australian Reptiles</h2>
      {modalAnimal && <AnimalDetailModal animal={modalAnimal} onClose={() => setModalAnimal(null)} />}
    </PageLayout>
  );
};

export default Reptiles;