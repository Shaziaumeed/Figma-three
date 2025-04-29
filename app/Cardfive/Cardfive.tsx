
import React from 'react'
import Image from 'next/image'

const Cardfive = () => {
  return (
    <div className='bg-white '>
      <div className='container mx-auto px-4'>
      <div className='flex flex-col-reverse md:flex-row gap-10 items-center'>
          {/* Text Content */}
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
            IF HEALTH, TIME AND MONEY WERE NOT AN ISSUE...
            </h2>
            <div className="space-y-2 mb-4 text-[#434343] text-base sm:text-lg">
  <p>✅ With whom would you spend your time with?</p>
  <p>✅Where are some of the places you would visit?</p>
  <p>✅ What special moments would you create for your loved ones?</p>
</div>

            <button className='bg-[#9837AE] hover:bg-purple-800 transition font-bold text-white py-2 px-6 rounded-md text-sm sm:text-base lg:text-lg'>
              Buy all products
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full h-[24rem] md:h-[32rem] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/imges/img13.jpg"
              alt="Description"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cardfive
