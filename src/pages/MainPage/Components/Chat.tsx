import * as S from "./Chat.style";

const CHAT = [
  {
    date: "2023-04-25",
    startTime: "22:00",
    duringTime: "45",
    status: "pending",
  },
];

// date를 MM월 DD일로 변경
// 시작 시간 (오전, 오후 환산) 후 시간을 더한 뒤 종료 시간 예측

function Chat() {
  return (
    <S.ChatContainer>
      <S.BlurBox />
      <S.RightCircle />
      <S.LeftCircle />
      <S.Heading>
        <em>예정된 따끔챗</em>
        <br />
        놓치지 마세요 ⭐️
      </S.Heading>
      <S.CardWrapper>
        {CHAT.map((chat, idx) => (
          <S.ChatCard key={idx}>
            <S.Info>
              <S.Date>{chat.date}</S.Date>
              <S.Status>|</S.Status>
              <S.Date>{chat.startTime}</S.Date>
              <S.Status>|</S.Status>
              <S.Status>
                {chat.status == "pending" ? "응답 대기 중" : "진행 확정!"}
              </S.Status>
            </S.Info>
            <S.Desc>헨리RN님과의 따끔챗이 응답 대기 중이에요</S.Desc>
            <S.Addi>1일 이내에 진행여부를 알려드려요.</S.Addi>
          </S.ChatCard>
        ))}
      </S.CardWrapper>
    </S.ChatContainer>
  );
}

export default Chat;
