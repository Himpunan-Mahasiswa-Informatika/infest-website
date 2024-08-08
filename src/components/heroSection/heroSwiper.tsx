import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { BannerHero1 } from "./banner-hero-1";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CustomCSSProperties } from "@/types/customCSSProps";
import { BannerHero2 } from "./banner-hero-2";
import { BannerHero3 } from "./banner-hero-3";

export const HeroSwiper = () => {
  const swiperStyleHero: CustomCSSProperties = {
    "--swiper-pagination-color": "rgba(253, 208, 38, 1)",
    "--swiper-pagination-bullet-width": "6rem",
    "--swiper-pagination-bullet-height": "6px",
    "--swiper-pagination-bullet-border-radius": "100px",
    "--swiper-pagination-bullet-inactive-color": "transparent",
    "--swiper-navigation-size": "4rem",
  };
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      slidesPerGroupSkip={1}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      pagination={true}
      navigation={true}
      modules={[Autoplay, Keyboard, Navigation, Pagination]}
      loop={true}
      style={swiperStyleHero}
      className="hero-swiper"
    >
      <SwiperSlide>
        <BannerHero1/>
      </SwiperSlide>
      <SwiperSlide>
        <BannerHero2/>
      </SwiperSlide>
      <SwiperSlide>
        <BannerHero3/>
      </SwiperSlide>
    </Swiper>
  );
};
