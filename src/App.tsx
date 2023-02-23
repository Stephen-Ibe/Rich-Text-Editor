import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { FaPlus } from 'react-icons/fa';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image'],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
  };

  const formats = [
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

  const editorRef = useRef<ReactQuill>(null);

  useEffect(() => {
    editorRef?.current?.focus();
  }, []);

  return (
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
            onChange={setContent}
            modules={modules}
            formats={formats}
            ref={editorRef}
            className=''
          />
        </div>
        <div className='add_btn'>
          <FaPlus size={12} />
        </div>
      </div>
    </div>
  );
}

export default App;
