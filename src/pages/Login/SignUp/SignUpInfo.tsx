import { useEffect, useState } from 'react'
import * as S from '../SignIn/SignIn.style'

interface Props {
  nextPage: () => void
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>> 
  job: string;
  setJob: React.Dispatch<React.SetStateAction<string>> 
  userType: string;
}

function SignUpInfo({nextPage, userType, nickname, setNickname, job, setJob}: Props) {

  const [isValid, setIsValid] = useState<boolean>(false)
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState<boolean>(false);

  // Function to handle nickname input change
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    setIsNicknameValid(false);
    setIsNicknameChecked(false);
  };

  // Function to handle job input change
  const handleJobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (userType !== 'SN') {
      setJob(event.target.value);
    }
  };

   // Function to check nickname validity
   const checkNicknameValidity = () => {
    // Simulating a server request to check nickname validity
    // Replace this with your actual logic to check nickname uniqueness
    const isNicknameUnique = true;

    if (isNicknameUnique) {
      setIsNicknameValid(true);
    } else {
      setIsNicknameValid(false);
    }

    setIsNicknameChecked(true);
  };


  // Set the initial job value based on the previous page response
  useEffect(() => {
    // Assuming previousPageResponse contains the response from the previous page
    if (userType === 'SN') {
      setJob('간호학생');
    }
  }, [userType]);

  console.log(isNicknameValid)



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
          placeholder="닉네임을 두 자 이상 입력하세요"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <S.CheckButton onClick={checkNicknameValidity}>
          <span>중복 확인</span>
        </S.CheckButton>
        {isNicknameChecked && !isNicknameValid && nickname.length > 0 && (
          <S.InValidResult>중복된 닉네임이에요. 🥲 다른 닉네임을 정해주세요.</S.InValidResult>
        )}
        {isNicknameChecked && isNicknameValid && nickname.length > 0 && (
          <S.ValidResult>멋진 이름이네요!</S.ValidResult>
        )}
      </S.InputWrapper>
      <S.NickNameWrapper>
        직업/직함
      </S.NickNameWrapper>
        <S.JobInput
          placeholder="직업/직함을 입력하세요"
          value={job}
          onChange={handleJobChange}
          readOnly={userType === 'SN'}
          disabled={userType === 'SN'}
        />
        <S.JobDesc>
          *직업 정보는 프로필 표시 용도로 활용됩니다. <br />
          예시)RN, 응급실 간호사 등
        </S.JobDesc>
        <S.NextButton
          isClicked={isNicknameValid && job !== ''}
          disabled={!isNicknameValid || job === ''}
          onClick={nextPage}
        >
          <span>다음</span>
        </S.NextButton>
    </S.SignUp2>
  )
}

export default SignUpInfo