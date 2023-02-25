import React from 'react';
import { Modal } from '../../common';

type Props = { closeModal(): void };

const UploadVideo = ({ closeModal }: Props) => {
  return (
    <Modal isOpen closeModal={closeModal}>
      <div className='my-4'>
        <div className='my-4'>
          <p className='font-semibold'>Upload Image</p>
          <select>
            <option>YouTube</option>
          </select>
        </div>
      </div>
    </Modal>
  );
};

export default UploadVideo;
