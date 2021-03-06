import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import styled from "styled-components";
import seafood from "../../../assets/images/seafood.png";
import slide1 from "../../../assets/images/slide1.png";
import slide2 from "../../../assets/images/slide2.png";
import slide3 from "../../../assets/images/slide3.png";
import tuong from "../../../assets/images/tuong.png";
import turtle from "../../../assets/images/turtle.jpg";

const IntroCarousel = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="titleHolder">
        <h2>{t("about.title")}</h2>
        <p>{t("about.desc")}</p>
      </div>
      <div className="contentHolder">
        <CarouselWrapper {...settings} autoplay>
          <div>
            <Row gutter={[16, 16]} style={{ display: "flex" }}>
              <Col md={{ span: 12 }}>
                <img src={slide1} alt="natural" width={"100%"} />
              </Col>
              <Col md={{ span: 12 }}>
                <h2>{t("about.naturalTitle")}</h2>
                <p style={{ textAlign: "justify" }}>{t("about.naturalDesc")}</p>
                <h2> {t("about.placeTitle")}</h2>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <li>B??i ?????m Tr???u</li>
                    <li>B??i Nh??t</li>
                    <li>H??n B???y C???nh</li>
                    <li>V???nh ?????m Tre</li>
                    <li>H??n Tre Nh???</li>
                    <li>H??n Tre L???n</li>
                    <li>???????ng T??y B???c</li>
                  </ul>
                  <img src={turtle} alt="traveler1" width={"60%"} />
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[16, 16]} style={{ display: "flex" }}>
              <Col md={{ span: 12 }}>
                <img src={slide3} alt="history" width={"100%"} />
              </Col>
              <Col md={{ span: 12 }}>
                <h2>{t("about.historyTitle")}</h2>
                <p style={{ textAlign: "justify" }}>{t("about.historyDesc")}</p>
                <h2> {t("about.placeTitle")}</h2>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ul style={{ textAlign: "left" }}>
                    <li>Nh?? t?? C??n ?????o</li>
                    <li>Ngh??a trang H??ng D????ng</li>
                    <li>Ch??a N??i M???t(V??n S??n T???)</li>
                    <li>B???o T??ng C??n ?????o</li>
                    <li>C???u T??u 914</li>
                    <li>Mi???u B?? Phi Y???n</li>
                    <li>C???u Ma Thi??n L??nh</li>
                    <li>Nh?? Ch??a ?????o</li>
                  </ul>
                  <img
                    src={tuong}
                    alt="tuong"
                    width={"35%"}
                    style={{
                      opacity: 0.8,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[16, 16]} style={{ display: "flex" }}>
              <Col md={{ span: 12 }}>
                <img src={slide2} alt="specialties" width={"80%"} />
              </Col>
              <Col md={{ span: 12 }}>
                <h2> {t("about.specialtiesTitle")}</h2>
                <p style={{ textAlign: "justify" }}>
                  {t("about.specilitiesDesc")}
                </p>
                <h2> {t("about.specialtiesTitle")}</h2>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ul style={{ textAlign: "left" }}>
                    <li>H???i S???n T????i C??n ?????o</li>
                    <li>M???t H???t B??ng C??n ?????o</li>
                    <li>M???m H??u C??n ?????o</li>
                    <li>M???m Nhum C??n ?????o</li>
                    <li>Cua M???t Tr??ng C??n ?????o</li>
                    <li>???c V?? N??ng C??n ?????o</li>
                    <li>S?? S??ng C??n ?????o</li>
                    <li>C?? M?? ????? C??n ?????o</li>
                    <li>M???c M???t N???ng C??n ?????o</li>
                    <li>C?? Thu M???t N???ng C??n ?????o</li>
                  </ul>
                  <img
                    src={seafood}
                    alt="seafood"
                    width={"30%"}
                    style={{ paddingTop: 24 }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default IntroCarousel;

const CarouselWrapper = styled(Slider)`
  /* > .slick-dots li button {
    width: 16px;
    height: 4px;
    /* border-radius: 100%; */
  /* background: #8b8b8b; */
  /* } */
  /* > .slick-dots li.slick-active button { */
  /* width: 24px; */
  /* height: 4px; */
  /* border-radius: 100%; */
  /* background: #1890ff; */
  /* } */
`;
