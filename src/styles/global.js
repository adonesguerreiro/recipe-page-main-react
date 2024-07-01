import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	font-family: inherit;
}

@font-face {
	font-family: youngserif-regular;
	src: url("../assets/fonts/young-serif/YoungSerif-Regular.ttf")
		format("truetype");
}

@font-face {
	font-family: outfit-regular;
	src: url("../assets/fonts//outfit/static/Outfit-Regular.ttf") format("truetype");
}

@font-face {
	font-family: outfit-bold;
	src: url("../assets/fonts//outfit/static/Outfit-Bold.ttf") format("truetype");
}

body {
	background-color: hsl(30, 54%, 90%);
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	padding: 100px 300px 100px 300px;
}

main {
	width: 600px;
	padding: 18px;
	border-radius: 10px;
	background-color: hsl(0, 0%, 100%);
}


@media screen and (max-width: 375px) {

	body {
		padding: 0;
	}
	main {
		width: 320px;
	}

}

@media screen and (min-width: 375px) and (max-width: 660px) {
	body {
		padding: 0;
	}

	main {
		width: 600px;
		font-size: 12px;
	}

}
`;
