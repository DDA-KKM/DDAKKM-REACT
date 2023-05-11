import * as S from './Banner.style'
import syringe from '../../../assets/syringe.png';

function Banner() {
  return(
		<S.BannerContainer>
			<S.BannerText>
				<p>
					<em>간호사 면허가 있으시군요!</em><br />
					커리어 프리셉터 등록하고 부수입을 만들어보세요!
				</p>
			</S.BannerText>
			<S.Syringe>
				<img src={syringe} alt="주사기"/> 
			</S.Syringe>
		</S.BannerContainer>
	)
}

export default Banner