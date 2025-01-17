// components/Loading.tsx
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingProps {
	message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Cargando..." }) => {
	return (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CircularProgress sx={{ color: "#0064ff" }} />

			<Typography variant="body1" sx={{ mt: 2 }}>
				{message}
			</Typography>
		</Box>
	);
};

export default Loading;
