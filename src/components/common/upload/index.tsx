import React from 'react';
import { Uploader } from 'rsuite';

type Props = {
  action: string;
};

const Upload = ({ action }: Props) => {
  return (
    <Uploader action={action} draggable>
      <div
        style={{
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>Click or Drag files to this area to upload</span>
      </div>
    </Uploader>
  );
};

export default Upload;
