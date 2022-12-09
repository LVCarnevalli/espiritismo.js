// https://swiperjs.com/react#virtual-slides

import * as React from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/virtual";

interface Props {
  slides: string[];
}

const Question: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Swiper modules={[Virtual]} virtual>
        {props.slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Question;
