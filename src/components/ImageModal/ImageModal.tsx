import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FC } from "react";

type ImageModalProps = {
  image: string;
  state: boolean;
  close: () => void;
};

export const ImageModal: FC<ImageModalProps> = ({ image, state, close }) => {
  return (
    <Modal isOpen={state} onRequestClose={close} className={css.modal}>
      <img className={css.modalImg} src={image} />
    </Modal>
  );
};
