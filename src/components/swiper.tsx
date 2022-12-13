// https://swiperjs.com/react#virtual-slides

import * as React from "react";
import { Virtual } from "swiper";
import { Swiper as ReactSwiper, SwiperSlide, SwiperRef } from "swiper/react";

import "swiper/css";
import "swiper/css/virtual";

interface Props {
  slides: any[];
  indexChange: (realIndex: number) => void;
  initialSlide: number;
}

const Swiper: React.FC<Props> = (props: Props) => {
  const swiperRef = React.useRef<SwiperRef>(null);

  React.useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.on("slideChange", function (swiper) {
      props.indexChange(swiper.activeIndex);
    });
  }, []);

  return (
    <>
      <ReactSwiper
        className="h-full"
        spaceBetween={100}
        ref={swiperRef}
        initialSlide={props.initialSlide}
        modules={[Virtual]}
        virtual
      >
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
