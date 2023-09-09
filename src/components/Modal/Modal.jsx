import * as basicLightbox from 'basiclightbox';
import { Modal, Overlay } from './Modal.styled';

// const instance = basicLightbox.create(`

// `);

export default function ModalWindow() {
  return (
    <Overlay class="overlay">
      <Modal class="modal">
        <img src="../../../public/logo512.png" width="800" height="600"></img>
      </Modal>
    </Overlay>
  );
}
