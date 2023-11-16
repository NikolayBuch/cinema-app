import { createContext } from "react";
import useModal from "hooks/useModal";
import Modal from 'components/common/Modal';

let ModalContext;
const { Provider } = (ModalContext = createContext());

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };