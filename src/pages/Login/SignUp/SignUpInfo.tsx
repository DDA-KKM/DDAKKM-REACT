import { useState } from 'react'
import * as S from '../SignIn/SignIn.style'

interface Props {
  nextPage: () => void
}

function SignUpInfo({nextPage}: Props) {

  const [isValid, setIsValid] = useState<boolean>(false)

  return (
    <S.SignUp2>
      <S.Heading2>
        회원 정보 등록    
      </S.Heading2>
      <S.NickNameWrapper>
        닉네임
      </S.NickNameWrapper>
      <S.InputWrapper>
        <S.NickNameInput
          placeholder='닉네임을 두 자 이상 입력하세요'
        />
        <S.CheckButton>
          <span>중복 확인</span>
        </S.CheckButton>
      </S.InputWrapper>
      <S.NickNameWrapper>
        직업/직함
      </S.NickNameWrapper>
        <S.JobInput
          placeholder='직업/직함을 입력하세요'
        />
        <S.JobDesc>
          *직업 정보는 프로필 표시 용도로 활용됩니다. <br />
          예시)RN, 응급실 간호사 등
        </S.JobDesc>
        <S.NextButton
          isClicked={isValid}
          disabled={!isValid}
          onClick={nextPage}
        >
          <span>다음</span>
        </S.NextButton>
    </S.SignUp2>
  )
}

export default SignUpInfo