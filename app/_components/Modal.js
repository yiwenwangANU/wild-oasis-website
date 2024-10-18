"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, createContext, useRef, useContext, useEffect } from "react";

const modalContext = createContext();

function Modal({ children }) {
  const [open, setOpen] = useState("");
  const handleCloseModal = () => setOpen("");
  const handleOpenModal = (name) => setOpen(name);

  return (
    <modalContext.Provider value={{ open, handleCloseModal, handleOpenModal }}>
      {children}
    </modalContext.Provider>
  );
}

const Open = ({ children, name, $variant }) => {
  const { handleOpenModal } = useContext(modalContext);
  return (
    <button
      className="w-fit"
      $variant={$variant}
      onClick={() => handleOpenModal(name)}
    >
      {children}
    </button>
  );
};

const Window = ({ children, name }) => {
  const { open, handleCloseModal } = useContext(modalContext);

  const modalref = useRef();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalref.current && !modalref.current.contains(event.target))
        handleCloseModal();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleCloseModal]);

  if (open !== name) return;
  else
    return (
      <div className="fixed top-0 left-0 w-full h-dvh z-20 transition-all duration-500 backdrop-blur-sm">
        <div
          className="fixed top-1/2 left-1/2 bg-primary-900 text-lg rounded shadow-lg p-10 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 max-w-lg"
          ref={modalref}
        >
          <button
            className="absolute top-3 right-3 w-5 hover:border hover:border-primary-800"
            onClick={() => handleCloseModal()}
          >
            <XMarkIcon />
          </button>
          {children}
        </div>
      </div>
    );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
export { modalContext };
