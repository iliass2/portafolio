import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";

function Swiperhere({ images,how_much ,class_img,scrool_enabled}) {
  const windowWidth = useRef(window.innerWidth);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={how_much}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true ,enabled:scrool_enabled}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images.map((element) => {
        return (
          <SwiperSlide key={element.id}>
            <div className={class_img}>
              <img src={element} alt="" className={class_img}></img>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default Swiperhere;
