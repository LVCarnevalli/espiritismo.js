// https://swiperjs.com/react#virtual-slides

import * as React from "react";
import { Virtual } from "swiper";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/virtual";

interface Props {
  slides: any[];
}

const Swiper: React.FC<Props> = (props: Props) => {
  return (
    <>
      <ReactSwiper modules={[Virtual]} virtual>
        {props.slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </ReactSwiper>
    </>
  );
};

export default Swiper;
