import styled from 'styled-components'

export const BannerContainer = styled.section`
	width: 100%;
	padding: 21px 16px;
	background: linear-gradient(94.64deg, #B6DCFF -21.5%, #2658D9 106.06%);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const BannerText = styled.div`
	color: white;
	text-align: left;
	font-weight: 500;
	font-size: 13px;
	line-height: 160%;
	align-self: center;
	em {
		font-weight: 700;
		font-size: 18px;
	}
`

export const Syringe = styled.div`
	width: 55px;
	height: 48px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;	
	}
`