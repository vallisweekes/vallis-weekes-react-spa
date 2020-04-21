import React from 'react';
import { ModalClass, ThankYouBtn } from '../../utils/styles';

const Modal = ({ display, closeThankYou }) => {
  const ModalVisibilty = ModalClass(display);
  return (
    <ModalVisibilty>
      <div>Thank You</div>
      <div>
        <ThankYouBtn onClick={closeThankYou}>OK</ThankYouBtn>
      </div>
    </ModalVisibilty>
  );
};

export default Modal;
