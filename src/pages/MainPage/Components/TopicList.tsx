import * as S from "./TopicList.style";
import TEST from "../../../assets/Frame93.png";
import useMatchScreenSize from "hooks/useMatchScreenSize";
import { useState } from "react";
import SwiperClass from "swiper";
import { SwiperSlide } from "swiper/react";

const TOPIC = [
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
    topic: "간호사에서 승무원이 된 이야기가 궁금하다면?",
    desc: "안녕하세요. 저는 간호사를 하다가 승무원으로 재직한 지 8년이 되어가는 조이라고 합니다. 저의 인사이트가 궁금하시다면 따끔챗 요청을 해주세요!",
    tag: ["간호사", "승무원", "세브란스"],
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
    topic: "간호사에서 승무원이 된 이야기가 궁금하다면?",
    desc: "안녕하세요. 저는 간호사를 하다가 승무원으로 재직한 지 8년이 되어가는 조이라고 합니다. 저의 인사이트가 궁금하시다면 따끔챗 요청을 해주세요!",
    tag: ["간호사", "승무원", "세브란스"],
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
    topic: "간호사에서 승무원이 된 이야기가 궁금하다면?",
    desc: "안녕하세요. 저는 간호사를 하다가 승무원으로 재직한 지 8년이 되어가는 조이라고 합니다. 저의 인사이트가 궁금하시다면 따끔챗 요청을 해주세요!",
    tag: ["간호사", "승무원", "세브란스"],
  },
  {
    profile: TEST,
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
                      <S.UserCompany>
                        <span>{topic.company}</span>
                        <em>|</em>
                        <em>{topic.job}</em>
                      </S.UserCompany>
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
                      <S.UserCompany>
                        <span>{topic.company}</span>
                        <em>|</em>
                        <em>{topic.job}</em>
                      </S.UserCompany>
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
