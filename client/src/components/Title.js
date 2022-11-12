import React from "react";
import styled from "styled-components";
const Title = ({ title }) => {
  return (
    <Welcome>
      {title} <Emoji>👋</Emoji>
    </Welcome>
  );
};

const Welcome = styled.div`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  display: flex;
  font-size: 24px;
  line-height: 48px;
  text-align: center;

  color: #141414;
`;
const Emoji = styled.div`
  color: darkgoldenrod;
  margin-left: 6px;
`;
export default Title;
