import Modal from "react-modal";
import css from "./ImageModal.module.css";

type Props = {
  image: string;
  state: boolean;
  close: () => void;
};

export default function ImageModal({ image, state, close }: Props) {
  return (
    <Modal isOpen={state} onRequestClose={close} className={css.modal}>
      <img className={css.modalImg} src={image} />
    </Modal>
  );
}
