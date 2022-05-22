import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import title1 from "../../assets/images/title1.png";
import title2 from "../../assets/images/title2.png";
import title3 from "../../assets/images/title3.png";
import Button from "../Button";

export const Home = () => {
  const { t } = useTranslation();

  const onClickBtn = () => {
    console.log("click");
  };
  return (
    <div className="heroBlock">
      <div className="container-fluid">
        <div style={{ paddingTop: "200px" }}>
          <Row gutter={[24, 16]}>
            <Col md={{ span: 12 }}>
              <img
                src={title1}
                alt="title1"
                className="animate__animated animate__fadeInDown animate__delay-0.5s "
                width={"100%"}
              />
              <img
                src={title2}
                alt="title2"
                style={{ margin: "8px 0px" }}
                className="animate__animated animate__fadeInLeft animate__delay-1s "
                width={"100%"}
              />
              <img
                src={title3}
                alt="title3"
                className="animate__animated animate__fadeInRight animate__delay-1s "
                width={"100%"}
              />
              <p
                className="animate__animated animate__fadeInUp animate__delay-2s "
                style={{
                  color: "white",
                  textAlign: "justify",
                  margin: "8px 0px",
                }}
              >
                {t("home.text")}
              </p>
              <Button
                className="animate__animated animate__fadeInUp animate__delay-2s"
                type="primary"
                size="large"
                onClick={onClickBtn}
              >
                {t("button.explore")}
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
