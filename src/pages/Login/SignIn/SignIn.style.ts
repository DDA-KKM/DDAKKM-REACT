import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 auto;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 992px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SignInHeading = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  padding-top: 170px;
`

export const LoginDesc = styled.div`
  margin-top: 125px;
  display: flex;
  flex-direction: row;
  color: #A9A9A9;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  gap: 19px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 334px;
  span {
    white-space: nowrap;
  }
`

export const Hr = styled.hr`
  width: 100%;
  border-width: 1px 0 0 0;
  border-color: #CACACA;
  color: #CACACA;
  background-color: #CACACA;
  background: #CACACA;
`

export const Login = styled.button`
  margin-top: 35px;
  width: 334px;
  height: 57px;
  background: #F7E769;
  border-radius: 3px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  cursor: pointer;
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 74px;
  }
`

export const SignUp1 = styled.div`
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 63px 20px 150px 20px;
`

export const SignUp2 = styled.div`
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 57px 20px 150px 20px;
`

export const SignUp3 = styled.div`
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 87px 20px 150px 20px;
`

export const Heading1 = styled.div`
  width: 334px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  text-align: left;
`

export const Heading2 = styled.div`
  width: 334px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  text-align: left;
  margin-bottom: 24px;
`

export const Heading3 = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  em {
    color: #3984F4;
  }
`

export const Desc3 = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #646464;
  margin-top: 6px;
`

export const UserTypeWrapper = styled.div`
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin-bottom: 70px;
`

export const UserType = styled.button<{ isClicked: boolean }>`
  width: 334px;
  height: 57px;
  background: ${({ isClicked }) => (isClicked ? ' #E6F0FF;' : '#F9F9F9;')};
  border: ${({ isClicked }) => (isClicked ? '1px solid #3984F4;' : '1px solid #E7E7E7;')};  
  border-radius: 6px;
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 15px;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 70px;
  }
`

export const NextButton = styled.button<{ isClicked: boolean }>`
  width: 334px;
  height: 57px;
  background: ${({ isClicked }) => (isClicked ? ' #3984F4;' : '#C7C7C7;')};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  span {
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
  }
`

export const NickNameWrapper = styled.div`
  font-weight: 500;
  font-size: 15px;
  width: 334px;
  text-align: left;
  margin-bottom: 18px;
  line-height: 18px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  margin-bottom: 46px;
  position: relative;
`

export const ValidResult = styled.span`
  position: absolute;
  font-weight: 600;
  font-size: 12px;
  color: blue;
  top: 60px;
  left: 8px;
`

export const InValidResult = styled.span`
  position: absolute;
  font-weight: 600;
  font-size: 12px;
  color: red;
  top: 60px;
  left: 8px;
`

export const NickNameInput = styled.input`
  width: 235px;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 6px;
  padding-left: 15px;
  ::placeholder {
    color: #C7C7C7;
    font-weight: 500;
    font-size: 15px;
    line-height: 70px;
  }
`

export const CheckButton = styled.button`
  width: 92px;
  height: 54px;
  background: #000000;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 70px;
    color: #FFFFFF;
  }
`

export const JobInput = styled.input`
  width: 334px;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 6px;
  padding-left: 15px;
  ::placeholder {
    color: #C7C7C7;
    font-weight: 500;
    font-size: 15px;
    line-height: 70px;
  }
`

export const JobDesc = styled.div`
  width: 334px;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #B3B3B3;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 74px;
`

export const FavWrapper = styled.div`
  margin-top: 49px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 100px;
`

export const Fav = styled.button<{isClicked: boolean}>`
  background: #F9F9F9;
  border: 1px solid #E7E7E7;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  background: ${({ isClicked }) => (isClicked ? ' #E6F0FF;' : '#F9F9F9;')};
  border: ${({ isClicked }) => (isClicked ? '1px solid #3984F4;' : '1px solid #E7E7E7;')};  

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 40px
  }

`