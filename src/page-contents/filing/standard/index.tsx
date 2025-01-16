// pages/DashboardContent.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography } from "@mui/material";
import SecondaryLayout from "@/layout/secondayLayout";

const StandardFilingContent: React.FC = () => {
	return (
		<SecondaryLayout>
			<Container className="page-container">
				<Box sx={{ mt: 3 }}>
					<Typography
						variant="h4"
						gutterBottom
						sx={{ color: "#000" }}
					>
						Radicación
					</Typography>

					{/* Stats Cards */}
				</Box>
			</Container>

			<ToastContainer />
		</SecondaryLayout>
	);
};

export default StandardFilingContent;
