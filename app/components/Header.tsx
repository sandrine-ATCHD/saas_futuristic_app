
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Buttons'


const Header = () => {
  return (
    <header className='bg-[#0B0121]  flex h-16 justify-between items-center px-20'>
      <div className='text-white gap-2 flex items-center  '> 
        <Image 
        src="/images/logo.png"   // chemin relatif depuis /public
        alt="Logo de mon site"
        height={23}
        width={23}/> 


      
        <p className='font-bold text-2xl'>Vaultflow</p>
      </div>
       <nav  >
        <ul className='flex  text-white items-center gap-12 '>
            <li>Features</li>
            <li>Pricing</li>
            <li>About us</li>
            <div className='gap-8 flex'>
            <Button label='Download the app' bgColor='bg-white' textColor='text-black' />
            <Button label='Talk to an expert' bgColor='bg-none'borderColor='border-white'/>
            </div>
        </ul>
       </nav>
    </header>
  )
}

export default Header