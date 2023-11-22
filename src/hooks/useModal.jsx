import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    document.body.style.overflowY = isOpen ? 'visible' : 'hidden';
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleModal,
  };
};

export default useModal;
