import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className='bg-[#0b0121] py-12 px-4 text-center sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 '>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div>
          <h2 className='text-3xl font-medium leading-tight sm:text-4xl md:text-5xl'>
            Features that <br className='hidden sm:block' /> work for your <br className='hidden sm:block' /> future.
          </h2>
        </div>
        
        <p className='font-extralight text-xs mt-4 tracking-wide sm:text-sm sm:mt-6 md:mt-8'>
          Check out our amazing features and experience the power of Vaultflow for yourself.
        </p>

        {/* Cards Container */}
        <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
          
          {/* Première ligne - 2 cards côte à côte sur desktop */}
          <div className='flex flex-col gap-6 lg:flex-row'>
            <FeatureCard 
              icon={undefined} 
              iconSrc={"/images/analytic.png"} 
              iconShadowColor="rgba(89, 29, 221, 0.75)" 
              title={"Analytics Dashboard"} 
              description={"Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."} 
              linkText={"View dashboard"} 
              height={250} 
              width={372} 
              linkHref={""}
            />
            
            <FeatureCard 
              icon={undefined} 
              iconSrc={"/images/digital.png"} 
              title={"Digital Credit Tokens"} 
              description={"Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."} 
              linkText={"View tokens"} 
              iconShadowColor="rgba(149, 37, 201, 0.75)" 
              height={200} 
              width={200} 
              linkHref={""}
            />
          </div>

          {/* Deuxième ligne - Card large avec image */}
          <div className='mt-6 lg:mt-12'>
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
              imageAlt="Code collaboration illustration"
              variant="large-image"
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Features