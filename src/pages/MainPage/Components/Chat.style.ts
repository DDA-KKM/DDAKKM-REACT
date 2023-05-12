import styled from 'styled-components'

export const ChatContainer = styled.section`
	padding: 40px 16px 50px 16px;
	width: 100%;
	max-width: 992px;
	background: rgba(255, 255, 255, 0.32);
	backdrop-filter: blur(26px);
	position: relative;
	z-index: -2;
	height: 292px;
`

export const Heading = styled.div`
	font-weight: 700;
	font-size: 22px;
	line-height: 140%;
	text-align: left;
	em {
		color: #3984F4;
	}
`

export const RightBlur= styled.div`
	width: 245px;
	height: 327px;
	right: -100px;
	top: -100px;
	position: absolute;
	background: linear-gradient(330.74deg, rgba(0, 172, 209, 0) -6.98%, #E371FF 138.38%);
	transform: matrix(0, 1, 1, 0, 0, 0);
	border-radius: 100%;
	z-index: -1;
`

export const LeftBlur= styled.div`
	width: 193px;
	height: 358px;
	left: -100px;
	top: 55px;
	position: absolute;
	background: linear-gradient(330.74deg, rgba(0, 172, 209, 0) -6.98%, #E371FF 138.38%);
	transform: matrix(0, 1, 1, 0, 0, 0);
	border-radius: 100%;
`

export const CardWrapper = styled.div`
	margin-top: 18px;
`

export const ChatCard = styled.div`
	width: 343px;
	height: 117px;
	border: 1px solid #D1E7FF;
	border-radius: 12px;
	padding: 20px;
`

export const Info = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`

export const Date = styled.span`
	font-weight: 700;
	font-size: 13px;
	line-height: 160%;
	color: #3984F4;
`

export const Status = styled.span`
	font-weight: 500;
	font-size: 13px;
	line-height: 160%;
	color: #9B9B9B;
`

export const Desc = styled.div`
	font-weight: 700;
	font-size: 15px;
	line-height: 160%;
	margin-top: 7px;
	text-align: left;
`

export const Addi = styled.div`
	font-weight: 500;
	font-size: 13px;
	line-height: 160%;
	color: rgba(130, 130, 130, 0.8);
	text-align: left;
	margin-top: 4px;
`