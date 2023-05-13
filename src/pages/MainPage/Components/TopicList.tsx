import * as S from "./TopicList.style";
import TEST from "../../../assets/testIMG.png";
import TEST2 from "../../../assets/Ellipse 30.png";
import TEST3 from "../../../assets/Ellipse 31.png";
import TEST4 from "../../../assets/Ellipse 33.png";
import LSY from "../../../assets/IMG_4167.jpg";
import LSY2 from "../../../assets/LSY2.png";
import useMatchScreenSize from "hooks/useMatchScreenSize";
import { useState } from "react";
import SwiperClass from "swiper";
import { SwiperSlide } from "swiper/react";

const TOPIC = [
  {
    profile: LSY2,
    name: "이서윤",
    company: "강북삼성병원",
    job: "응급실 간호사",
    topic: "🛫 간호사에서 승무원이 된 이야기가 궁금하다면?",
    desc: "응급실 간호사로 재직하다 승무원으로 이직했습니다. 간호사 출신 승무원이 어떤 점이 좋은지 알려드릴게요! 어디에서도 알려주지 않는 면접 준비 방법까지 알려드릴 수 있어요!",
    tag: ["간호사", "승무원", "세브란스"],
  },
  {
    profile: TEST2,
    name: "헨리",
    company: "강북삼성병원",
    job: "응급실 간호사",
    topic: "응급실 간호사로 살아남기",
    desc: "안녕하세요. 저는 간호사를 하다가 승무원으로 재직한 지 8년이 되어가는 조이라고 합니다. 저의 인사이트가 궁금하시다면 따끔챗 요청을 해주세요!",
    tag: ["간호사", "승무원", "세브란스"],
  },
  {
    profile: TEST3,
    name: "에녹",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
    topic: "간호사에서 승무원이 된 이야기가 궁금하다면?",
    desc: "안녕하세요. 저는 간호사를 하다가 승무원으로 재직한 지 8년이 되어가는 조이라고 합니다. 저의 인사이트가 궁금하시다면 따끔챗 요청을 해주세요!",
    tag: ["간호사", "승무원", "세브란스"],
  },
  {
    profile: TEST4,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
    topic: "간호사에서 승무원이 된 이야기가 궁금하다면?",
    desc: "안녕하세요. 저는 간호사를 하다가 승무원으로 재직한 지 8년이 되어가는 조이라고 합니다. 저의 인사이트가 궁금하시다면 따끔챗 요청을 해주세요!",
    tag: ["간호사", "승무원", "세브란스"],
  },
];

function TopicList() {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [slider, setSlider] = useState<SwiperClass>();
  const { isLarge } = useMatchScreenSize();

  const handleChange = () => {
    if (!slider) return;
    setIsLastSlide(slider.isEnd);
    setIsFirstSlide(slider.isBeginning);
  };

  return (
    <S.TopicContainer>
      <S.TopicHeader>
        간호학과 학생들이 궁금해하는 주제
        <br />
        <em>간호 관련 현직자들의 개성 담긴 스토리를 확인해보세요.</em>
      </S.TopicHeader>
      <S.TopicWrapper>
        {isLarge ? (
          <S.SlideContainer
            slidesPerView="auto"
            onSwiper={setSlider}
            onTransitionEnd={handleChange}
          >
            {TOPIC.map((topic, idx) => (
              <SwiperSlide key={idx}>
                <S.TopicCard>
                  <S.Profile>
                    <S.ProfileImg>
                      <img src={topic.profile} alt="프로필 이미지" />
                    </S.ProfileImg>
                    <S.UserInfo>
                      <S.UserName>{topic.name} 프리셉터</S.UserName>
                      <S.UserCareer>
                        <S.UserCompany>{topic.company}</S.UserCompany>
                        <em>|</em>
                        <S.UserJob>{topic.job}</S.UserJob>
                      </S.UserCareer>
                    </S.UserInfo>
                  </S.Profile>
                  <S.Topic>{topic.topic}</S.Topic>
                  <S.Desc>{topic.desc}</S.Desc>
                  <S.Tag>
                    {topic.tag.map((value, idx) => (
                      <span key={idx}>{value}</span>
                    ))}
                  </S.Tag>
                </S.TopicCard>
              </SwiperSlide>
            ))}
          </S.SlideContainer>
        ) : (
          <>
            <S.ScrollContainer>
              {TOPIC.map((topic, idx) => (
                <S.TopicCard key={idx}>
                  <S.Profile>
                    <S.ProfileImg>
                      <img src={topic.profile} alt="프로필 이미지" />
                    </S.ProfileImg>
                    <S.UserInfo>
                      <S.UserName>{topic.name} 프리셉터</S.UserName>
                      <S.UserCareer>
                        <S.UserCompany>{topic.company}</S.UserCompany>
                        <em>|</em>
                        <S.UserJob>{topic.job}</S.UserJob>
                      </S.UserCareer>
                    </S.UserInfo>
                  </S.Profile>
                  <S.Topic>{topic.topic}</S.Topic>
                  <S.Desc>{topic.desc}</S.Desc>
                  <S.Tag>
                    {topic.tag.map((value, idx) => (
                      <span key={idx}>{value}</span>
                    ))}
                  </S.Tag>
                </S.TopicCard>
              ))}
            </S.ScrollContainer>
          </>
        )}
      </S.TopicWrapper>
    </S.TopicContainer>
  );
}

export default TopicList;
