import React from "react";
import { AppBar, Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<AppBar
			position="sticky"
			className="topnav"
			sx={{
				width: "100%",
				marginLeft: "0px",
			}}
		>
			<Box sx={{ px: 2, py: 2 }}>
				<Typography
					variant="body1"
					sx={{
						fontSize: "1.0rem",
						lineHeight: "28px",
						textAlign: "center",
					}}
				>
					Copyright &copy; {currentYear} OpenTIC
				</Typography>
			</Box>
		</AppBar>
	);
};

export default Footer;
