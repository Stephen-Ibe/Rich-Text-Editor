import React, { useEffect, useRef, useState, Fragment } from 'react';
import ReactQuill from 'react-quill';
import { FaPlus } from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';
import { TiVideo } from 'react-icons/ti';
import { RiBubbleChartFill } from 'react-icons/ri';
import 'react-quill/dist/quill.snow.css';
import { Popover, Transition } from '@headlessui/react';
import UploadPicture from './components/blocks/UploadPictures';

const solutions = [
  {
    name: 'Picture',
    description: 'JPEG, PNG',
    value: 'picture',
    icon: <AiFillPicture size={28} />,
  },
  {
    name: 'Video',
    description: 'JWPlayer, YouTube, Vimeo',
    value: 'video',
    icon: <TiVideo size={28} />,
  },
  {
    name: 'Social',
    description: 'Instagram, Twitter, FaceBook, Snapchat, TikTok',
    value: 'social',
    icon: <RiBubbleChartFill size={28} />,
  },
] as const;

function App() {
  const [content, setContent] = useState('');
  const [choice, setChoice] = useState<string | unknown | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [selection, setSelection] = useState({ index: 0, length: 0 });
  const editorRef = useRef<ReactQuill | null>(null);

  const modules: Record<string, any> = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image'],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
  };

  const formats: string[] = [
    'header',
    'link',
    'image',
    'align',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
  ];

  function closeModal() {
    setChoice(null);
  }

  function openModal(choice: string) {
    setChoice(choice);
  }

  const handleChange = (editor: any) => {
    setSelection(editor.getSelection());
  };

  const inputChange = (value: string) => {
    setContent(value);
  };

  const insertImage = () => {
    const editor = editorRef.current?.getEditor();
    if (editor) {
      const range = selection.index + selection.length;
      editor.insertEmbed(range, 'image', imageUrl, 'user');
      editor.setSelection(range + 1, 0);
    }

    closeModal();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    editorRef?.current?.focus();
  }, []);

  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='my-4'>
          <input
            type='text'
            placeholder='This is the title'
            className='placeholder:font-semibold text-black placeholder-black placeholder:text-xl focus:outline-none font-semibold text-xl w-full py-2 placeholder:tracking-wider	'
          />
        </div>
        <div className='relative max-h-full'>
          <div>
            <ReactQuill
              value={content}
              onChange={inputChange}
              modules={modules}
              formats={formats}
              ref={editorRef}
            />
          </div>
          {content !== '' && (
            <div className='add_btn'>
              <Popover className='relative'>
                <Popover.Button className='btn'>
                  <div>
                    <FaPlus size={12} />
                  </div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute left-48 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-sm'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='bg-gray-50 p-4'>
                        <h3 className='text-sm'>Embeds</h3>
                      </div>
                      <div className='relative grid bg-white lg:grid-cols-1'>
                        {solutions.map(({ icon, value, name, description }) => (
                          <div
                            key={name}
                            className='flex items-start rounded-lg transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 p-4'
                            onClick={() => openModal(value)}
                          >
                            <div className=''>{icon}</div>
                            <div className='ml-4'>
                              <p className='text-sm font-medium text-gray-900'>
                                {name}
                              </p>
                              <p className='text-xs text-gray-400'>
                                {description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          )}
        </div>
      </div>
      {choice === 'picture' && (
        <UploadPicture
          closeModal={closeModal}
          handleImageUpload={handleImageUpload}
          insertImage={insertImage}
        />
      )}
    </>
  );
}

export default App;
