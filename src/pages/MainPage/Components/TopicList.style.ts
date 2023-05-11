import styled from 'styled-components'

export const TopicContainer = styled.section`
	padding: 25px 16px;
`

export const TopicHeader = styled.div`
	font-weight: 700;
	font-size: 20px;
	text-align: left;
	margin-bottom: 24px;
	em {
		font-weight: 500;
		font-size: 14px;
		line-height: 160%;
		color: #8F9094;
	}
`

export const TopicWrapper = styled.div`
`

export const TopicCard = styled.div`
	width: 274px;
	height: 277px;
	border: #E6E6E6 1px solid;
	padding: 18px 16px;	
	border-radius: 15px;
`

export const Profile = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`

export const ProfileImg = styled.div`
	
	img {
		border-radius: 100px;
		width: 48px;
		height: 48px;
		object-fit: cover;
	}
`

export const UserInfo = styled.div`

`

export const UserName = styled.div`
	font-weight: 700;
	font-size: 14px;
	line-height: 160%;
	color: #000000;
	text-align: left;
`

export const UserCompany = styled.div`
	font-weight: 600;
	font-size: 12px;
	line-height: 160%;
	color: #777A82;
	text-align: left;

	em {
		margin-left: 8px;
		font-weight: 400;
		font-size: 12px;
		line-height: 160%;
		color: #777A82;
	}
`