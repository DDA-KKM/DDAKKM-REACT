import * as S from './Search.style'
import Glass from '../../../assets/glass.png';

const SEARCHTAG = ['대학원', '응급실 간호사', '삼성서울병원']

function Search() {
	return (
		<S.Container>
			<S.InputWrapper>
				<S.SearchBar
					placeholder='병원, 직무, 관심 분야로 검색하기'
				/>
				<S.Glass src={Glass}/>
			</S.InputWrapper>
			<S.TagContainer>
				<S.TagDesc>급상승 검색어 :</S.TagDesc>
				<S.TagWrapper>
					{SEARCHTAG.map((tag, index) => (
						<S.Tag key={index}>
							<span>{tag}</span>
						</S.Tag>
					))}
				</S.TagWrapper>
			</S.TagContainer>
		</S.Container>
	)
}

export default Search