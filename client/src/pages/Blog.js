import React from "react";
import styled from "styled-components";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
const Blog = () => {
  return (
    <Wrapper>
      <Navbars>
        <NavbarOne />
        <NavbarTwo />
      </Navbars>
      <Title>Hello! 👋🏾 Welcome to Our Education & Academic Blog</Title>
      <Shapes>
        <Shape1>
          <Image src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/444454/1.jpg?0959" />
          <h2>Let's Stop Expecting Teachers to Love the Job</h2>
        </Shape1>
        <Shape2>
          <Image src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/444454/1.jpg?0959" />
          <h2>Normalizing Professional Failure</h2>
        </Shape2>
        <Shape3>
          <Image src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/444454/1.jpg?0959" />
          <h2>Building a Unified School Culture in a Divisive Society</h2>
        </Shape3>
        <Shape4>
          <Image src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/444454/1.jpg?0959" />
          <h2>4 Ways to Create a Positive School Culture</h2>
        </Shape4>
      </Shapes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
`;

const Navbars = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
`;
const Title = styled.h1`
  font-family: "Test Heldane Display", "Dm Sans";
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;

  padding: 40px 120px;
  text-align: center;

  color: #141414;
`;
const Image = styled.img`
  z-index: 1;
  object-fit: center;
  width: 100%;

  height: 100%;
`;

const Shapes = styled.div`
  display: flex;
  align-items: center;

  margin: 20px 40px;
  width: 100vw;
  align-items: center;

  flex: 0 0 auto;

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Shape3 = styled.div`
  width: 400px;
  height: 320px;
  clip-path: polygon(0 11%, 100% 0, 100% 100%, 0% 89%);
  flex: 0 0 auto;
  display: grid;
  place-items: center;

  margin-right: 20px;
  display: grid;
  place-items: center;
  position: relative;
  &::after {
    z-index: 10;
    position: absolute;
    content: "";
    background: #141414;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  h2 {
    color: #fff;
    z-index: 1000;
    justify-self: center;
    padding: 0 30px;
    position: absolute;
  }
`;
const Shape4 = styled.div`
  width: 400px !important;
  height: 411px;
  clip-path: polygon(0 11%, 100% 0, 100% 100%, 0% 89%);
  display: grid;
  flex: 0 0 auto;
  place-items: center;

  margin-right: 20px;
  position: relative;
  &::after {
    z-index: 10;
    position: absolute;
    content: "";
    background: #141414;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  h2 {
    color: #fff;
    z-index: 1000;
    justify-self: center;
    padding: 0 30px;
    position: absolute;
  }
`;

const Shape1 = styled.div`
  width: 400px !important;
  height: 411px;
  clip-path: polygon(0 0, 100% 11%, 100% 89%, 0% 100%);
  display: grid;
  flex: 0 0 auto;
  place-items: center;

  margin-right: 20px;
  position: relative;
  &::after {
    z-index: 10;
    position: absolute;
    content: "";
    background: #141414;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  h2 {
    color: #fff;
    z-index: 1000;
    justify-self: center;
    padding: 0 30px;
    position: absolute;
  }
`;
const Shape2 = styled.div`
  width: 400px;
  height: 320px;
  flex: 0 0 auto;
  clip-path: polygon(0 0, 100% 11%, 100% 89%, 0% 100%);
  display: grid;
  place-items: center;

  margin-right: 20px;
  position: relative;

  &::after {
    z-index: 10;
    position: absolute;
    content: "";
    background: #141414;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  h2 {
    color: #fff;
    z-index: 1000;
    justify-self: center;
    padding: 0 30px;
    position: absolute;
  }
`;

export default Blog;
