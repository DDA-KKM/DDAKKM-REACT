import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  max-width: 992px;
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 25px;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    object-fit: cover;
    width: 64px;
  }
`;

export const ProfileImg = styled.div`
  display: flex;
  align-items: center;
  img {
    border: 1px solid #dfdfdf;
    object-fit: cover;
    border-radius: 100%;
    width: 42px;
  }
`;
