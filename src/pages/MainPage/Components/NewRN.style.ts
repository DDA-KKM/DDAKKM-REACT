import styled from "styled-components";
import { Swiper } from "swiper/react";
import { onNotLarge } from "styles/mediaQueries";

export const NewRNContainer = styled.section`
  padding: 60px 0;
  width: 100%;
  max-width: 992px;
  background: #f8f8fa;
`;

export const NewRNHeading = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  text-align: left;
  padding: 0 16px;

  em {
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #8f9094;
  }
`;

export const RNCard = styled.div`
  position: relative;
  border: #e6e6e6 1px solid;
  width: 128px;
  height: 209px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  background: #ffffff;
  border-radius: 12px;
`;

export const NewTag = styled.span`
  font-weight: 500;
  font-size: 11px;
  line-height: 160%;
  padding: 0 6px;
  background: #fff388;
  border-radius: 4px;
  position: absolute;
  top: -10px;
`;

export const ProfileImg = styled.div`
  img {
    border-radius: 100px;
    width: 74px;
    height: 74px;
    object-fit: cover;
    border: 1px solid #dfdfdf;
  }
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: #000000;
  margin-top: 14px;
`;

export const UserJob = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
`;

export const UserCompany = styled.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 160%;
`;

export const NewRNWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  overflow-x: hidden;
  padding: 0 16px;
  ${onNotLarge} {
    overflow-x: scroll;
  }
  &::-webkit-scrollbar {
    background: none;
  }
`;

export const ScrollContainer = styled.div`
  width: 1250px;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

export const SlideContainer = styled(Swiper)`
  height: auto;
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
  .swiper-wrapper {
    display: -webkit-inline-box;
    width: 100%;
  }
  .swiper-slide {
    display: flex;
    width: 140px !important;
  }
`;
