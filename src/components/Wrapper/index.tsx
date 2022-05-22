import React from "react";
import styled from "styled-components";

const WrapperComponent = styled.div`
  margin: 20px 0px 200px 0px;
`;

const Wrapper = (props: any) => {
  const { children } = props;
  return <WrapperComponent>{children}</WrapperComponent>;
};

export default Wrapper;
