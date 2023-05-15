import { useState } from "react"
import SignUpType from "./SignUpType"

function SignUp() {

  const [page, setPage] = useState<number>(0)
  const [userType, setUserType] = useState<string>('')
  const nextPage = () => {
    setPage(page + 1)
  }

  return (
    <>
      {page === 0 && 
        <SignUpType
          userType={userType}
          setUserType={setUserType}
          nextPage={nextPage}
        />}
    </>
  )
}

export default SignUp