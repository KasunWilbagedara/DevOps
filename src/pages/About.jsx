import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="mx-4 sm:mx-10 md:mx-16">

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to ShopEase, your ultimate online shopping destination. We bring you the best products from trusted brands with just a few clicks, ensuring a seamless shopping experience.</p>
          <p>At ShopEase, we prioritize customer satisfaction. Our platform is designed to make browsing, selecting, and purchasing products fast, safe, and enjoyable. From electronics to fashion, we have everything you need.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to make online shopping simple and accessible to everyone. We aim to provide quality products, competitive prices, and exceptional customer service to make your shopping experience unforgettable.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>FAST DELIVERY:</b>
          <p>Receive your products quickly with our reliable shipping partners.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>QUALITY PRODUCTS:</b>
          <p>We source only the best products to ensure customer satisfaction.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CUSTOMER SUPPORT:</b>
          <p>Our support team is always ready to assist you with your needs.</p>
        </div>
      </div>

    </div>
  )
}

export default About

