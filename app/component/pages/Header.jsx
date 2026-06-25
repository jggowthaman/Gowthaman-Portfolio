'use client';

import Image from 'next/image';
import { assets } from '@/assets/assets';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [isscroll, setisscroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#top' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setisscroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

 const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:opacity-20">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full"
        />
      </div>

      <header
        className={`fixed top-0 right-0 w-full px-5 lg:px-16 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
        ${
          isscroll
            ? 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm'
            : ''
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 h-auto cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 rounded-full px-10 py-3
          ${
            isscroll
              ? ''
              : 'bg-white/70 dark:bg-gray-800 shadow-sm'
          }`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-Ovo text-gray-800 dark:text-white hover:text-rose-500 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Button */}
          <button onClick={() => setDarkMode(!darkMode)}>
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme"
              className="w-6 cursor-pointer transition-transform duration-300"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 dark:border-gray-400 rounded-full font-Ovo text-gray-800 dark:text-white"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          {/* Hamburger */}
          <button
            className="block md:hidden"
            onClick={() =>
              setIsMenuOpen(true)
            }
          >
            <Image
              src={assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-900 z-50 px-10 py-20 transition-transform duration-500 md:hidden
          ${
            isMenuOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }`}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6"
            onClick={() =>
              setIsMenuOpen(false)
            }
          >
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5"
            />
          </button>

          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-Ovo text-gray-800 dark:text-white"
                  onClick={() =>
                    setIsMenuOpen(false)
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}