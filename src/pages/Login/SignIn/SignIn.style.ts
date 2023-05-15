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
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  cursor: pointer;
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 74px;
  }
`