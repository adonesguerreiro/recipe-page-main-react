import styled from "styled-components";

export const SectionPreparation = styled.section`
	padding: 20px 20px 25px 20px;
	background-color: hsl(322, 100%, 98%);
	border-radius: 10px;
`;

export const TitlePreparation = styled.h1`
	font-family: outfit-regular;
	font-size: 0.9rem;
	margin-bottom: 10px;
	color: hsl(332, 51%, 32%);
`;

export const LiPreparation = styled.li`
	margin-left: 10px;
	font-family: outfit-regular;
	font-size: x-small;
	padding: 2px;

	&::marker {
		color: hsl(332, 51%, 32%);
		font-size: x-small;
	}
`;

export const SpanPreparation = styled.span`
	font-family: outfit-bold;
	margin-left: 18px;
	font-size: x-small;
`;

export const SectionIngredients = styled.section`
	padding: 20px 0px;
	border-bottom: 1px solid hsl(30, 18%, 87%);

	@media screen and (max-width: 375px) {
		width: 250px;
	}
`;

export const TitleIngredients = styled.h1`
	font-family: youngserif-regular;
	margin-bottom: 10px;
	color: hsl(14, 45%, 36%);
	font-weight: 400;
`;

export const LiIngredients = styled.li`
	margin-left: 30px;
	list-style: disc;
	font-family: outfit-regular;
	font-size: x-small;
	padding: 2px;
	color: hsl(24, 5%, 18%);

	&::marker {
		color: hsl(14, 45%, 36%);
		font-size: x-small;
		padding-left: 10px;
	}

	@media screen and (max-width: 375px) {
		font-size: 0.8rem;
	}
`;

export const SectionInstructions = styled.section`
	padding: 20px 0px;
	border-bottom: 1px solid hsl(30, 18%, 87%);
`;

export const TitleInstructions = styled.h1`
	font-family: youngserif-regular;
	margin-bottom: 10px;
	color: hsl(14, 45%, 36%);
	font-weight: 400;
`;

export const LiInstructions = styled.li`
	margin-left: 30px;
	font-family: outfit-regular;
	font-size: x-small;
	padding: 2px;
	color: ${(props) => props.theme.colors.darkgray};

	&::marker {
		font-family: outfit-bold;
		color: ${(props) => props.theme.colors.brown};
	}
`;

export const SpanInstructions = styled.span`
	font-family: outfit-bold;
`;

export const SectionNutrition = styled.section`
	padding: 20px 0px;
	border-bottom: 0;
`;

export const TitleNutrition = styled.h1`
	font-family: youngserif-regular;
	margin-bottom: 10px;
	color: ${(props) => props.theme.colors.brown};
	font-weight: 400;
`;

export const TextNutrition = styled.p`
	font-family: outfit-regular;
	font-size: 0.8rem;
	padding: 15px;
`;

export const LiNutrition = styled.li`
	list-style: none;
	border-bottom: 1px solid ${(props) => props.theme.colors.beige};
	font-size: x-small;
	font-family: outfit-regular;
	display: flex;
	justify-content: space-between;
	padding: 10px;

	&:last-child {
		border-bottom: none;
	}
`;

export const SpanNutrition = styled.span`
	color: ${(props) => props.theme.colors.brown};
	font-weight: 600;
	display: inline-block;
	width: 80%;
	text-align: center;
`;
