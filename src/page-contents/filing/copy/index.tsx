// pages/DashboardContent.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography, Button } from "@mui/material";
import SecondaryLayout from "@/layout/secondayLayout";
import BreadcrumbsComponent from "@/components/breadcrumbs";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CopyFilingForm from "./copy";

const CopyFilingContent: React.FC = () => {
	return (
		<SecondaryLayout>
			<Container className="page-container">
				<Box sx={{ mt: 3 }}>
					<BreadcrumbsComponent
						breadcrumbs={[
							{
								label: "Radicación",
								href: "/filing/standard",
							},
							{
								label: "Crear Radicación",
								href: "#",
							},
						]}
					/>
					<Box
						sx={{
							mt: 3,
							backgroundColor: "white",
							borderRadius: "5px",
							padding: "20px",
							display: "flex",
							flexDirection: "column",
							gap: "30px",
						}}
					>
						<CopyFilingForm />
						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
								mb: 3,
							}}
						>
							<Button
								className="main-btn"
								startIcon={<CheckCircleOutlineOutlinedIcon />}
								sx={{ width: "200px" }}
							>
								Guardar
							</Button>
						</Box>
					</Box>
				</Box>
			</Container>

			<ToastContainer />
		</SecondaryLayout>
	);
};

export default CopyFilingContent;
