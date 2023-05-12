import styled from 'styled-components'

export const NewRNContainer = styled.section`
	padding: 60px 16px;
	width: 100%;
	max-width: 992px;
	background: #F8F8FA;
`

export const NewRNHeading = styled.div`
	font-weight: 700;
	font-size: 20px;
	line-height: 140%;
	text-align: left;

	em {
		font-weight: 500;
		font-size: 14px;
		line-height: 160%;
		color: #8F9094;
	}
`

export const NewRNWrapper = styled.div`
	margin-top: 24px;
`


export const RNCard = styled.div`
	position: relative;
	border: #E6E6E6 1px solid;
	width: 128px;
	height: 209px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 24px;
`

export const NewTag = styled.span`
	font-weight: 500;
	font-size: 11px;
	line-height: 160%;
	padding: 0 6px;
	background: #FFF388;
	border-radius: 4px;
	position: absolute;
	top: 0;
`

export const ProfileImg = styled.div`
	
	img {
		border-radius: 100px;
		width: 74px;
		height: 74px;
		object-fit: cover;
		border: 1px solid #DFDFDF;
	}
`

export const UserName = styled.div`
	font-weight: 700;
	font-size: 14px;
	line-height: 160%;
	color: #000000;
	margin-top: 14px;
`

export const UserJob = styled.div`
	font-weight: 400;
	font-size: 12px;
	line-height: 160%;
	
`

export const UserCompany = styled.div`
	margin-top: 8px;
	font-weight: 600;
	font-size: 12px;
	line-height: 160%;
`