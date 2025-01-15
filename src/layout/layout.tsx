import React from "react";
import { Box } from "@mui/material";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				backgroundImage: 'url("/assets/backgound/auth-bg.jpg")',
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Box component="main" sx={{ flex: 1 }}>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
