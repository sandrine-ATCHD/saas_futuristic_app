'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Buttons'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-[#0B0121] relative z-50'>
      <div className='flex h-16 justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20'>
        
        {/* Logo */}
        <Link href="/" className='text-white gap-2 flex items-center hover:opacity-80 transition-opacity'>
          <Image
            src="/images/logo.png"
            alt="Logo de mon site"
            height={23}
            width={23}
          />
          <p className='font-bold text-xl sm:text-2xl'>Vaultflow</p>
        </Link>

        {/* Bouton Hamburger - Visible uniquement sur mobile/tablet */}
        <button
          onClick={toggleMenu}
          className='lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors'
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {isMenuOpen ? (
              // Icône X (fermer)
              <path d='M6 18L18 6M6 6l12 12' />
            ) : (
              // Icône hamburger (3 lignes)
              <path d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>

        {/* Navigation Desktop - Visible uniquement sur grand écran */}
        <nav className='hidden lg:block'>
          <ul className='flex text-white items-center gap-8 xl:gap-12'>
            <li>
              <Link href="#features" className='hover:text-purple-300 transition-colors'>
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className='hover:text-purple-300 transition-colors'>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#about" className='hover:text-purple-300 transition-colors'>
                About us
              </Link>
            </li>
            <li className='flex gap-4 xl:gap-8 ml-4'>
              <Button 
                label='Download the app' 
                bgColor='bg-white' 
                textColor='text-black' 
              />
              <Button 
                label='Talk to an expert' 
                bgColor='bg-none'
                borderColor='border-white'
              />
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu Mobile/Tablet - Slide from top */}
      <nav
        className={`lg:hidden absolute top-16 left-0 w-full bg-[#0B0121] border-t border-white/10 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <ul className='flex flex-col text-white p-6 gap-6'>
          <li>
            <Link 
              href="#features" 
              className='block py-2 hover:text-purple-300 transition-colors text-lg'
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link 
              href="#pricing" 
              className='block py-2 hover:text-purple-300 transition-colors text-lg'
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link 
              href="#about" 
              className='block py-2 hover:text-purple-300 transition-colors text-lg'
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
          </li>
          
          {/* Boutons en mobile */}
          <li className='flex flex-col gap-4 pt-4 border-t border-white/10'>
            <Button 
              label='Download the app' 
              bgColor='bg-white' 
              textColor='text-black' 
            />
            <Button 
              label='Talk to an expert' 
              bgColor='bg-none'
              borderColor='border-white'
            />
          </li>
        </ul>
      </nav>

      {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
      {isMenuOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black/50 z-[-1] top-16'
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header