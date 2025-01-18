// pages/DashboardContent.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography, Button } from "@mui/material";
import SecondaryLayout from "@/layout/secondayLayout";
import BreadcrumbsComponent from "@/components/breadcrumbs";
import FilingInformationTypeForm from "./informationType";
import FilingTypeForm from "./filingType";
import FilingResponsiveForm from "./responsible";
import FilingInformationForm from "./information";

import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";

const CreateFilingContent: React.FC = () => {
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
						<FilingInformationTypeForm />
						<FilingTypeForm />
						<FilingResponsiveForm />
						<FilingInformationForm />
						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
								mb: 3,
							}}
						>
							<Button
								className="main-btn"
								startIcon={<SaveAsOutlinedIcon />}
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

export default CreateFilingContent;
