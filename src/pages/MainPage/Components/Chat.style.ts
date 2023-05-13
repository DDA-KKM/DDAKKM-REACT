import styled from "styled-components";

export const ChatContainer = styled.section`
  padding: 40px 16px 50px 16px;
  width: 100%;
  max-width: 992px;
  position: relative;
  height: 292px;
  overflow: hidden;
`;

export const Heading = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 140%;
  text-align: left;
  em {
    color: #3984f4;
  }
`;

export const BlurBox = styled.div`
  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(37px);
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
`;

export const RightCircle = styled.div`
  width: 245px;
  height: 327px;
  right: -100px;
  top: -100px;
  position: absolute;
  background: linear-gradient(
    150.07deg,
    #b9b2f5 13.47%,
    #c0d8f4 52.73%,
    #dcf0f9 86.99%
  );
  transform: matrix(0, 1, 1, 0, 0, 0);
  border-radius: 100%;
  z-index: -3;
`;

export const LeftCircle = styled.div`
  width: 193px;
  height: 358px;
  left: -100px;
  top: 55px;
  position: absolute;
  background: linear-gradient(
    150.07deg,
    #b9b2f5 13.47%,
    #c0d8f4 52.73%,
    #dcf0f9 86.99%
  );
  transform: matrix(0, 1, 1, 0, 0, 0);
  border-radius: 100%;
  z-index: -3;
`;

export const CardWrapper = styled.div`
  margin-top: 18px;
`;

export const ChatCard = styled.div`
  width: 343px;
  height: 117px;
  border: 1px solid #d1e7ff;
  border-radius: 12px;
  padding: 20px;
  background-color: white;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Date = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 160%;
  color: #3984f4;
`;

export const Status = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 160%;
  color: #9b9b9b;
`;

export const Desc = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 160%;
  margin-top: 7px;
  text-align: left;
`;

export const Addi = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 160%;
  color: rgba(130, 130, 130, 0.8);
  text-align: left;
  margin-top: 4px;
`;
