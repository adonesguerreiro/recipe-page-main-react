import Img from "./components/Picture";
import Div from "./components/Div";
import Section from "./components/Section";
import Theme from "./styles/theme";

export default function App() {
	return (
		<Theme>
			<main>
				<Img />
				<Div />
				<Section />
			</main>
		</Theme>
	);
}
