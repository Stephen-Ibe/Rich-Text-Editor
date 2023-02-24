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
        <div className='border-2 h-[200px] flex items-center justify-center border-dotted border-green-500'>
          <input type='file' accept='image/*' onChange={handleImageUpload} />
        </div>

        <div className='space-x-4 mt-4'>
          <button
            className='py-2 border-0 px-4 rounded bg-green-600 text-white font-semibold outline-none'
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
