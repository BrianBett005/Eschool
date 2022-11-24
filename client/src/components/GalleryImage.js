import React from "react";
import styled from "styled-components";
const GalleryImage = () => {
  return (
    <Wrapper>
      <Image src="https://res.cloudinary.com/dpdtbtb87/image/upload/v1668338052/vlaxhuyyxnxbj38sjv3g.jpg" />
      <Text>Graduation ceremony</Text>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    height: 60%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Text = styled.h2`
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #e5e5e5;
  z-index: 1000;
  font-family: "Dm Sans";
  font-size: 18px;
`;
export default GalleryImage;
