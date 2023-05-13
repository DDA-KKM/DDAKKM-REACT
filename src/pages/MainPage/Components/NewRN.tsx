import * as S from "./NewRN.style";
import TEST from "../../../assets/Frame93.png";
import { SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import { useState } from "react";
import useMatchScreenSize from "hooks/useMatchScreenSize";

const RNs = [
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
  {
    profile: TEST,
    name: "조이",
    company: "신촌 세브란스병원",
    job: "외과 병동 간호사",
  },
];

function NewRN() {
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
    <S.NewRNContainer>
      <S.NewRNHeading>
        새로 등록된 프리셉터 💉 <br />
        <em>다양한 직군에서 일하는 간호사 현직자들이에요</em>
      </S.NewRNHeading>
      <S.NewRNWrapper>
        {isLarge ? (
          <S.SlideContainer
            slidesPerView="auto"
            onSwiper={setSlider}
            onTransitionEnd={handleChange}
          >
            {RNs.map((rn, idx) => (
              <SwiperSlide key={idx}>
                <S.RNCard>
                  <S.NewTag>NEW</S.NewTag>
                  <S.ProfileImg>
                    <img src={rn.profile} alt="프로필 이미지" />
                  </S.ProfileImg>
                  <S.UserName>{rn.name}</S.UserName>
                  <S.UserCompany>{rn.company}</S.UserCompany>
                  <S.UserJob>{rn.job}</S.UserJob>
                </S.RNCard>
              </SwiperSlide>
            ))}
          </S.SlideContainer>
        ) : (
          <S.ScrollContainer>
            {RNs.map((rn, idx) => (
              <S.RNCard key={idx}>
                <S.NewTag>NEW</S.NewTag>
                <S.ProfileImg>
                  <img src={rn.profile} alt="프로필 이미지" />
                </S.ProfileImg>
                <S.UserName>{rn.name}</S.UserName>
                <S.UserCompany>{rn.company}</S.UserCompany>
                <S.UserJob>{rn.job}</S.UserJob>
              </S.RNCard>
            ))}
          </S.ScrollContainer>
        )}
      </S.NewRNWrapper>
    </S.NewRNContainer>
  );
}

export default NewRN;
