import * as S from './SignUp.style'
import { useState } from "react"
import SignUpType from "./SignUpType"
import SignUpInfo from "./SignUpInfo"

function SignUp() {

  const [page, setPage] = useState<number>(0)
  const [userType, setUserType] = useState<string>('')
  const nextPage = () => {
    setPage(page + 1)
  }

  return (
    <S.Container>
      {page === 0 && 
        <SignUpType
          userType={userType}
          setUserType={setUserType}
          nextPage={nextPage}
        />}
      {page === 1 && 
        <SignUpInfo 
          nextPage={nextPage}
        />
      }
      
    </S.Container>
  )
}

export default SignUp