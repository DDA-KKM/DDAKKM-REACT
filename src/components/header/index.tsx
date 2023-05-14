import * as S from "./header.style";
import Logo from "../../assets/header-logo.png";
import TEST from "../../assets/testIMG.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <S.HeaderContainer>
        <S.Header>
          <S.Container>
            <S.Logo onClick={()=>{navigate(`/`)}}>
              <img src={Logo} alt="logo" />
            </S.Logo>
            {isLogin ? (
              <S.ProfileImg onClick={()=>{navigate(`/signin`)}}>
                <img src={TEST} alt="logo" />
              </S.ProfileImg>
            ):(
              <></>
            )}
          </S.Container>
        </S.Header>
      </S.HeaderContainer>
    </>
  );
}

export default Header;
