import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
const SingleBlog = () => {
  return (
    <Wrapper>
      <Navbars>
        <NavbarOne />
        <NavbarTwo />
      </Navbars>
      <ContentWrapper>
        <Image src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/444454/1.jpg?0959" />
        <Time>
          <h1>AUG 10,2022</h1>
          <div></div>
          <h2>6 min read</h2>
        </Time>
        <Title>Five warning signs of a bad student you shouldn't ignore.</Title>
        <HorizontalWrapper>
          <Left>
            <Profile>
              <ProfilePic src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/444454/1.jpg?0959" />
              <div>
                <Author>Praise Dominic</Author>
                <AuthorTitle>Educational Consultant</AuthorTitle>
              </div>
            </Profile>
            <Category>Category</Category>
            <Categories>
              <Category1>Education</Category1>
              <Category2>Consult</Category2>
            </Categories>
            <Title2>Share this article</Title2>
            <Socials>
              <Social>
                <FaFacebook />
              </Social>
              <Social>
                <FaTwitter />
              </Social>
              <Social>
                <FaInstagram />
              </Social>
            </Socials>
          </Left>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Description>
        </HorizontalWrapper>
        <Footer />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  overflow-y: auto;
  height: 100vh;
  overflow-x: hidden;
`;
const Navbars = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 100px;
`;
const Time = styled.div`
  display: flex;
  margin: 40px 0;
  align-items: center;
  text-align: center;
  h1 {
    font-family: "DM Sans";
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: #141414;
  }
  div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #141414;

    margin: 0 10px;
  }
  h2 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */

    text-align: right;

    color: #141414;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: center;
`;

const Title = styled.h1`
  font-family: "Test Heldane Display,Dm Sans";
  font-weight: 500;
  font-size: 48px;
  line-height: 96px;
  letter-spacing: 0.04em;

  color: #141414;

  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  padding: 30px 0 40px;
  text-align: center;
  color: #141414;
`;

const Profile = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    white-space: nowrap;
  }
`;
const Author = styled.h2`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  width: fit-content;
`;
const AuthorTitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #141414;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Description = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 45px;
  color: #141414;
`;
const ProfilePic = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 50%;
  border: 3px solid gray;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  flex-basis: 6;
`;
const Category = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-family: "DM Sans";
  color: #141414;
  margin-bottom: 15px;
`;
const Categories = styled.div`
  display: flex;
  margin-bottom: 45px;
`;
const Category1 = styled.div`
  background: rgba(243, 135, 4, 0.1);
  border-radius: 5px;
  padding: 5px 10px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #f38704;
  margin-right: 10px;
`;
const Category2 = styled.div`
  background: rgba(111, 111, 186, 0.1);
  border-radius: 5px;
  padding: 5px 10px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #6f6fba;
`;
const Title2 = styled.h1`
  margin-bottom: 11px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.02em;

  color: #141414;
`;
const Socials = styled.div`
  display: flex;
`;
const Social = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 40px;
  color: #3d3af8;
  height: 40px;
  color: blue;
  display: grid;
  margin-right: 20px;
  place-items: center;
`;
export default SingleBlog;
