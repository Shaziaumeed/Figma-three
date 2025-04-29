

import React from 'react'
import Image from 'next/image'

const Cardtwo = () => {
  return (
    <div className='bg-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

          {/* Image Section */}
          <div className="relative w-full h-[24rem] md:h-[32rem] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/imges/img11.jpg"
              alt="Description"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <span className='text-[#9837AE] text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase mb-2 inline-block'>
              About Us
            </span>

            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-snug'>
              There is no need for hundreds of products…
            </h2>

            <p className='text-[#434343] text-base sm:text-lg md:text-xl leading-relaxed'>
              One capsule, twice a day will help start you on the road to optimal health.
              The synergistic blend of potent ingredients in our Ambrosia Cellular Rejuvenation Complex
              are designed to activate the cells’ ability to produce more energy, reduce oxidative stress,
              and promote cellular repair and restoration.
            </p>

            <button className='bg-[#9837AE] hover:bg-purple-800 transition font-bold text-white py-2 px-6 rounded-md text-sm sm:text-base lg:text-lg mt-4'>
              Buy all products
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cardtwo
