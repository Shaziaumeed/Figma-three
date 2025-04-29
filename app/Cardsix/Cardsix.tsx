import React from 'react'

const Cardsix = () => {
  return (
    <div className="bg-[#9837AE] bg-opacity-100 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left">
        
        {/* Left Text */}
        <div className="mb-4 lg:mb-0">
          <h2 className="text-white lg:text-5xl sm:text-4xl font-bold mb-2">OUR PURPOSE...</h2>
          <p className="text-white text-base sm:text-lg">Help extend human longevity with 'Optimal Health'.</p>
        </div>
        
        {/* Right Button */}
        <div className="mt-6 md:mt-4 lg:mt-0">
          <button className="text-white border border-white hover:bg-white hover:text-[#9837AE] font-bold px-9 py-3 rounded transition duration-300">
            Buy All Products
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Cardsix;
