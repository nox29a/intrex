import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


import sliderimg from "../img/history.png";
import sliderimg2 from "../img/history.png";
import sliderimg3 from "../img/history2.png";
import sliderimg4 from "../img/history.png";
import sliderimg5 from "../img/history3.png";
import sliderimg6 from "../img/history.png";

const sliderData = [
  {
    img: sliderimg,
  },
  {
    img: sliderimg2,
  },
  {
    img: sliderimg3,
  },
  {
    img: sliderimg4,
  },
  {
    img: sliderimg5,
  },
  {
    img: sliderimg6,
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      className=""
      slidesPerView={3}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="">
                <img className="h-[400px]" src={slide.img} alt=""></img>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
