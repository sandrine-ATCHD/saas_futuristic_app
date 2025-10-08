import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#0b0121] text-white py-12 px-4 sm:py-16 sm:px-6 md:px-8 lg:py-20 lg:px-12 xl:px-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        
        {/* Contact */}
        <div>
          <h3 className="text-base font-medium mb-3 sm:text-lg sm:mb-4">Contact</h3>
          <div className="space-y-2 text-xs opacity-90 font-thin sm:text-sm">
            <p>Work inquires: work@vaultflow.com</p>
            <p>PR and speaking: press@vaultflow.com</p>
            <p>New business: newbusiness@vaultflow.com</p>
          </div>
          
          <h3 className="pt-6 text-base font-medium mb-3 sm:pt-8 sm:text-lg sm:mb-4">Careers</h3>
          <p className="text-xs opacity-90 font-thin sm:text-sm">Careers@vaultflow.com</p>
          
          <p className="text-[11px] opacity-90 font-thin pt-8 sm:text-[12px] sm:pt-12">
            © 2023 Vaultflow. All Rights Reserved.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-base font-medium mb-3 sm:text-lg sm:mb-4">Address</h3>
          <p className="text-xs opacity-90 font-thin sm:text-sm">
            398 11th Street, Floor 2 <br />
            San Francisco, CA 94103
          </p>
          
          <h3 className="text-base font-medium mb-3 pt-6 sm:text-lg sm:mb-4 sm:pt-8">Social</h3>
          <div className="space-y-2 text-xs opacity-90 font-extralight sm:text-sm">
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Tiktok</p>
          </div>
        </div>

        {/* Logo - Repositionné pour mobile */}
        <div className="flex items-start gap-2 text-white sm:items-center lg:items-end lg:justify-end">
          <Image
            src="/images/logo.png"
            alt="Logo de mon site"
            width={23}
            height={10}
            className="object-contain"
          />
          <p className="font-medium text-lg sm:text-xl">Vaultflow</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer