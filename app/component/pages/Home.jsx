'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function Home() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-0 mt-[180px] sm:mt-10">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32"
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I'm Gowthaman J
        <Image
          src={assets.hand_icon}
          alt="hand"
          className="w-6"
        />
      </h3>

      <h1 className="text-2xl sm:text-2xl lg:text-[66px]">
        MERN Stack Developer.
      </h1>

      <p className="max-w-2xl mx-auto">
        I'm a passionate MERN Stack Developer who builds modern,
        responsive, and user-friendly web applications using
        MongoDB, Express.js, React.js, and Node.js.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4"
          />
        </a>

        <a
          href="/Gowthaman Resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          My Resume

          {/* Light Mode Icon */}
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4 block dark:hidden"
          />

          {/* Dark Mode Icon */}
          <Image
            src={assets.download_dark}
            alt="download"
            className="w-4 hidden dark:block"
          />
        </a>
      </div>
    </div>
  );
}