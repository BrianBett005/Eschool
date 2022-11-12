import React from "react";
import { GrLocation } from "react-icons/gr";
import styled from "styled-components";
const SearchResult = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Icon>
            <GrLocation />
          </Icon>
          <Texts>
            <Title>Hammersmith Academy</Title>
            <Subtitle>Block 3 Amazukwu Road, Umuahia North, Abia.</Subtitle>
          </Texts>
        </div>
        <Location>
          <h1>Within 40 Miles</h1>
        </Location>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  transition: all 0.6s linear;
  flex-direction: column;

  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  opacity: 0.8;
  background: #0074ba;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 23px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 23px 0;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
`;
const Subtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;

  text-transform: capitalize;

  color: #6a6a72;
`;
const Title = styled.h1`
  font-family: "DM Serif Display";
  display: flex;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #141414;
`;

const Location = styled.div`
  background: rgba(151, 71, 255, 0.1);
  border-radius: 40px;
  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    padding: 15px 20px;
    color: #9747ff;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchResult;
