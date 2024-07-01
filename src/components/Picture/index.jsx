import imageOmelette from "/assets/images/image-omelette.jpeg";
import { Image } from "./styles";

export default function Img() {
	return (
		<picture>
			<Image
				src={imageOmelette}
				alt="image-omelette"
			/>
		</picture>
	);
}
