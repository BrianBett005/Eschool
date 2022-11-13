import React from "react";
import styled from "styled-components";
import image3 from "../images/image3.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import BlueButton from "../components/BlueButton";
import NavbarOne from "../components/NavbarOne";
import { BsArrowRight } from "react-icons/bs";
import NavbarTwo from "../components/NavbarTwo";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <Wrapper>
      <Navbars>
        <NavbarOne />
        <NavbarTwo />
      </Navbars>
      <ContentWrapper>
        <Left>
          <Subtitle>WELCOME TO EDET Schools</Subtitle>
          <Title>Experience School Networks at its Peak</Title>
          <Buttons>
            <Link to="/register">
              <BlueButton title="Add a school Or login" />
            </Link>
            <Link to="/blog">
              <ReadBlog href="/blog">
                <h3>Read our blog</h3>
                <div>
                  <BsArrowRight />
                </div>
              </ReadBlog>
            </Link>
          </Buttons>
        </Left>
        <Right>
          <Images>
            <Image1 src={image3} alt="Student image 1" />
            <Image2 src={image6} alt="Student image 2" />
          </Images>
          <Images>
            <Image3 src={image7} alt="Student image 3" />
            <Image4 src={image3} alt="Student image 4" />
          </Images>
        </Right>
      </ContentWrapper>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;
const Navbars = styled.div`
  display: flex;
  flex-direction: column;
`;
// const LargeImage = styled.img`
//   object-fit: cover;
//   border-radius: 20px;
// `;
// const Logo = styled.img`
//   object-fit: cover;
//   border-radius: 50%;
//   width: 60%;
// `;
// const Title2 = styled.h1`
//   font-family: "DM Serif Display";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 36px;
//   line-height: 72px;
//   /* identical to box height, or 200% */
//   display: flex;
//   align-items: center;

//   color: #000000;
// `;
// const Text = styled.h2`
//   font-family: "DM Serif Display";
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 30px;
//   display: flex;
//   align-items: center;
//   color: #000000;
// `;
// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;

//   background: #3d3af8;
//   display:grid;
//   place-items:center;
//   color:white;
// `;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1150px) {
    margin-top: 30px;
    width: 100%;
  }
`;
const Subtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  color: #141414;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  max-width: 615px;
  font-size: 64px;
  line-height: 80px;
  color: #141414;
  margin-bottom: 20px;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;
const ReadBlog = styled.a`
  margin-left: 50px;
  display: flex;
  padding: 10px;
  align-items: center;

  transition: all 0.9s linear;

  h3 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #141414;
  }
  div {
    color: #141414;
    margin-left: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Image1 = styled.img`
  width: 250px;
  height: 250px;

  margin-right: 20px;
  border-radius: 15px;
  object-fit: cover;
`;
const Image2 = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
`;
const Image3 = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 20px;
`;
const Image4 = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;
const Images = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export default LandingPage;
