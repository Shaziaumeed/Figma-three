
// import React from 'react'
// import Image from 'next/image'

// const Cardthree = () => {
//   return (
//     <div className='bg-white'>
//       <div className='container mx-auto p-4'>
//         <div className='flex flex-col-reverse md:flex-row gap-4 sm:gap-6 md:gap-6 lg:gap-10 items-center'>

//           {/* Text Content */}
//           <div className='w-full lg:w-1/2'>
//             <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4'>
//               WHAT IS OPTIMAL HEALTH?
//             </h2>
//             <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-[#434343] text-base sm:text-lg">
//               <p>✅ It's about being vibrant and full of energy...</p>
//               <p>✅ It's about being mentally alert no matter your age</p>
//               <p>✅ It's about being physically fit and active</p>
//             </div>
//             <button className='bg-[#9837AE] hover:bg-purple-800 transition font-bold text-white py-2 px-6 rounded-md text-sm sm:text-base lg:text-lg'>
//               Buy all products
//             </button>
//           </div>

//           {/* Image */}
//           <div className="relative w-full lg:w-1/2 h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden shadow-md">
//             <Image
//               src="/imges/img13.jpg"
//               alt="Description"
//               fill
//               className="object-cover"
//             />e
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cardthree


import React from 'react'
import Image from 'next/image'

const Cardthree = () => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto p-4'>
        <div className='flex flex-col-reverse md:flex-row gap-4 sm:gap-6 md:gap-6 lg:gap-10 items-center'>

          {/* Text Content */}
          <div className='w-full lg:w-1/2'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4'>
              WHAT IS OPTIMAL HEALTH?
            </h2>
            <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-[#434343] text-base sm:text-lg">
              <p>✅ It&apos;s about being vibrant and full of energy...</p>
              <p>✅ It&apos;s about being mentally alert no matter your age</p>
              <p>✅ It&apos;s about being physically fit and active</p>
            </div>
            <button className='bg-[#9837AE] hover:bg-purple-800 transition font-bold text-white py-2 px-6 rounded-md text-sm sm:text-base lg:text-lg'>
              Buy all products
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2 h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden shadow-md">
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

export default Cardthree
