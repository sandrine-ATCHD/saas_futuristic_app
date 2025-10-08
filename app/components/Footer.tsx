import React from 'react'

const Footer = () => {
  return (
  
        <footer className="bg-[#0b0121] text-white py-10 px-6 sm:px-12 lg:px-24 s">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {/* Contact */}
    <div>
      <h3 className="text-lg font-medium mb-4">Contact</h3>
      <ul className="space-y-2 text-sm opacity-90 font-extralight">
        <p>Work inquires: work@vaultflow.com</p>
        <p>PR and speaking: press@vaultflow.com</p>
        <p>New business: newbusiness@vaultflow.com</p>
        </ul>

        <h3 className='pt-8 text-lg font-medium mb-4 '>Careers</h3>
        <p className='space-y-2 text-sm opacity-90 font-extralight'>Careers@vaultflow.com</p>



        <p className='text-[12px] opacity-90 font-thin pt-12'>© 2023 Vaultflow. All Rights Reserved.</p>
    </div>

    {/* Address */}
    <div>
      <h3 className="text-lg font-medium mb-4">Address</h3>
      <p className="space-y-2 text-sm opacity-90 font-extralight">
        123 Avenue de la République<br />
        Cotonou, Bénin
      </p>
    </div>

    {/* Social */}
    <div>
     
    </div>

  </div>

  
</footer>

       
  )
}

export default Footer