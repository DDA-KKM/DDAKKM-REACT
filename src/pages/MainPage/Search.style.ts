/*eslint no-undef: "error"*/
/*eslint-env browser*/

import styled from 'styled-components';
import { onNotLarge } from 'styles/mediaQueries';

export const Container = styled.section`
	padding: 0 16px;
	max-width: 992px;
  width: 100%;
`

export const SearchBar = styled.input`
  width: 100%;
	height: 48px;
	border-radius: 24px;
	background-color: F4F4F4;
`