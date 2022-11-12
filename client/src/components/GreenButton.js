import React from "react";
import styled from "styled-components";
const GreenButton = ({ title }) => {
  return <Button>{title}</Button>;
};
const Button = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;

  font-family: "Dm Sans";
  background: #0e563f;
  border-radius: 10px;
  padding: 14px 20px;

  color: #ffffff;
`;
export default GreenButton;
