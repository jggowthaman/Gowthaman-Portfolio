import { assets, project } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="w-full px-5 sm:px-[10%] py-6 sm:py-10 scroll-mt-20"
      >
        <h4 className="text-center mb-2 text-lg">
          My Latest Work
        </h4>

        <h2 className="text-center text-5xl">
          My Projects
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          These projects showcase my passion for full-stack development
          and my ability to build responsive, scalable, and user-friendly
          web applications. Each project reflects my continuous learning
          journey and hands-on experience with modern web technologies.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
          {project.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group block"
              style={{
                backgroundImage: `url(${project.bgImage})`,
              }}
            >
              <div className="bg-white dark:bg-[#1f0a33] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold dark:text-white">
                    {project.title}
                  </h2>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                <div className="border border-black dark:border-white rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition">
                  {/* Light Mode Icon */}
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5 block dark:hidden"
                  />

                  {/* Dark Mode Icon */}
                  <Image
                    src={assets.send_icon_dark}
                    alt="send icon"
                    className="w-5 hidden dark:block"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Show More Button */}
        <a
          href="#contact"
          className="w-max flex items-center justify-center gap-2 text-black dark:text-white border border-gray-700 dark:border-gray-500 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--lightHover)] dark:hover:bg-[#310056] duration-500"
        >
          Show More

          {/* Light Mode Arrow */}
          <Image
            src={assets.right_arrow_bold}
            alt="right arrow"
            width={16}
            height={16}
            className="shrink-0 block dark:hidden"
          />

          {/* Dark Mode Arrow */}
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            width={16}
            height={16}
            className="shrink-0 hidden dark:block"
          />
        </a>
      </div>
    </>
  );
}