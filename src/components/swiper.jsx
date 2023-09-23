import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import foto1 from "../assets/img1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Swiperhere() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      height={10}
      
     
    >
      <SwiperSlide>
        <div className="images">
        <img src={foto1} alt="" className="slide_image"></img>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="images">
        <img
          className="slide_image" 
          src="https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1156&q=80"
          alt=""
        ></img></div>
      </SwiperSlide>
    
    </Swiper>
  );
}
export default Swiperhere;
