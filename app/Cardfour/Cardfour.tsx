
import React from 'react'
import Image from 'next/image'

const Cardfour = () => {
  return (
    <div className='bg-white '>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

          {/* Text Content */}
         

          {/* Image */}
          <div className="relative w-full h-[24rem] md:h-[32rem] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/imges/img13.jpg"
              alt="Description"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
            LOVE WHAT YOU DO...REALLY!
            </h2>
            <div className="space-y-2 mb-4 text-[#434343] text-base sm:text-lg">
  <p>✅ Build a business around your schedule</p>
  <p>✅ Offer cutting edge products that everyone needs</p>
  <p>✅ No inventory required; simply share your website</p>
</div>

            <button className='bg-[#9837AE] hover:bg-purple-800 transition font-bold text-white py-2 px-6 rounded-md text-sm sm:text-base lg:text-lg'>
              Buy all products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardfour
