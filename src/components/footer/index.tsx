import React from "react"
import * as S from './footer.style'

function Footer() {
	return(		
		<S.FooterContainer>
			<S.Wrapper>
				<S.Link>
					<span>따끔 소개</span>
					<span>이용약관</span>
					<span>개인정보 처리 방침</span>
					<span>문의하기</span>
				</S.Link>
				<S.Infowrapper>
					<S.Info>따끔 | 대표 김정현 | 경기도 양주시 고암길 306-40 219동 2003호 | teamddkkofficial@gmail.com | 사업자 등록번호 - 873-56-00803
						| 개인정보 관리 책임자: 유창연 | 통신판매업 신고 번호 → 대기 중  | 호스팅 제공자
						© 따끔 ALL RIGHTS RESERVED.
					</S.Info>
					</S.Infowrapper>
			</S.Wrapper>
		</S.FooterContainer>
	)
}

export default Footer