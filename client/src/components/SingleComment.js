import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
const SingleComment = ({ rating, user, title }) => {
  return (
    <Wrapper>
      <User>{user}</User>
      <Title>{title}</Title>
      <Rating>
        {Array(rating)
          .fill()
          .map((_, i) => {
            return (
              <Star key={i}>
                <FaStar />
              </Star>
            );
          })}
      </Rating>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 0.6px solid gray;
  align-items: flex-start;
`;
const Title = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  /* margin: 6px 0; */
  text-align: right;

  color: #141414;
`;
const User = styled.h2`
  font-family: "Test Heldane Display", "Dm Serif Display";
  font-style: bold;

  font-weight: 500;
  font-size: 18px;

  line-height: 26px;
  letter-spacing: 0.04em;
  color: #141414;
`;
const Star = styled.div`
  color: yellow;
  padding-right: 1px;
`;
const Rating = styled.div`
  display: flex;
  margin-left: 6px;
  margin-top: 4px;
`;

export default SingleComment;
