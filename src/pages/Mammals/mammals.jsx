import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { animals } from '../../data/animals';
import Sidebar from '../../components/Sidebar/sidebar';
import AnimalDetailModal from '../../components/AnimalDetailModal/animalDetailModal';

const Mammals = () => {
  const [modalAnimal, setModalAnimal] = React.useState(null);
  const mammals = animals.filter(a => a.group === 'mammals');

  const sidebar = (
    <Sidebar animals={mammals} onAnimalClick={(name) => {
      const animal = mammals.find(a => a.name === name);
      setModalAnimal(animal);
    }} />
  );

  return (
    <PageLayout sidebar={sidebar}>
      <h2>Learn about Australian Mammals</h2>
      {modalAnimal && <AnimalDetailModal animal={modalAnimal} onClose={() => setModalAnimal(null)} />}
    </PageLayout>
  );
};

export default Mammals;