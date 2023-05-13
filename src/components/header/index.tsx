/*eslint no-undef: "error"*/
/*eslint-env browser*/

import * as S from "./header.style";
import Logo from "../../assets/header-logo.png";
import TEST from "../../assets/testIMG.png";
// import useMatchScreenSize from 'hooks/useMatchScreenSize';

function Header() {
  // const { isLarge } = useMatchScreenSize();

  return (
    <>
      <S.HeaderContainer>
        <S.Header>
          <S.Container>
            <S.Logo>
              <img src={Logo} alt="logo" />
            </S.Logo>
            <S.ProfileImg>
              <img src={TEST} alt="logo" />
            </S.ProfileImg>
          </S.Container>
        </S.Header>
      </S.HeaderContainer>
    </>
  );
}

export default Header;
