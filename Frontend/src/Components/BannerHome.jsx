import React from 'react'
import { bannerStyles } from '../assets/dummyStyles'
import { FiTruck } from 'react-icons/fi'

const BannerHome = ({onSearch}) => {
  return (
    <div className='relative overflow-hidden pt-16'>
        {/* BackGround Gradient */}
        <div className={bannerStyles.backgroundGradient}></div>
        {/* Decorative circles */}
        <div className="hidden sm:block absolute top-6 left-6 w-20 h-20 rounded-full bg-teal-100 opacity-30"></div>
        <div className="hidden md:block absolute bottom-12 right-28 w-32 h-32 rounded-full bg-seafoam-200 opacity-30"></div>
        <div className="hidden lg:block absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-mint-200 opacity-30"></div>

        <div className=' relative z-10 mt-8 sm:mt-10 lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center'>
                {/* LEFT CONTENT */}
                <div className='text-center md:text-left'>
                    <div className={bannerStyles.tag}>
                        <span className='flex items-center text-sm sm:text-base'>
                           <FiTruck className='mr-2'/> Free Delivery on order over ₹500
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BannerHome