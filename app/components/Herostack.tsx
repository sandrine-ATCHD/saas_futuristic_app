import React from 'react'
import style from "./Hero.module.css";
import Image from 'next/image';
import Button from './Buttons';

const Herostack = () => {
  return (
        <section className={style.hero}>
        <div className="flex flex-col items-center justify-center pt-40 text-center">
          {/* Badge annonce */}
          <div className="rounded-4xl border border-white p-2 w-100 flex justify-center">
            <p className="text-white text-base font-extralight">
              We just raised $20M in Series B. Learn more
            </p>
          </div>
      
          {/* Titre */}
          <h1 className="text-7xl font-medium text-[#ECECEC] mt-8" >
            Modern analytics <br /> for the modern world
          </h1>
      
          {/* Description */}
          <p className="text-white text-base font-extralight mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse varius enim in eros elementum tristique.
          </p>
      
          {/* Boutons */}
          <div className="flex gap-8 mt-8">
            <Button
              label="Download the app"
              bgColor="bg-white"
              borderColor="border-white"
              textColor="text-black"
            />
            <Button
              label="Talk to an expert"
              bgColor="bg-none"
              borderColor="border-white"
            />
          </div>
      
          {/* Image */}
          <Image
            className="mt-15 mb-10 rounded-3xl custom-shadow "
            src="/images/imagestatistic.png"
            alt="Image de statistic"
            height={800}
            width={800}
          />
        </div>
      </section>
      
  )
}

export default Herostack