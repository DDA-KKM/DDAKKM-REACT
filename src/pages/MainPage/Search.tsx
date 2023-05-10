/*eslint no-undef: "error"*/
/*eslint-env browser*/

import * as S from './Search.style'

function Search() {
	return (
		<S.Container>
			<S.SearchBar
				placeholder='병원, 직무, 관심 분야로 검색하기'
			/>
		</S.Container>
	)
}

export default Search