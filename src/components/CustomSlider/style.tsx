import styled from "styled-components";

export const StSwiperContainer = styled.div`
  max-width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 10%;
  @media (max-width: 640px) {
    max-width: 100%;
  }
  .swiper {
    padding-bottom: 50px;
  }
`;

export const StSiwperSlideItem = styled.div<{
  isActive: boolean;
}>`
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 50%) 0px 15px 30px -5px;
  transition: all 0.3s ease-in-out;
  width: ${(props) => (props.isActive ? "100%" : "40%")};
  background-color: ${(props) => (props.isActive ? "blue" : "red")};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    filter: brightness(${(props) => (props.isActive ? "1" : "0.7")});
  }
`;

export const StSliderCardTitle = styled.div<{ isActive: boolean }>`
  width: 100%;
  bottom: 70px;
  color: white;
  font-weight: 700;
  text-align: center;
  position: absolute;
  transition: all 0.3s ease-in-out;
  transform: rotate(${(props) => (props.isActive ? "0deg" : "-90deg")});
`;

export const StSliderCardContent = styled.div<{ isActive: boolean }>`
  bottom: 0%;
  width: 100%;
  padding: 0 20px;
  height: 50px;
  margin: 0 auto;
  font-size: 12px;
  text-align: center;
  color: white;
  position: absolute;
  transition: all ${(props) => (props.isActive ? "0.4s" : "0.1s")} cubic-bezier(0.47, -0.19, 0.87, 0.82);
  transform: translateY(${(props) => (props.isActive ? "0%" : "100%")});
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8696316340782123) 0%,
    rgba(253, 187, 45, 0) 100%
  );
`;
