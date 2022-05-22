import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { placeData } from "../About/components/aboutData";
import Wrapper from "../Wrapper";

const AboutDetail = () => {
  const { id } = useParams<Record<string, string>>();
  console.log("id", id);

  const [data, setData] = useState<any>();

  useEffect(() => {
    if (placeData) {
      const aboutData = placeData.filter((data) => data.id === `${id}`);
      setData(aboutData);
    }
  }, [id]);

  return (
    <Wrapper>
      <div className="container-fluid">
        {data &&
          data.map((item: any) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.address} &nbsp;&nbsp;&nbsp; </p>
              <p>
                <i className="fas fa-motorcycle"></i>&nbsp;
                {item.bike}
              </p>

              <Row gutter={[8, 8]}>
                <Col md={{ span: 12 }}>
                  <ImgStyle src={item.image} alt="" />
                </Col>
                <Col md={{ span: 12 }}>
                  <Row gutter={[8, 8]}>
                    <Col span={12}>
                      <ImgStyle src={item.image} alt="" />
                    </Col>
                    <Col span={12}>
                      <ImgStyle src={item.image} alt="" />
                    </Col>
                    <Col span={12}>
                      <ImgStyle src={item.image} alt="" />
                    </Col>
                    <Col span={12}>
                      <ImgStyle src={item.image} alt="" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <h3>Giới thiệu chung</h3>
              <p>{item.desc}</p>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default AboutDetail;

const ImgStyle = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
  }
`;
