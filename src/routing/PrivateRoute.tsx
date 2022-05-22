import { Spin } from "antd";
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  // console.log("authLoading", authLoading);
  // console.log("we here, isAuthenticated", isAuthenticated);

  if (authLoading) {
    return <Spin />;
  }

  return isAuthenticated ? (
    <Wrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Wrapper>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
