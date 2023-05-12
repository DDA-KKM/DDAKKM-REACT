import * as S from './Banner.style'
import syringe from '../../../assets/syringe.png';

function Banner() {
  return(
		<S.BannerContainer>
			<S.BannerText>
				<p>
					<em>요즘 간호사들의 커리어 플랫폼</em><br />
					나를 성장시키는 따끔한 조언을 들어보세요!
				</p>
			</S.BannerText>
			<S.Syringe>
				<img src={syringe} alt="주사기"/> 
			</S.Syringe>
		</S.BannerContainer>
	)
}

export default Banner