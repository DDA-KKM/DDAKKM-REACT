import styled from "styled-components";
import { Swiper } from "swiper/react";
import { onNotLarge } from "styles/mediaQueries";

export const TopicContainer = styled.section`
  padding: 25px 0 60px 0;
  width: 100%;
  max-width: 992px;
`;

export const TopicHeader = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  margin-bottom: 24px;
  padding: 0 16px;
  em {
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #8f9094;
  }
`;

export const TopicWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 16px;
  &::-webkit-scrollbar {
    background: none;
  }
  ${onNotLarge} {
    overflow-x: scroll;
  }
`;

export const ScrollContainer = styled.div`
  width: 1150px;
  display: flex;
  gap: 18px;
`;

export const TopicCard = styled.div`
  width: 274px !important;
  height: 277px;
  border: #e6e6e6 1px solid;
  padding: 18px 16px;
  border-radius: 15px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

export const ProfileImg = styled.div`
  img {
    border-radius: 100px;
    width: 48px;
    height: 48px;
    object-fit: cover;
  }
`;

export const UserInfo = styled.div``;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: #000000;
  text-align: left;
`;

export const UserCareer = styled.div`
  text-align: left;

  em {
    margin-left: 7px;
    color: #e4e6e9;
  }
`;

export const UserCompany = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 160%;
  color: #777a82;
`;

export const UserJob = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: #777a82;
  margin-left: 7px;
`;

export const Topic = styled.div`
  margin-top: 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 155%;
  text-align: left;
`;

export const Desc = styled.div`
  margin-top: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 155%;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const Tag = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 5px;

  span {
    padding: 1px 6px;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    background: rgba(57, 132, 244, 0.1);
    border-radius: 4px;
    color: #3984f4;
  }
`;

export const SlideContainer = styled(Swiper)`
  height: auto;
  width: 100%;
  flex-direction: row;
  /* margin-top: 10px; */

  .swiper-wrapper {
    display: -webkit-inline-box;
    width: 100%;
  }
  .swiper-slide {
    display: flex;
    width: 292px !important;
  }
`;
