import React from 'react';
import { Modal, Upload } from '../../common';

type Props = {
  closeModal(): void;
};

const UploadPicture = ({ closeModal }: Props) => {
  return (
    <Modal isOpen closeModal={closeModal}>
      <Upload action='//jsonplaceholder.typicode.com/posts/' />
    </Modal>
  );
};

export default UploadPicture;
