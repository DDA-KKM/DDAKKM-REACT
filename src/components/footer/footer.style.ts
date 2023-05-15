import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 auto;
`;

export const FooterContainer = styled.footer`
  border-top: 1px solid #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  margin-top: 20px;
`

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  max-width: 992px;
  padding: 50px 0;
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