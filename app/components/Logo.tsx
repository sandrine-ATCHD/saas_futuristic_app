import React from 'react';


import Image from 'next/image'

const Logo = () => {
  return (
   <section className='logo bg-[#0b0121] pt-10'  >
    <p className='text-center text-[15px] text-white font-thin pt-10'>
    Trusted by teams at over 1,000 of the world’s leading organizations
    </p>
    <div>
        <ul className='flex justify-center gap-8 pt-10 pb-3'>
            <Image className=' align-center'
                src="/images/Logo1.svg"   // chemin relatif depuis /public
                alt="Image de statistic"
                height={20}
                width={62}/>

        <Image className=' align-center'
                src="/images/zendes.svg"   // chemin relatif depuis /public
                alt="Image de statistic"
                height={17}
                width={87}/>


        <Image className=' align-center'
                src="/images/Logo2.svg"   // chemin relatif depuis /public
                alt="Image de statistic"
                height={21}
                width={67}/>

        <Image className=' align-center'
                src="/images/lattice.svg"   // chemin relatif depuis /public
                alt="Image de statistic"
                height={22.8}
                width={120}/>

        <Image className='align-center'
                src="/images/Logo4.svg"   // chemin relatif depuis /public
                alt="Image de statistic"
                height={13}
                width={143}/>

        <Image className=' align-center'
                src="/images/Logo5.svg"   // chemin relatif depuis /public
                alt="Image de statistic"
                height={24.27}
                width={80}/>

        <Image className=' align-center'
                src="/images/ted.svg"   // chemin relatif depuis /public
                alt="logo ted"
                height={20}
                width={54.29}/>

         </ul>
     
    </div>
    

   </section>
  )
}

export default Logo