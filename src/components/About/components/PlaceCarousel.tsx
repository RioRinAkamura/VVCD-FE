import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { apiUrl } from "../../../contexts/constants";

const PlaceCarousel = () => {
  const [placesHistory, setPlacesHistory] = useState([]);
  const [placesNatural, setPlacesNatural] = useState([]);

  const getPlaces = useCallback(async () => {
    const response = await axios.get(`${apiUrl}/places`);
    if (response) {
      setPlacesHistory(
        response.data.places.filter((place: any) => place.type === "HISTORY")
      );
      setPlacesNatural(
        response.data.places.filter((place: any) => place.type === "NATURAL")
      );
    }
  }, []);

  useEffect(() => {
    getPlaces();
  }, [getPlaces]);

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
        <h2> Địa điểm tâm linh - Di tích lịch sử</h2>
        <CarouselWrapper {...settings}>
          {placesHistory &&
            placesHistory.map((place: any) => (
              <Link to={`/${place._id}`} key={place._id}>
                <CardWrapper>
                  <CardItem
                    style={{ backgroundImage: `url(${place.pictures[0]})` }}
                  >
                    <CardContent>
                      <h3 style={{ color: "white" }}>{place.title}</h3>
                      <DescText>{place.description}</DescText>
                    </CardContent>
                  </CardItem>
                </CardWrapper>
              </Link>
            ))}
        </CarouselWrapper>
      </Wrapper>

      <Wrapper>
        <h2> Địa điểm tham quan - nghỉ dưỡng</h2>
        <CarouselWrapper {...settings}>
          {placesNatural &&
            placesNatural.map((data: any) => (
              <Link to={`about/${data._id}`} key={data._id}>
                <CardWrapper>
                  <CardItem
                    style={{ backgroundImage: `url(${data.pictures[0]})` }}
                  >
                    <CardContent>
                      <h3 style={{ color: "white" }}>{data.title}</h3>
                      <DescText>{data.description}</DescText>
                    </CardContent>
                  </CardItem>
                </CardWrapper>
              </Link>
            ))}
        </CarouselWrapper>
      </Wrapper>
    </div>
  );
};

export default PlaceCarousel;

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
