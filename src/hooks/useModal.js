import { useState } from 'react';


const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent }
};

export default useModal;

