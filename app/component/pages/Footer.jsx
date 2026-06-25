import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

export default function Footer() {
  return (
    <>
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='logo' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto '>
                <Image src={assets.mail_icon} alt='mail' className='w-6'/> jgowthaman56gmail.com 
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2026 Gowthaman. All rights reserved.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/jggowthaman">GitHub</a></li>
                <li><a href="www.linkedin.com/in/gowthaman-j-06b619293 ">Linkdin</a></li>
                <li><a href="https://www.instagram.com/gowtham_jg03/">Instagram</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}
