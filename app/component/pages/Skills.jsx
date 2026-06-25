import { skills } from '@/assets/assets'
import React from 'react'

export default function Skills() {
  return (
   <>
   <div id="Skills" className='w-full px-5 sm:px-[10%] py-6 sm:py-10 scroll-mt-20'>

        <h2
        className='text-center text-5xl '>Skills </h2>

        <p className='max-w-3xl mx-auto mt-5 px-4 text-center sm:px-[5%]'>As a passionate BCA student and aspiring MERN Stack Developer, I continuously learn and apply modern technologies to build real-world solutions.Then creating responsive, scalable, and user-friendly full-stack web applications using modern technologies while continuously learning and improving my development skills.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-full mt-10 px-4 sm:px-[10%]">
                        {skills.map(({ title, tools},index)=>(
                            // <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--lightHover)]'
                            <div className='border-[0.5px] border-black-400 rounded-xl p-6 cursor-pointer hover:bg-purple-100/50 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]'
                            key={index}>
                                <h3 className='my-4 font-semibold text-gray-700 ' >{title}</h3>
                                <p className='text-gray-600 text-sm'>{tools}</p>
                            </div>
                        ))}
                    </div>


   </div>
   </>
  )
}
