'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function Footer() {
  return (
    <>
      <div className="mt-20">
        <div className="text-center">
          {/* Light Mode Logo */}
          <Image
            src={assets.logo}
            alt="logo"
            className="w-36 mx-auto mb-2 block dark:hidden"
          />

          {/* Dark Mode Logo */}
          <Image
            src={assets.logo_dark}
            alt="logo"
            className="w-36 mx-auto mb-2 hidden dark:block"
          />

          <div className="w-max flex items-center gap-2 mx-auto mt-2">
            <Image
              src={assets.mail_icon}
              alt="mail"
              className="w-6 block dark:hidden"
            />

            <Image
              src={assets.mail_icon_dark}
              alt="mail"
              className="w-6 hidden dark:block"
            />

            <span className="dark:text-white">
              jgowthaman56@gmail.com
            </span>
          </div>
        </div>

        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-600 mx-[10%] mt-12 py-6">
          <p className="dark:text-gray-300">
            © 2026 Gowthaman. All rights reserved.
          </p>

          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a
                href="https://github.com/jggowthaman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 dark:text-gray-300"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/gowthaman-j-06b619293"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 dark:text-gray-300"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/gowtham_jg03/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 dark:text-gray-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}