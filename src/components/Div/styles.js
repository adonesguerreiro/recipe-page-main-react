import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	width: 560px;
	height: 98px;
	margin-bottom: 15px;

	@media screen and (max-width: 375px) {
		display: grid;
		width: 320px;
		padding-bottom: 60px;
	}
`;

export const Title = styled.h1`
	font-family: youngserif-regular;
	font-size: x-large;
	color: ${(props) => props.theme.colors.darkgray};
	font-weight: 400;
	margin-bottom: 15px;
`;

export const Description = styled.p`
	font-family: outfit-regular;
	font-size: smaller;
	color: ${(props) => props.theme.colors.lightgray};
	text-align: justify;
`;
