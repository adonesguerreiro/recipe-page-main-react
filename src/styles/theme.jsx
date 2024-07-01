import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		gray: "hsl(30, 54%, 90%)",
		white: " hsl(0, 0%, 100%)",
		darkgray: "hsl(24, 5%, 18%)",
		lightgray: "hsl(30, 10%, 34%)",
		wine: "hsl(332, 51%, 32%)",
		lightpink: "hsl(322, 100%, 98%);",
		brown: "hsl(14, 45%, 36%)",
		beige: "hsl(30, 18%, 87%)",
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Theme;
