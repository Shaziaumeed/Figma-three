'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const CardSlider = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
        </p>

        <div className="text-left font-bold text-black mb-4 cursor-pointer ">
          See More Views
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            
            
          }}
          modules={[Pagination]}
         
        >
          <SwiperSlide>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-400 rounded-full" />
                <h3 className="font-semibold">Lorem Ipsum</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-50  rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-400 rounded-full" />
                <h3 className="font-semibold">Lorem Ipsum</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-50  rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-400 rounded-full" />
                <h3 className="font-semibold">Lorem Ipsum</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-400 rounded-full" />
                <h3 className="font-semibold">Lorem Ipsum</h3>
              </div>
              <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-50  rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-400 rounded-full" />
                <h3 className="font-semibold">Lorem Ipsum</h3>
              </div>
              <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-50  rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-400 rounded-full" />
                <h3 className="font-semibold">Lorem Ipsum</h3>
              </div>
              <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-400 rounded-full" />
                <h3 className="font-semibold">Lorem Ipsum</h3>
              </div>
              <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-400 rounded-full" />
                <h3 className="font-semibold">Lorem Ipsum</h3>
              </div>
              <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

 export default CardSlider;



