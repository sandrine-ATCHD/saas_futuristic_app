import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className='bg-[#0b0121] pt-18  text-center '>
        <div>
            <h2 className='text-5xl font-medium'>Features that <br /> work for your <br />future.</h2>
        </div>
        <p className='font-extralight text-sm mt-8 tracking-wide'>Check out our amazing features and experience the <br /> power of Vaultflow for yourself.</p>
<div className=' mr-30 ml-30 mt-30'>
        <div className='flex gap-6 '>
        <FeatureCard icon={undefined} iconSrc={"/images/analytic.png"}  iconShadowColor="rgba(89, 29, 221, 0.75)" title={"Analytics Dashboard"} description={"Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."} linkText={"View dashboard"} height={250} width={372}   linkHref={""}/>
        <FeatureCard icon={undefined} iconSrc={"/images/digital.png"} title={"Digital Credit Tokens"} description={"Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."} linkText={"View tokens"}  iconShadowColor="rgba(149, 37, 201, 0.75)" height={200} width={200} linkHref={""}/>
        </div>
        <div className='mt-16'>
        <FeatureCard 
        icon={undefined} 
        iconSrc={"/images/code.png"} 
        title={"Code collaboration"} 
        description={"Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable."}  
        iconShadowColor="rgba(201, 37, 171, 0.75)" 
        linkText={"View code collaboration"} 
        height={500} 
        width={500} 
        linkHref={""}
        imageSrc="/images/imagecode.png"  
        imageAlt="Code collaboration illustration" />

        </div>
        </div>

    </section>
  )
}

export default Features