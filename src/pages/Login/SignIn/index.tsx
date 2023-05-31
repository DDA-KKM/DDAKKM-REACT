import React from "react"
import * as S from './SignIn.style'
import { useNavigate } from "react-router-dom";

function SignIn() {

  const navigate = useNavigate()

  const handleOnClick = () => {
    const clientId = process.env.REACT_APP_KAKAO_OAUTH_KEY;
    const redirectUri = "http://localhost:3000/user/oauth2/kakao";
    const responseType = "code";
  
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
  
    window.location.href = url;
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.SignInHeading>
          지금 바로 시작하고 <br />
          간호사 커리어 앞서가기
        </S.SignInHeading>
        <S.LoginDesc>
          <S.Hr />
          <span>SNS 계정으로 로그인</span>
          <S.Hr />
        </S.LoginDesc>
        <S.Login
          onClick={handleOnClick}  
        >
          <span>카카오로 시작하기</span>
        </S.Login>
      </S.Wrapper>
    </S.Container>
  )
}

export default SignIn