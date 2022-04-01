import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import {
  StSiwperSlideItem,
  StSliderCardContent,
  StSliderCardTitle,
  StSwiperContainer,
} from "./style";

interface PropTypes {
  data: { title: string; content: string; key: number; img: string }[];
}

const CustomSlider: FC<PropTypes> = ({ data }) => {
  return (
    <StSwiperContainer>
      <Swiper
        loop
        centeredSlides
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map(({ img, title, content, key }) => (
          <SwiperSlide key={key}>
            {({ isActive }) => (
              <StSiwperSlideItem isActive={isActive}>
                <img src={img} alt={title} />
                <StSliderCardTitle isActive={isActive}>
                  {title}
                </StSliderCardTitle>
                <StSliderCardContent isActive={isActive}>
                  {content}
                </StSliderCardContent>
              </StSiwperSlideItem>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </StSwiperContainer>
  );
};

export default CustomSlider;
