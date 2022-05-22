import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import dulich1 from "../assets/images/du-lich1.jpg";
import dulich2 from "../assets/images/du-lich2.jpg";

const BookingTourPage = () => {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Tour du lịch Côn Đảo</h2>
          <p>
            Có nhiều sự lựa chọn để du khách có thể khám phá vẻ đẹp thiên nhiên,
            lịch sử, tâm linh... Du khách có thể hoàn toàn kết hợp tour. Liên hệ
            ngay{" "}
            <a href="tel:+84-869315579">
              <b>0869 315 579</b>
            </a>{" "}
            để được tư vấn đặt tour
          </p>
        </div>
        <div className="contentHolder">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
              <Link to="du-lich-sinh-thai">
                <Card
                  hoverable
                  cover={<ImgStyle alt="airplane" src={dulich1} />}
                >
                  <Meta
                    title="Tour du lịch sinh thái"
                    description="From: TP.HCM, Can Tho, Ha Noi, Da Nang"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
              <Link to="du-lich-tam-linh">
                <Card hoverable cover={<ImgStyle alt="ship" src={dulich2} />}>
                  <Meta
                    title="Tour du lịch tâm linh"
                    description="From: Vung Tau, Can Tho"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
              <Link to="du-lich-sinh-thai">
                <Card
                  hoverable
                  cover={<ImgStyle alt="airplane" src={dulich1} />}
                >
                  <Meta
                    title="Tour du lịch sinh thái"
                    description="From: TP.HCM, Can Tho, Ha Noi, Da Nang"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
              <Link to="du-lich-tam-linh">
                <Card hoverable cover={<ImgStyle alt="ship" src={dulich2} />}>
                  <Meta
                    title="Tour du lịch tâm linh"
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

export default BookingTourPage;

const ImgStyle = styled.img`
  object-fit: cover;
  height: 250px;
`;
