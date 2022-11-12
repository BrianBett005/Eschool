import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import Searchbar from "../components/Searchbar";
import SearchCategory from "../components/SearchCategory";

const Home = () => {
  const userInfo = useSelector((state) => state.signInInfo);

  
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.userInfo) {
      navigate("/landing_page");
    }
    // eslint-disable-next-line
  }, []);
  const searchCategories = [
    { id: 1, title: "Secondary schools", url: "/search_schools" },
    { id: 2, title: "Tutoring facilties", url: "/tutoring_facilties" },
    { id: 3, title: "Proprietors", url: "/proprietors" },
    { id: 4, title: "Award winning schools", url: "/awards" },
  ];
  const printableResources = [
    { id: 1, title: "List of schools", url: "/list_of_schools" },
    { id: 2, title: "How to register a school", url: "/register_school" },
  ];
  return (
    <Wrapper>
      <NavbarOne />
      <NavbarTwo />
      <ContentWrapper>
        <Intro>
          <IntroTitle>
            Search in-network schools, facilities, and propietors
          </IntroTitle>
          <IntroSubtitle>
            2022 · Individual · Lagos · Individual Lagos ·
            <span> Change network</span>
          </IntroSubtitle>
        </Intro>
        <Searchbar />
        <Title>Common searches</Title>
        <Categories>
          {searchCategories.map((category) => (
            <SearchCategory title={category.title} key={category.id} />
          ))}
        </Categories>
        <Title>Printable resources</Title>
        <Categories>
          {printableResources.map((category) => (
            <SearchCategory title={category.title} key={category.id} />
          ))}
        </Categories>
      </ContentWrapper>
    </Wrapper>
  );
};

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  margin-top: 20px;
`;
const IntroTitle = styled.h1`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #141414;
`;
const IntroSubtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #141414;
  span {
    color: #0074ba;
    cursor: pointer;
  }
`;
const Title = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  margin: 25px 0 15px;
  color: #141414;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
