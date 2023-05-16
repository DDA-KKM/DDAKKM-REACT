import * as S from '../SignIn/SignIn.style'
import { useState } from 'react'

const FAVORITE = ['임상간호', '공무원', '해외 취업', '헬스케어', '탈임상', '대학원', '국가고시', '스타트업']

interface Props {
	selected: string[]
	setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

function SignUpFav({selected, setSelected}: Props) {

	// 버튼 클릭 시 상태 토글
	const handleButtonClick = (value: string) => {
		if (selected.includes(value)) {
			setSelected(selected.filter((item) => item !== value)); // 이미 선택된 버튼이면 선택 해제
		} else {
			setSelected([...selected, value]); // 선택되지 않은 버튼이면 선택 추가
		}
	};

	const isValid = selected.length > 0; // 선택된 버튼이 있는지 여부를 검사하여 isValid 상태 설정

	return (
		<S.SignUp3>
			<S.Heading3>
				<em>관심있는 분야</em>를 알려주세요
			</S.Heading3>
			<S.Desc3>도움이 되는 정보를 알려드릴게요.</S.Desc3>
			<S.FavWrapper>
				{FAVORITE.map((fav, idx) => (
					<S.Fav 
						isClicked={selected.includes(fav)}
						key={idx} onClick={() => handleButtonClick(fav)}>
						<span>{fav}</span>
					</S.Fav>
				))}
			</S.FavWrapper>
			<S.NextButton
				isClicked={isValid}
				disabled={!isValid}
			>
				<span>가입 완료</span>
			</S.NextButton>
		</S.SignUp3>
	)
}

export default SignUpFav