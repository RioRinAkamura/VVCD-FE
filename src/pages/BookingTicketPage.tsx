import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import airplane from "../assets/images/airplane.jpg";
import ship from "../assets/images/ship.jpg";
import { BoatTicket } from "../components/Features.tsx/components/BoatTicket";
import Wrapper from "../components/Wrapper";

const BookingTicketPage = () => {
  const onPlaneTicket = () => {
    const win = window.open(
      `https://www.vietnamairlines.com/vi-vn/v%C3%A9-m%C3%A1y-bay-%C4%91%E1%BA%BFn-c%C3%B4n-%C4%91%E1%BA%A3o`,
      "_blank"
    );
    if (win) {
      win.focus();
    }
  };
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>{t("service.title")}</h2>
          <p>{t("service.desc")}</p>
        </div>
        <div className="contentHolder">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
              {/* <Link to="ve-may-bay"> */}
              <Card
                hoverable
                cover={<ImgStyle alt="airplane" src={airplane} />}
                onClick={onPlaneTicket}
              >
                <Meta
                  title={t("service.plane")}
                  description="From: TP.HCM, Can Tho, Ha Noi, Da Nang"
                />
              </Card>
              {/* </Link> */}
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
              <Link to="ve-tau">
                <Card hoverable cover={<ImgStyle alt="ship" src={ship} />}>
                  <Meta
                    title={t("service.boat")}
                    description="From: Vung Tau, Can Tho"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default BookingTicketPage;

const ImgStyle = styled.img`
  object-fit: cover;
  height: 250px;
`;
