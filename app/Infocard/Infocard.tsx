import React from 'react'

const InfoCard = () => {
  return (
    <div className='container'>
    <h2 className=" font-bold md:text-[45px] md:leading-[55px] text-[30px] leading-[40px] tracking-normal mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
    <div className='  grid md:grid-cols-3  gap-9 mt-7 '>
    <div className="  bg-gray-50 rounded-xl shadow-md p-6 max-w-md mx-auto  ">
      {/* Top section: Avatar + Headings */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-[#9837AE] rounded-full" />
        <div>
          <h3 className="font-semibold text-gray-900">Lorem ipsum</h3>
          <p className="text-gray-600 text-sm">Lorem Ipsum Dolor Sit</p>
        </div>
      </div>
      {/* Paragraph */}
      <p className= "  text-gray-700 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.
      </p>
      </div>
      <div className=" bg-gray-50 rounded-xl shadow-md p-6 max-w-md mx-auto">
       {/* Top section: Avatar + Headings */}
       <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-[#9837AE] rounded-full" />
        <div>
          <h3 className="font-semibold text-gray-900">Lorem ipsum</h3>
          <p className="text-gray-600 text-sm">Lorem Ipsum Dolor Sit</p>
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-gray-700 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.
      </p>
      </div>
      <div className="bg-gray-50 rounded-xl shadow-md p-6 max-w-md mx-auto ">
       {/* Top section: Avatar + Headings */}
       <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-[#9837AE] rounded-full" />
        <div>
          <h3 className="font-semibold text-gray-900">Lorem ipsum</h3>
          <p className="text-gray-600 text-sm">Lorem Ipsum Dolor Sit</p>
        </div>
      </div>
      {/* Paragraph */}
      <p className="text-gray-700 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.
      </p>
      </div>
   </div>
   </div>
  )
}

export default InfoCard;

