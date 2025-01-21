// pages/DashboardContent.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography, Button } from "@mui/material";
import SecondaryLayout from "@/layout/secondayLayout";
import BreadcrumbsComponent from "@/components/breadcrumbs";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import UploadTemplateFilingForm from "./upload";
// import ReassignFilingForm from "./reassign";

const TemplateFilingContent: React.FC = () => {
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
						<UploadTemplateFilingForm />
					</Box>
				</Box>
			</Container>

			<ToastContainer />
		</SecondaryLayout>
	);
};

export default TemplateFilingContent;
