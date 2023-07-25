import React, { useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import "swiper/swiper.scss";
import {
  RightArrow,
  SliderWrapper,
  StyledButtonLeft,
  StyledButtonRight,
  StyledSlide,
  StyledSlideMini,
  StyledSwiper,
  StyledSwiperMini
} from "./styles";
import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";

SwiperCore.use([Navigation, Thumbs]);

export default function Gallery({ slides = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigaionNextPref = useRef(null);

  return (
    <>
      <StyledSwiper
        spaceBetween={20}
        loop
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        onSlideChange={(slider) => {
          setActiveSlide(slider.realIndex);
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyledSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          spaceBetween={20}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          loop
          onSwiper={(e) => {
            setThumbsSwiper(e);
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigaionNextPref.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigaionNextPref.current;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyledSlideMini
                $active={activeSlide === index}
                src={slide.src}
                alt={slide.src}
                width={168}
                height={128}
              />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigaionNextPref}>
          <RightArrow />
        </StyledButtonRight>
      </SliderWrapper>
    </>
  );
}
