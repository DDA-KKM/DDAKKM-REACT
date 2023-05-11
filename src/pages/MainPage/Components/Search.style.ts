import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	margin-top: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 16px 18px 16px;
	box-sizing: border-box;
	gap: 20px;
`

export const InputWrapper = styled.div`
	width: 100%;
	position: relative;
	max-width: 992px;
`

export const SearchBar = styled.input`
	width: 100%;
	height: 48px;
	border-radius: 24px;
	background-color: #F4F4F4;
	border: none;
	padding-left: 45px;
	box-sizing: border-box;
`

export const Glass = styled.img`
	position: absolute;
	left: 20px;
	top: 17px;
	width: 17.4px;
	height: 17.4px;
`

export const TagContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 6px;
	gap: 10px;
`

export const TagDesc = styled.span`
	font-weight: 500;
	font-size: 14px;
	line-height: 150%;
`

export const TagWrapper = styled.div`
	display: flex;
	gap: 6px;
`

export const Tag = styled.button`
	padding: 9px;
	background: #FFFFFF;
	border: 1px solid #EFEFEF;
	border-radius: 100px;
	cursor: pointer;
	span {
		font-weight: 500;
		font-size: 13px;
		line-height: 16px;
		color: #787878;
	}
`