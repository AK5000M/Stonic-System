import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const FileDocForm: React.FC = () => {
	return (
		<Box
			className="add-filing-form"
			sx={{
				backgroundColor: "white",
				borderRadius: "5px",
				px: 4,
				pt: 4,
				pb: 6,
			}}
		>
			<Typography
				variant="body1"
				sx={{
					pb: 2,
					mb: 2,
					fontSize: "1.25rem",
					borderBottom: "solid 1px rgb(226 232 240)",
				}}
			>
				Documentos del radicado
			</Typography>

			<Box sx={{ display: "flex", width: "100%" }}></Box>
		</Box>
	);
};

export default FileDocForm;
