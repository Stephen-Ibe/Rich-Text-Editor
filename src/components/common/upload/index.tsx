import React from 'react';
import { Uploader } from 'rsuite';

type Props = {
  action?: string;
  handleFileChange(file: any): void;
};

const Upload = ({ action = '', handleFileChange }: Props) => {
  return (
    <Uploader
      action={action}
      draggable
      accept='image/png, image/jpeg'
      fileListVisible={false}
      onChange={(fileList:any) => handleFileChange(fileList)}
    >
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
