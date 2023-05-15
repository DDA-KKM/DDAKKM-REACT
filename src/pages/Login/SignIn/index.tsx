import React from "react"
import * as S from './SignIn.style'

function SignIn() {
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
        <S.Login>
          <span>카카오로 시작하기</span>
        </S.Login>
      </S.Wrapper>
    </S.Container>
  )
}

export default SignIn