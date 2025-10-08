import React from 'react'
import Button from './Buttons'

const Analytics = () => {
  return (
    <section className='bg-[#0b0121] text-center pt-20  '>
    <div className='rounded-3xl p-16 blur-effect shadow-lg custom-shadow w-[1100px] h-[410px] m-auto'> 
        <h2 className='text-5xl font-bold text-white text-center'>
        Our powerful analytics <br /> provides invaluable insights.
        </h2>
        <p className='text-white text-sm leading-relaxed mt-8 text-center mb-8'>
        Unlock the power of data with our cutting-edge analytics product. Get instant <br /> insights with our user-friendly Analytics Dashboard, and take advantage of our <br /> innovative digital credit tokens to reward your customers and incentivize <br /> engagement. 
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