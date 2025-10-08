import React from 'react';
import Image from 'next/image'

const Logo = () => {
  return (
    <section className='logo bg-[#0b0121] py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20'>
      <div className='max-w-7xl mx-auto'>
        
        <p className='text-center text-xs text-white font-thin mb-6 sm:text-sm sm:mb-8 md:text-[15px] md:mb-10 lg:mb-12'>
          Trusted by teams at over 1,000 of the world's leading organizations
        </p>

        {/* Logos Container */}
        <div className='overflow-x-auto pb-4 sm:overflow-visible sm:pb-0'>
          <ul className='flex justify-center items-center gap-6 min-w-max sm:min-w-0 sm:gap-8 sm:flex-wrap md:gap-10 lg:gap-12'>
            
            <li className='flex-shrink-0'>
              <Image 
                src="/images/Logo1.svg"
                alt="Logo partenaire 1"
                height={20}
                width={62}
                className='h-auto w-12 sm:w-14 md:w-[62px] opacity-80 hover:opacity-100 transition-opacity'
              />
            </li>

            <li className='flex-shrink-0'>
              <Image 
                src="/images/zendes.svg"
                alt="Logo Zendesk"
                height={17}
                width={87}
                className='h-auto w-16 sm:w-20 md:w-[87px] opacity-80 hover:opacity-100 transition-opacity'
              />
            </li>

            <li className='flex-shrink-0'>
              <Image 
                src="/images/Logo2.svg"
                alt="Logo partenaire 2"
                height={21}
                width={67}
                className='h-auto w-14 sm:w-16 md:w-[67px] opacity-80 hover:opacity-100 transition-opacity'
              />
            </li>

            <li className='flex-shrink-0'>
              <Image 
                src="/images/lattice.svg"
                alt="Logo Lattice"
                height={22.8}
                width={120}
                className='h-auto w-20 sm:w-24 md:w-28 lg:w-[120px] opacity-80 hover:opacity-100 transition-opacity'
              />
            </li>

            <li className='flex-shrink-0'>
              <Image 
                src="/images/Logo4.svg"
                alt="Logo partenaire 4"
                height={13}
                width={143}
                className='h-auto w-24 sm:w-28 md:w-32 lg:w-[143px] opacity-80 hover:opacity-100 transition-opacity'
              />
            </li>

            <li className='flex-shrink-0'>
              <Image 
                src="/images/Logo5.svg"
                alt="Logo partenaire 5"
                height={24.27}
                width={80}
                className='h-auto w-16 sm:w-18 md:w-20 lg:w-[80px] opacity-80 hover:opacity-100 transition-opacity'
              />
            </li>

            <li className='flex-shrink-0'>
              <Image 
                src="/images/ted.svg"
                alt="Logo TED"
                height={20}
                width={54.29}
                className='h-auto w-12 sm:w-14 md:w-[54px] opacity-80 hover:opacity-100 transition-opacity'
              />
            </li>

          </ul>
        </div>

      </div>
    </section>
  )
}

export default Logo