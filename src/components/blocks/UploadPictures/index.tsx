import React from 'react';
import { Modal, Upload } from '../../common';

type Props = {
  closeModal(): void;
};

const UploadPicture = ({ closeModal }: Props) => {
  const upload = () => {}
  
  return (
    <Modal isOpen closeModal={closeModal}>
      <div className='my-4'>
        <div className='my-4'>
          <p className='font-semibold'>Upload Image</p>
        </div>
        <Upload action='//jsonplaceholder.typicode.com/posts/' />
      </div>
    </Modal>
  );
};

export default UploadPicture;
