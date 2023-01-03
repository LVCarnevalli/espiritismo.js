import * as React from "react";
import { Virtual, Pagination } from "swiper";
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
    const autoHeight = () => {
      // fix auto height swiper.js
      if (typeof window === "undefined") return;

      for (let el of document.querySelectorAll(
        ".swiper-slide, .swiper-wrapper"
      ) as any) {
        el.style.minHeight = `${window.innerHeight - 142}px`; // discount menu, padding and pagination: 64px + 24px + 54px
      }

      window.scrollTo(0, 0);
    };

    swiperRef.current.swiper.on("slideChange", function (swiper) {
      props.indexChange(swiper.activeIndex);
      autoHeight();
    });

    swiperRef.current.swiper.on("observerUpdate", function () {
      autoHeight();
    });
  }, []);

  return (
    <>
      <ReactSwiper
        spaceBetween={100}
        ref={swiperRef}
        initialSlide={props.initialSlide}
        modules={[Pagination, Virtual]}
        observer
        autoHeight
        virtual
        pagination={{
          type: "custom",
          renderCustom: (swiper, current: number, total: number) =>
            `${Math.trunc((current / total) * 100)}%`,
        }}
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
