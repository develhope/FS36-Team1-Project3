import { useEffect, useState } from 'react';
import { useGameProgressContext } from '../../context/game-progress/useGameProgressContext';
import Modal from './Modal';

const EndCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { progress } = useGameProgressContext();
  
  // Controlla se tutti i moduli sono completati (score = 2 per ogni modulo)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { overall, ...restOfProgress } = progress;
  const allModulesCompleted = Object.values(restOfProgress).every(value => value === 2);

  useEffect(() => {
    // Mostra la modale quando tutti i moduli sono completati
    if (allModulesCompleted) {
      setIsModalOpen(true);
    }
  }, [allModulesCompleted]);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  );
};

export default EndCourse;