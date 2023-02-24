import React, { useState } from 'react';
import { Modal, Upload } from '../../common';
// import ReactQuill from 'react-quill';

type Props = {
  closeModal(): void;
  handleImageUpload?: any;
  insertImage(): any;
};

const UploadPicture = ({
  closeModal,
  handleImageUpload,
  insertImage,
}: Props) => {
  // const upload = () => {};

  return (
    <Modal isOpen closeModal={closeModal}>
      <div className='my-4'>
        <div className='my-4'>
          <p className='font-semibold'>Upload Image</p>
        </div>
        <input type='file' accept='image/*' onChange={handleImageUpload} />
        <div className='space-x-4'>
          <button
            className='py-2 border px-4 rounded bg-green-600 text-white font-semibold'
            onClick={insertImage}
          >
            Embed
          </button>
          <button className='py-2 border px-4 rounded' onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadPicture;
