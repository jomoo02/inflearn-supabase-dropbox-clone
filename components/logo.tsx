'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/images/dropbox_icon.webp"
        alt="Mini Dropbox Logo"
        width={32}
        height={30}
        style={{ width: 32, height: 30 }}
        priority
      />
      <span className="text-xl font-bold">Minibox</span>
    </div>
  );
}
