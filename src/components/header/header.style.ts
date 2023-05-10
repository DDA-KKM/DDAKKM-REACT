/*eslint no-undef: "error"*/
/*eslint-env browser*/

import styled from 'styled-components';
import { onNotLarge } from 'styles/mediaQueries';

export const HeaderContainer = styled.div`
  padding: 0 auto;
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
  ${onNotLarge} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
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
    width: 64px;
  }
`;

export const ProfileImg = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 42px;
  }
`;