import React, { useState, useRef } from 'react';
import { Button, Uploader } from 'rsuite';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MyApp() {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selection, setSelection] = useState({ index: 0, length: 0 });
  const editorRef = useRef<ReactQuill | null>(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['clean'],
      ],
    },
  };

  const handleChange = (value: string, editor: any) => {
    setContent(value);
    setSelection(editor.getSelection());
  };

  const insertImage = () => {
    const editor = editorRef.current?.getEditor();
    if (editor) {
      const range = selection.index + selection.length;
      editor.insertEmbed(range, 'image', imageUrl, 'user');
      editor.setSelection(range + 1, 0);
    }
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

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleImageUpload} />
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        ref={editorRef}
      />
      <Button onClick={insertImage}>Insert Image</Button>
    </div>
  );
}

export default MyApp;
