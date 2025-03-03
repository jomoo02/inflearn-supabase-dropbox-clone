'use client';
import Image from 'next/image';
import { IconButton } from '@material-tailwind/react';

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      <div>
        <Image
          src="/images/dropbox_icon.webp"
          alt="Dropbox Logo"
          width={30}
          height={30}
          className="!w-full !h-auto rounded-2xl"
        />
      </div>
      <div>file-name.jpeg</div>
      <div className="absolute top-4 right-4">
        <IconButton onClick={() => {}} color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
