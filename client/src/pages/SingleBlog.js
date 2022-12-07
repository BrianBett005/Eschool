import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BlueButton from "../components/BlueButton";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import SingleComment from "../components/SingleComment";
import TextAreaWithLabel from "../components/TextAreaWithLabel";
import {
  createComment,
  getBlogComments,
} from "../redux/actions/commentActions";
const SingleBlog = () => {
  const location = useLocation();
  const blogId = location.pathname.split("/")[2];

  const { blogs } = useSelector((state) => state.blogs);

  const blog = blogs?.posts?.find((blog) => blog._id === blogId);
  const [userReview, setReview] = useState("");
  const [rating, setRatingValue] = useState(null);
  const [hoverValue, setHoverValue] = useState(null);
  const review = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogComments(blogId));

    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  useEffect(() => {
    if (review.comment) {
      setRatingValue(null);
      setReview("");
    }
  }, [review.comment]);
  const addReview = () => {
    const comment = { rating, title: userReview, post: blogId };
    dispatch(createComment(comment));
  };
  const { comments, loading, error } = useSelector((state) => state.comments);
  // const { error, success } = review;

  return (
    <Wrapper>
      <Navbars>
        <NavbarOne />
        <NavbarTwo />
      </Navbars>
      <ContentWrapper>
        <Image src={blog?.image?.url} />
        <Time>
          <h1>{new Date(blog?.createdAt).toDateString()}</h1>
          <div className="dot"></div>
          <h2>6 min read</h2>
          <Ratings>
            {Array(blog?.averageRating)
              .fill()
              .map((_, i) => {
                return (
                  <Star key={i}>
                    <FaStar />
                  </Star>
                );
              })}
          </Ratings>
        </Time>
        <Title>{blog?.title}</Title>
        <HorizontalWrapper>
          <Left>
            <Profile>
              <ProfilePic src={blog?.author?.profilePic?.url} />
              <div>
                <Author>{blog?.author?.username}</Author>
                <AuthorTitle>{blog?.author?.title}</AuthorTitle>
              </div>
            </Profile>
            <Category></Category>
            <Categories>
              <Category1>{blog?.category}</Category1>
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
          <Description>{blog?.content}</Description>
        </HorizontalWrapper>
        <ReviewWrapper>
          <ReviewsTitle>Comments</ReviewsTitle>
          <TextAreaWithLabel
            label="Your comment"
            placeholder="Comment on this post"
            onChange={handleChange}
            rows={4}
          ></TextAreaWithLabel>
          <Rating>
            {Array(5)
              .fill()
              .map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <RatingLabel key={i}>
                    <Input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onChange={() => setRatingValue(ratingValue)}
                    />
                    <RatingStar>
                      <FaStar
                        color={
                          ratingValue <= (hoverValue || rating)
                            ? "#ffc107"
                            : "gray"
                        }
                        size={30}
                        onMouseEnter={() => setHoverValue(ratingValue)}
                        onMouseLeave={() => setHoverValue(null)}
                      />
                    </RatingStar>
                  </RatingLabel>
                );
              })}
          </Rating>
          <BlueButton
            onClick={addReview}
            disabled={review.loading || !rating || !userReview}
            title={review?.loading ? "Submitting..." : "Submit"}
          />
        </ReviewWrapper>
        {blog?.numOfComments && (
          <Title3>Number of comments: {blog.numOfComments}</Title3>
        )}
        <CommentsList>
          {loading ? (
            <Loader />
          ) : error ? (
            <h3>There was an error loading the comments</h3>
          ) : (
            comments?.map((comment) => (
              <SingleComment key={comment._id} {...comment} />
            ))
          )}
        </CommentsList>
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
const Ratings = styled.div`
  display: flex;
  margin-left: 10px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1150px) {
    padding: 10px 100px;
  }
  @media screen and (max-width: 1150px) {
    padding: 10px 20px;
  }
`;
const Time = styled.div`
  display: flex;
  margin: 40px 0;
  align-items: center;
  text-align: center;
  @media screen and(max-width:600px) {
    margin: 20px 0;
  }
  h1 {
    font-family: "DM Sans";
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: #141414;
  }
  .dot {
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
  object-fit: fill;
  @media screen and (max-width: 600px) {
    height: 400px;
    object-fit: cover;
  }
`;

const Title = styled.h1`
  font-family: "Test Heldane Display", "Dm Sans";
  font-weight: 500;
  font-size: 48px;
  line-height: 96px;
  letter-spacing: 0.04em;
  color: #141414;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  padding: 30px 0 40px;
  color: #141414;
  @media screen and (max-width: 800px) {
    line-height: 50px;
    padding: 20px 0;
    font-size: 50px;
    align-self: flex-start;
  }
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
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
const Description = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 45px;
  color: #141414;
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
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
const Input = styled.input`
  display: none;
`;
const RatingLabel = styled.label``;
const RatingStar = styled.span`
  transition: color 0.2s;
  cursor: pointer;
`;
const Star = styled.div`
  color: yellow;
  padding-right: 1px;
`;
const Rating = styled.div``;
const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  max-width: 600px;
  width: 100%;
`;
const ReviewsTitle = styled.h3`
  text-decoration: underline;
  margin-bottom: 3px;
`;
const CommentsList = styled.div`
  display: grid;
  grid-gap: 20px;
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Title3 = styled.h3`
  font-size: 16px;
`;
export default SingleBlog;
