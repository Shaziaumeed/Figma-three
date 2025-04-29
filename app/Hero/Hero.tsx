///////
// import Image from 'next/image';
// export default function Hero() {
//   return (
//     <div className='bg-white '>
//     <div className='container'>
//     <div className=" flex flex-col-reverse lg:flex-row items-center justify-between px-6  ">
//       <div className="lg:w-1/2">
//       <h2 className="text-[#9B37AE] font-inter font-bold md:text-[45px] md:leading-[55px] text-[30px] leading-[40px] tracking-normal">Lorem ipsum dolor sit amet, consectetur adipiscing   fsgrsggrdg</h2>
        
//         <p className="mt-4 text-[#434343] text-sm md:text-[18px] md:leading-[33px] font-normal tracking-normal font-['Poppins']">Lorem ipsum dolor sit amet, consectetur 
//           adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         <div className="flex flex-col space-y-4 mt-6 lg:flex-row lg:space-y-0 lg:space-x-4">
//   <button className="bg-[#9B37AE] text-white px-6 py-3 rounded-lg font-bold">Buy now!</button>
//   <button className="border border-teal-400 text-teal-500 px-6 py-3 rounded-lg font-bold">
//     What is Ambrosia Global?
//   </button>
// </div>

//       </div>

//       <div className="max-w-[600px] w-full flex justify-center ">
//         <Image
//          alt="Products" 
//           width="722" 
//           height="444"
//             className="w-full"
//              src="https://cdn.sanity.io/images/qm33idis/production/14cb0c9976be9bd903953050f01f59a828992481-729x449.svg" /></div>
//       </div>
//     </div>
//     </div>
//   );
// }


import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-[#9B37AE] font-inter font-bold 
              text-[24px] leading-[34px] 
              sm:text-[30px] sm:leading-[40px] 
              md:text-[45px] md:leading-[55px] 
              tracking-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing fsgrsggrdg
            </h2>

            <p className="mt-4 text-[#434343] font-['Poppins'] font-normal 
              text-sm leading-[24px] 
              md:text-[18px] md:leading-[33px] 
              tracking-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col space-y-4 mt-6 
              lg:flex-row lg:space-y-0 lg:space-x-4">
              <button className="bg-[#9B37AE] text-white px-6 py-3 rounded-lg font-bold">
                Buy now!
              </button>
              <button className="border border-teal-400 text-teal-500 px-6 py-3 rounded-lg font-bold">
                What is Ambrosia Global?
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[600px] flex justify-center mb-6 lg:mb-0">
            <Image
              alt="Products"
              width="722"
              height="444"
              className="w-full h-auto"
              src="https://cdn.sanity.io/images/qm33idis/production/14cb0c9976be9bd903953050f01f59a828992481-729x449.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
