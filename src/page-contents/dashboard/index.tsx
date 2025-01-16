// pages/DashboardContent.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography } from "@mui/material";
import SecondaryLayout from "@/layout/secondayLayout";

const DashboardContent: React.FC = () => {
	return (
		<SecondaryLayout>
			<Container maxWidth="xl">
				<Box sx={{ mt: 3 }}>
					<Typography
						variant="h4"
						gutterBottom
						sx={{ color: "white" }}
					>
						Painel
					</Typography>

					{/* Stats Cards */}
				</Box>
			</Container>

			<ToastContainer />
		</SecondaryLayout>
	);
};

export default DashboardContent;
