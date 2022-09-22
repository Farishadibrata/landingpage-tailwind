import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function SwiperComponent() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            There is no must in art
            <br className="hidden md:block" />
            because art is free.
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          "Class is dead", says Foucault; however, according to Reicher, it is
          not so much class that is dead, but rather the absurdity, and some
          would say the paradigm, of class. However, the subject is interpolated
          into a postpatriarchialist dialectic theory that includes
          consciousness as a totality.
        </p>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <SwiperSlide>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover object-top w-full h-56 md:h-64 xl:h-80"
                  src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
                <div className="absolute inset-0  px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div className="mt-20">
                    <p className="mb-4  text-lg font-bold text-gray-100">
                      Mona Lisa
                    </p>
                    <p className="text-sm tracking-wide text-gray-300">
                      Painted between 1503 and 1517, Da Vinci’s alluring
                      portrait has been dogged by two questions since the day it
                      was made: Who’s the subject and why is she smiling?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover object-top w-full h-56 md:h-64 xl:h-80"
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div className="mt-20">
                    <p className="mb-4  text-lg font-bold text-gray-100">
                      Mona Lisa
                    </p>
                    <p className="text-sm tracking-wide text-gray-300">
                      Painted between 1503 and 1517, Da Vinci’s alluring
                      portrait has been dogged by two questions since the day it
                      was made: Who’s the subject and why is she smiling?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover object-center w-full h-56 md:h-64 xl:h-80"
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div className="mt-20">
                    <p className="mb-4  text-lg font-bold text-gray-100">
                      Mona Lisa
                    </p>
                    <p className="text-sm tracking-wide text-gray-300">
                      Painted between 1503 and 1517, Da Vinci’s alluring
                      portrait has been dogged by two questions since the day it
                      was made: Who’s the subject and why is she smiling?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div className="mt-20">
                    <p className="mb-4  text-lg font-bold text-gray-100">
                      Mona Lisa
                    </p>
                    <p className="text-sm tracking-wide text-gray-300">
                      Painted between 1503 and 1517, Da Vinci’s alluring
                      portrait has been dogged by two questions since the day it
                      was made: Who’s the subject and why is she smiling?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
