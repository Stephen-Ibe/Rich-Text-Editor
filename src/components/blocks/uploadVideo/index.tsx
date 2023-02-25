import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Modal } from '../../common';

type Props = { closeModal(): void };

const providers = [
  { id: 0, name: 'YouTube', value: 'youtube' },
  { id: 1, name: 'Vimeo', value: 'vimeo' },
] as const;

const UploadVideo = ({ closeModal }: Props) => {
  const [userChoice, setUserChoice] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  const handleChange = (e: FormEvent<HTMLSelectElement>) => {
    setUserChoice(e.currentTarget.value);
  };

  return (
    <Modal isOpen closeModal={closeModal}>
      <div className='my-4'>
        <div className='my-4'>
          <label className='text-xs uppercase'>Video Provider</label>
          <select
            className='w-full border py-2 px-1 outline-none mt-1'
            onChange={handleChange}
            value={userChoice}
          >
            <option value=''>Select Provider</option>
            {providers.map(({ id, name, value }) => (
              <option key={id} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className='my-4 flex flex-col gap-y-1'>
          <label className='text-xs uppercase'>url</label>
          <input
            type='text'
            className='border px-1 py-2 outline-none'
            value={url}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUrl(e.target.value)
            }
          />
        </div>
        <div className='space-x-4 mt-4'>
          <button
            className='py-2 border-0 px-4 rounded bg-green-600 text-white font-semibold outline-none'
            // onClick={insertImage}
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

export default UploadVideo;
