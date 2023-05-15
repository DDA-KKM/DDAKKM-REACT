import { useState } from 'react'
import * as S from '../SignIn/SignIn.style'

const TYPE = ['현재 간호사 면허가 있어요.','간호학과 학생이에요.','간호학과를 지망하거나 다른 일을 하고 있어요.']

interface Props {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>
  nextPage: () => void
}

function SignUpType({userType, setUserType, nextPage} : Props) {

  const [isValid, setIsValid] = useState<boolean>(false)

  const handleUserTypeClick = (job: string) => {
    if (userType === job) {
      setUserType('')
      setIsValid(false)
    } else {
      setUserType(job)
      setIsValid(true)
    }
  }

  return(
      <S.SignUp1>
        <S.Heading1>
          반가워요! <br />
          회원 유형을 선택해주세요.
        </S.Heading1>
        <S.UserTypeWrapper>
          {TYPE.map((job, idx) => (
            <S.UserType key={idx} isClicked={userType === job}
              onClick={()=>{
                handleUserTypeClick(job)
            }}>
              <span>{job}</span>
            </S.UserType>
          ))}
        </S.UserTypeWrapper>
        <S.NextButton 
          isClicked={isValid}
          disabled={!isValid}
          onClick={nextPage}
        >
          <span>다음</span>
        </S.NextButton>
      </S.SignUp1>
  )
}

export default SignUpType