import React from "react";

import styled from "styled-components";
const DeleteButton = ({ title, props }) => {
  console.log(props);
  return <Button {...props}>{title}</Button>;
};

const Button = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;

  margin-left: 41px;
  font-family: "Dm Sans";
  background: rgba(255, 0, 0, 0.8);
  border-radius: 10px;
  padding: 14px 20px;
  color: #ffffff;
`;
export default DeleteButton;
