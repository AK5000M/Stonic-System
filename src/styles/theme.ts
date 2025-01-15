import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		background: {
			default: "#fff",
		},
		primary: {
			main: "#fff",
			light: grey[700],
		},
		secondary: {
			main: "#0064ff",
		},
		common: {
			black: "#000",
		},
	},
	typography: {
		h3: {
			fontSize: "2.5rem",
			fontWeight: 700,
		},
		body1: {
			fontSize: "1rem",
		},
	},
});

export default theme;
