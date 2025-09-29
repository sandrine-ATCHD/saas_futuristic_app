import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Buttons'

const Header = () => {
  return (
    <header className='bg-[#0B0121] p-4 flex'>
      <div className='text-white'> 
        <Image></Image>
        <p>Vaultflow</p>
      </div>
       <nav>
        <ul className='flex gap-4 text-white'>
            <li>Features</li>
            <li>Pricing</li>
            <li>About us</li>
            <Button label='Download the app' bgColor='bg-white' textColor='text-black' />
            <Button label='Talk to an expert' bgColor='bg-none'borderColor='border-white'/>
            
        </ul>
       </nav>
    </header>
  )
}

export default Header