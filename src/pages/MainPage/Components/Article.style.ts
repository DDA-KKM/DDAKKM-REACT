import styled from "styled-components";

export const ArticleContainer = styled.section`
  padding: 36px 16px 60px 16px;
  width: 100%;
  max-width: 992px;
  background-color: white;
`;

export const ArticleHeader = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 42px;
  text-align: left;
  margin-bottom: 8px;
  em {
    color: #3984f4;
  }
`;

export const Thumbnail = styled.div`
  width: 343px;
  height: 313px;

  img {
    width: 343px;
    height: 313px;
    object-fit: cover;
  }
`;
