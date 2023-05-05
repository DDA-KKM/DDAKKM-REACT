import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 67px;
  z-index: 100;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 25px;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 64px;
`;
