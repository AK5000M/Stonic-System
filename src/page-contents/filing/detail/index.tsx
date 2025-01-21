// pages/DashboardContent.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography, Button } from "@mui/material";
import SecondaryLayout from "@/layout/secondayLayout";
import BreadcrumbsComponent from "@/components/breadcrumbs";

import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import FileDetailForm from "./fileDetail";
import MainDocForm from "./mainDoc";
import FileDocForm from "./fileDoc";
import FileTraceForm from "./fileTrace";

const DetailFilingContent: React.FC = () => {
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
								label: "Información detallada",
								href: "#",
							},
						]}
					/>
					<Box
						sx={{
							mt: 3,
							display: "flex",
							flexDirection: "column",
							gap: "30px",
						}}
					>
						<FileDetailForm />
						<MainDocForm />
						<FileDocForm />
						<FileTraceForm />
					</Box>
				</Box>
			</Container>

			<ToastContainer />
		</SecondaryLayout>
	);
};

export default DetailFilingContent;
