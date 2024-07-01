import {
	SectionPreparation,
	TitlePreparation,
	LiPreparation,
	SpanPreparation,
	SectionIngredients,
	TitleIngredients,
	LiIngredients,
	SectionInstructions,
	TitleInstructions,
	LiInstructions,
	SpanInstructions,
	SectionNutrition,
	TitleNutrition,
	TextNutrition,
	LiNutrition,
	SpanNutrition,
} from "./styles";

import { listDataPreparation } from "../../data/listDataPreparation";
import { listDataIngredients } from "../../data/listDataIngredients";
import { listDataInstructions } from "../../data/listDataInstructions";
import { listDataNutrition } from "../../data/listDataNutrition";

export default function Section() {
	return (
		<>
			<SectionPreparation>
				<TitlePreparation>Preparation time</TitlePreparation>
				<ul>
					{listDataPreparation.map((item, index) => (
						<LiPreparation key={index}>
							<SpanPreparation>{item.subtitle}</SpanPreparation>
							{item.description}
						</LiPreparation>
					))}
				</ul>
			</SectionPreparation>
			<SectionIngredients>
				<TitleIngredients>Ingredients</TitleIngredients>
				<ul>
					{listDataIngredients.map((item, index) => (
						<LiIngredients key={index}>{item.description}</LiIngredients>
					))}
				</ul>
			</SectionIngredients>
			<SectionInstructions>
				<TitleInstructions>Instructions</TitleInstructions>
				<ol>
					{listDataInstructions.map((item, index) => (
						<LiInstructions key={index}>
							<SpanInstructions>{item.subtitle}</SpanInstructions>
							{item.description}
						</LiInstructions>
					))}
				</ol>
			</SectionInstructions>
			<SectionNutrition>
				<TitleNutrition>Nutrition</TitleNutrition>
				<TextNutrition>
					The table below shows nutritional values per serving without the
					additional fillings.
				</TextNutrition>
				<ul>
					{listDataNutrition.map((item, index) => (
						<LiNutrition key={index}>
							{item.subtitle}
							<SpanNutrition>{item.description}</SpanNutrition>
						</LiNutrition>
					))}
				</ul>
			</SectionNutrition>
		</>
	);
}
