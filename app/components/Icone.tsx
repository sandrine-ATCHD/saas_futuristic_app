import React from 'react'
import Image from 'next/image'

interface IconeProps {
  src: string;
  shadowColor?: string;
}

const Icone: React.FC<IconeProps> = ({ src, shadowColor }) => {
  return (
    <div
      className="icone-wrapper "
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: ` 0px 0px 36.45px 0px  ${shadowColor}`,

      }}
    >
      <Image src={src} width={50} height={50}  alt="icone" />
    </div>
  )
}

export default Icone
