  "use client"
// import Image from 'next/image';
// import { useState } from 'react';
// import { FaEnvelope, FaShoppingCart, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   const [isClick, setClick] = useState(false);

//   const toggleNav = () => {
//     setClick(!isClick);
//   };

//   return (
    
//     <div className=" shadow-md bg-white ">
//       <div className=" container w-ful" >
//         <div className="  mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Image src="/imges/img8.png" alt="Logo" width={140} height={40} />
//           </div>

//           {/* Nav Links */}
//           <ul className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
//             <li className="hover:text-purple-700 cursor-pointer">Home</li>
//             <li className="hover:text-purple-700 cursor-pointer">About</li>
//             <li className="hover:text-purple-700 cursor-pointer">Products</li>
//             <li className="hover:text-purple-700 cursor-pointer">Testimonials</li>
//             <li className="hover:text-purple-700 cursor-pointer">FAQ</li>
//             <li className="hover:text-purple-700 cursor-pointer">Contact</li>
//           </ul>

//           {/* Right Section */}
//           <div className="lg:flex items-center gap-4 hidden">
//             <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//               Join now!
//             </button>
//             {/* <Image
//               src="/imges/img21.png"
//               alt="Lang"
//               width={20}
//               height={10}
//               className="rounded-full"
//             /> */}
//             <FaEnvelope className="text-gray-700 text-lg cursor-pointer" />
//             <div className="border-l h-5 border-gray-300 mx-2" />
//             <FaShoppingCart className="text-gray-700 text-lg cursor-pointer" />
            
//             <div className="border-l h-5 border-gray-300 mx-2" />
//             <FaUser className="text-gray-700 text-lg cursor-pointer" />
//             </div>
            
//             {/* Hamburger */}
//             <div className="lg:hidden">
//               <button
//                 onClick={toggleNav}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 focus:outline-none"
//               >
//                 {isClick ? (
//                   <svg
//                     className="h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
        
//         </div>
//       </div>

    

//       {/* Mobile Menu */}
//       {isClick && (
//         <div className="lg:hidden  text-black px-4 py-3 space-y-2">
         
//             <ul className=" flex flex-col gap-6 text-sm font-semibold text-gray-700 ">
//             <li className="hover:text-purple-700 cursor-pointer">Home</li>
//             <li className="hover:text-purple-700 cursor-pointer">About</li>
//             <li className="hover:text-purple-700 cursor-pointer">Products</li>
//             <li className="hover:text-purple-700 cursor-pointer">Testimonials</li>
//             <li className="hover:text-purple-700 cursor-pointer">FAQ</li>
//             <li className="hover:text-purple-700 cursor-pointer">Contact</li>
//           </ul>

//           {/* Right Section */}
//           <div className="flex  flex-col-reverse  gap-4  ">
//           <a className="font-inter font-bold text-[14px] leading-[45px] tracking-[0px] text-center bg-[#4ACAC6] text-white px-6 py-1 rounded-[30px]" href="/">Join now!</a>
           
//             {/* <Image
//               src="/imges/img21.png"
//               alt="Lang"
//               width={20}
//               height={10}
//               className="rounded-full"
//             /> */}
//             <div className='flex flex-row gap-4'>

          
//             <FaEnvelope className="text-gray-700 text-lg cursor-pointer" />
          
//             <FaShoppingCart className="text-gray-700 text-lg cursor-pointer" />
            
          
//             <FaUser className="text-gray-700 text-lg cursor-pointer" />
//             </div>
//             </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


// "use client";
import { useState } from 'react';
import { FaEnvelope, FaShoppingCart, FaUser } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isClick, setClick] = useState(false);

  const toggleNav = () => {
    setClick(!isClick);
  };

  return (
    <div className="shadow-md bg-white">
      <div className="container w-full">
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/imges/img8.png" alt="Logo" width={140} height={40} />
          </div>

          {/* Nav Links */}
          <ul className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
            <li className="hover:text-purple-700 cursor-pointer">Home</li>
            <li className="hover:text-purple-700 cursor-pointer">About</li>
            <li className="hover:text-purple-700 cursor-pointer">Products</li>
            <li className="hover:text-purple-700 cursor-pointer">Testimonials</li>
            <li className="hover:text-purple-700 cursor-pointer">FAQ</li>
            <li className="hover:text-purple-700 cursor-pointer">Contact</li>
          </ul>

          {/* Right Section */}
          <div className="lg:flex items-center gap-4 hidden">
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Join now!
            </button>
            <FaEnvelope className="text-gray-700 text-lg cursor-pointer" />
            <div className="border-l h-5 border-gray-300 mx-2" />
            <FaShoppingCart className="text-gray-700 text-lg cursor-pointer" />
            <div className="border-l h-5 border-gray-300 mx-2" />
            <FaUser className="text-gray-700 text-lg cursor-pointer" />
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 focus:outline-none"
            >
              {isClick ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isClick && (
        <div className="lg:hidden text-black px-4 py-3 space-y-2">
          <ul className="flex flex-col gap-6 text-sm font-semibold text-gray-700">
            <li className="hover:text-purple-700 cursor-pointer">Home</li>
            <li className="hover:text-purple-700 cursor-pointer">About</li>
            <li className="hover:text-purple-700 cursor-pointer">Products</li>
            <li className="hover:text-purple-700 cursor-pointer">Testimonials</li>
            <li className="hover:text-purple-700 cursor-pointer">FAQ</li>
            <li className="hover:text-purple-700 cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-col-reverse gap-4">
            <a className="font-inter font-bold text-[14px] leading-[45px] tracking-[0px] text-center bg-[#4ACAC6] text-white px-6 py-1 rounded-[30px]" href="/">Join now!</a>
            <div className='flex flex-row gap-4'>
              <FaEnvelope className="text-gray-700 text-lg cursor-pointer" />
              <FaShoppingCart className="text-gray-700 text-lg cursor-pointer" />
              <FaUser className="text-gray-700 text-lg cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

