import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import "../../globals.css"

export default function About() {
  return (
    <>
    <div id='about' className='w-full px-[-12%] py-8 scroll-mt-20 mt-[60px]  sm:mt-20 '>
        <h4
        className='text-center mb-2 text-lg'>Introduction</h4>
        <h2
        className='text-center text-5xl '>About Me</h2>

        <div className='flex  flex-col lg:flex-row items-center gap-10 mx-40 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p 
                className='mb-10 max-w-2xl mt-0'>I'm Gowthaman, a passionate MERN Stack Developer and BCA student dedicated to building responsive and user-friendly web applications. I enjoy solving problems, learning new technologies, and creating innovative digital experiences with clean and efficient code.</p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description},index)=>(
                        // <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--lightHover)]'
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-purple-100/50 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]'
                        key={index}>
                            <Image src={icon} alt='icon' className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700 ' >{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>

                <h3 className='my-6 text-gray-700 '>Tools I Use</h3>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <li className='flex items-center justify-center w-10 sm:w-12 aspect-square border borde-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                        key={index}>
                            <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    </div>
    </>
  )
}
