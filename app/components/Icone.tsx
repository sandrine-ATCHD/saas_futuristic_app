import React from 'react'
import Image from 'next/image'

interface IconeProps {
  src: string;
  shadowColor?: string;
}

const Icone: React.FC<IconeProps> = ({ src, shadowColor }) => {
  return (
    <div
      className="rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
      style={{
        boxShadow: shadowColor ? `0px 0px 36.45px 0px ${shadowColor}` : 'none',
      }}
    >
      <Image 
        src={src} 
        width={50} 
        height={50} 
        alt="icone" 
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default Icone