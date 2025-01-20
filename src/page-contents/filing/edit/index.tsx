// pages/DashboardContent.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography, Button } from "@mui/material";
import SecondaryLayout from "@/layout/secondayLayout";
import BreadcrumbsComponent from "@/components/breadcrumbs";

import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import EditFilingInformationTypeForm from "./informationType";
import SenderFilingTypeForm from "./senderInformation";
import EditFilingResponsiveForm from "./responsible";
import EditFilingInformationForm from "./information";

const EditFilingContent: React.FC = () => {
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
								label: "Editar Radicación",
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
						<Typography
							variant="body1"
							sx={{
								fontSize: "1.25rem",
								lineHeight: "28px",
								borderBottom: "solid 1px rgb(226 232 240)",
							}}
						>
							Número de radicado:{" "}
							<span style={{ fontWeight: 600 }}>
								E-2024-000000140
							</span>
						</Typography>

						<EditFilingInformationTypeForm />
						<SenderFilingTypeForm />
						<EditFilingResponsiveForm />
						<EditFilingInformationForm />

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

export default EditFilingContent;
