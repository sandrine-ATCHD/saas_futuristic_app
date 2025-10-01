import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className='bg-[#0b0121] pt-18  text-center'>
        <div>
            <h2 className='text-5xl font-medium'>Features that <br /> work for your <br />future.</h2>
        </div>
        <p className='font-extralight text-sm mt-8 tracking-wide'>Check out our amazing features and experience the <br /> power of Vaultflow for yourself.</p>

        <div className='flex gap-6'>
        <FeatureCard icon={undefined} title={"Analytics Dashboard"} description={"Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."} linkText={"View dashboard"} height={250} width={372}   linkHref={""}/>
        <FeatureCard icon={undefined} title={"Digital Credit Tokens"} description={"Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."} linkText={"View tokens"} height={200} width={200} linkHref={""}/>
        </div>
        <div>
        <FeatureCard icon={undefined} title={"Code collaboration"} description={"Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable."} linkText={"View code collaboration"} height={500} width={500} linkHref={""}/>
        </div>

    </section>
  )
}

export default Features