import * as S from "./header.style";
import Logo from "../../assets/header-logo.png";
import TEST from "../../assets/testIMG.png";

function Header() {

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
