import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import image6 from "../../../assets/images/advanced-option.jpg";
import hotel from "../../../assets/images/hotel.jpg";
import ship from "../../../assets/images/ship.jpg";
import tour from "../../../assets/images/tour.jpg";
import { foodData } from "./aboutData";

const FoodCarousel = () => {
  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <CarouselArrow className={className} onClick={onClick}>
        <RightOutlined style={{ color: "#333", fontSize: 20 }} />
      </CarouselArrow>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <CarouselArrow className={className} onClick={onClick}>
        <LeftOutlined style={{ color: "#333", fontSize: 20 }} />
      </CarouselArrow>
    );
  };

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <Wrapper>
        <h2> Những món ngon không thể bỏ lỡ</h2>
        <CarouselWrapper {...settings}>
          {foodData &&
            foodData.map((data) => (
              <CardWrapper key={data.id}>
                <CardItem style={{ backgroundImage: `url(${data.image})` }}>
                  <CardContent>
                    <h3 style={{ color: "white" }}>{data.title}</h3>
                    <DescText>{data.desc}</DescText>
                  </CardContent>
                </CardItem>
              </CardWrapper>
            ))}
        </CarouselWrapper>
      </Wrapper>
    </div>
  );
};

export default FoodCarousel;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const CardWrapper = styled.div`
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
`;

const CardItem = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-size: cover;
  transition: transform 0.5s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 24px 24px 0px 24px;
  color: white;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.011642156862745057) 100%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const DescText = styled.p`
  height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CarouselWrapper = styled(Slider)``;

const CarouselArrow = styled.div`
  background: white;
  z-index: 99;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 1px 1px 30px -1px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 1px 1px 30px -1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 1px 1px 30px -1px rgba(0, 0, 0, 0.3);

  :hover {
    background: white;
  }
`;
