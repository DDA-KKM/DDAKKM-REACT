import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 50px 16px 40px 16px;
  border-top: 1px solid #f4f4f4;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  max-width: 992px;
`

export const Link = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
  span {
    font-size: 14px;
    font-weight: 500
  }
`

export const Infowrapper = styled.div`
  margin-top: 40px;
`

export const Info = styled.div`
  text-align: left;
  color: #818181;
  font-size: 12px;
  line-height: 150%;
`