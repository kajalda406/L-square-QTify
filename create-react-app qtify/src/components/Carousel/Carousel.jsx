import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import { useRef } from "react";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";

function Carousel({ data, renderComponent }) {
  const swiperRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <LeftNavigation onClick={() => swiperRef.current.slidePrev()} />
      <RightNavigation onClick={() => swiperRef.current.slideNext()} />

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;