import React, { useState } from 'react';
import ReactQuill from 'react-quill';
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

  return (
    <div className='container mx-auto'>
      <div className='my-4'>
        <input
          type='text'
          placeholder='This is the title'
          className='my-4 placeholder:font-semibold text-black placeholder-black placeholder:text-xl focus:outline-none font-semibold text-xl border w-full py-2 placeholder:tracking-wider	'
        />
      </div>
      <div>
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          className='border-0 h-[80%]'
        />
      </div>
    </div>
  );
}

export default App;
