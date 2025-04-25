import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { animals } from '../../data/animals.js';
import Sidebar from '../../components/Sidebar/sidebar';
import AnimalDetailModal from '../../components/AnimalDetailModal/animalDetailModal';

const Birds = () => {
  const [modalAnimal, setModalAnimal] = React.useState(null);
  const birds = animals.filter(a => a.group === 'birds');

  const sidebar = (
    <Sidebar animals={birds} onAnimalClick={(name) => {
      const animal = birds.find(a => a.name === name);
      setModalAnimal(animal);
    }} />
  );

  return (
    <PageLayout sidebar={sidebar}>
      <h2>Learn about Australian Birds</h2>
      {modalAnimal && <AnimalDetailModal animal={modalAnimal} onClose={() => setModalAnimal(null)} />}
    </PageLayout>
  );
};

export default Birds;