import * as S from './NewRN.style'
import TEST from '../../../assets/Frame93.png'

const RNs = [
	{
		profile: TEST,
		name: '조이',
		company: '신촌 세브란스병원',
		job: '외과 병동 간호사'
	}
]

function NewRN() {
	return (
		<S.NewRNContainer>
			<S.NewRNHeading>
				새로 등록된 프리셉터 💉 <br />
				<em>다양한 직군에서 일하는 간호사 현직자들이에요</em>
			</S.NewRNHeading>
			<S.NewRNWrapper>
				{RNs.map((rn, idx)=>(
					<S.RNCard key={idx}>
						<S.NewTag />
						<S.ProfileImg>
							<img src={rn.profile}/>
						</S.ProfileImg>
						<S.UserName>
							{rn.name}
						</S.UserName>
						<S.UserCompany>
							{rn.company}
						</S.UserCompany>
						<S.UserJob>
							{rn.job}
						</S.UserJob>
					</S.RNCard>
				))}
				

			</S.NewRNWrapper>
		</S.NewRNContainer>
	)
}

export default NewRN