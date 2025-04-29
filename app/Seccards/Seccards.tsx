import React from 'react'
import Image from 'next/image'
const Seccards = () => {
  return (
//     <div className='bg-white'>
//       <div className='container'>
// <div className='w-full mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 mb-12'>
// <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
//   <Image
//     src="/imges/img10.jpg"
//     alt="Description"
//     fill
//     className="object-cover"
//   />
//   <div className='absoult inset-0 bg-black/30 '></div>
// <div className='relative z-20 sm:py-20 py-8 px-8 text-white'>
// <span className='inline-block bg-purple-200 text-purple-700 lg:text-lg font-bold py-1 px-4 rounded-md '>New</span>
// </div>
//   <h2 className='sm:text-2xl lg:text-3xl text-1xl font-bold mb-4'>Introducing Ambrosia Global</h2>
//   <button className='bg-[#9837AE] hover:bg-purple-800 transition lg:text-lg text-white'>Buy now! </button>
// </div>
// </div>
//       </div>
//     </div>



<div className='bg-white'>
  <div className='container'>
    <div className='w-full mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 mb-12'>
      
      <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/imges/img10.jpg"
          alt="Description"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40 z-10'></div>

        {/* Content on Image */}
        <div className='absolute inset-0 z-20 flex flex-col justify-center items-start px-6'>
          <span className='inline-block bg-purple-200 text-purple-700 text-sm lg:text-lg font-bold py-1 px-4 rounded-md mb-3'>
            New
          </span>
          <h2 className='text-white sm:text-2xl lg:text-3xl text-xl font-bold mb-4'>
            Introducing Ambrosia Global
          </h2>
          <button className='bg-[#9837AE] hover:bg-purple-800 transition font-bold text-white py-1 px-14 rounded-md text-sm lg:text-lg'>
            Buy now!
          </button>
        </div>
      </div>

      <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/imges/img12.jpg"
          alt="Description"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40 z-10'></div>

        {/* Content on Image */}
        <div className='absolute inset-0 z-20 flex flex-col justify-center items-start px-6'>
          <span className='inline-block bg-white text-[#4ACAC6] text-sm lg:text-lg font-bold py-1 px-4 rounded-md mb-3'>
          Family Pack Edition
          </span>
          <h2 className='text-white sm:text-2xl lg:text-3xl text-xl font-bold mb-4'>
            Ambrosia Global
          </h2>
          <button className='bg-[#9837AE] hover:bg-purple-800 transition text-white py-1 px-14 rounded-md text-sm lg:text-lg font-bold'>
            Buy now!
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

  );
}

export default Seccards
