import * as S from './SignUp.style'
import { useState } from "react"
import SignUpType from "./SignUpType"
import SignUpInfo from "./SignUpInfo"
import SignUpFav from './SignUpFav'

function SignUp() {

  const [page, setPage] = useState<number>(0)
  const [userType, setUserType] = useState<string>('')
  const [nickname, setNickname]= useState<string>('')
  const [job, setJob]= useState<string>('')
  const [selected, setSelected] = useState<string[]>([]); // 선택된 버튼들의 값을 저장하는 배열

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
          userType={userType}
          nickname={nickname}
          setNickname={setNickname}
          job={job}
          setJob={setJob}
          nextPage={nextPage}
        />
      }
      {page === 2 &&
        <SignUpFav
        selected={selected}
        setSelected={setSelected}
        />
      }
    </S.Container>
  )
}

export default SignUp