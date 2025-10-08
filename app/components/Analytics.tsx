import React from 'react'
import Button from './Buttons'

const Analytics = () => {
  return (
    <section className='bg-[#0b0121] text-center py-12 px-4 sm:py-16 md:py-20'>
      <div className='rounded-2xl p-6 blur-effect shadow-lg custom-shadow w-full max-w-[90%] mx-auto sm:rounded-3xl sm:p-8 md:p-12 lg:p-16 md:max-w-2xl lg:max-w-4xl xl:max-w-[1100px] xl:h-[410px]'>
        <h2 className='text-2xl font-bold text-white text-center sm:text-3xl md:text-4xl lg:text-5xl'>
          Our powerful analytics <br className='hidden md:block' /> provides invaluable insights.
        </h2>
        <p className='text-white text-xs leading-relaxed mt-4 text-center mb-6 sm:text-sm sm:mt-6 sm:mb-7 md:mt-8 md:mb-8'>
          Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement.
        </p>
        <Button
          label="Download the app"
          bgColor="bg-none"
          borderColor="border-white"
        />
      </div>
    </section>
  )
}

export default Analytics