// pages/DashboardContent.tsx
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography, Button } from "@mui/material";

// Components
import SecondaryLayout from "@/layout/secondayLayout";
import BreadcrumbsComponent from "@/components/breadcrumbs";
import FilingInformationTypeForm from "./informationType";
import FilingTypeForm from "./filingType";
import FilingResponsiveForm from "./responsible";
import FilingInformationForm from "./information";
// Icons
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import {
	fetchServiceTypeData,
	fetchRequestTypeData,
	fetchGeneralListData,
} from "@/store/actions/filingAction";

import { useAccessToken } from "@/utils/token";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface ServiceTypeModel {
	id?: string | number;
	nombre?: string;
}

interface RequestTypeModel {
	id?: string | number;
	nombre?: string;
	dias_vencimiento?: string | number;
	abreviatura?: string;
}

const CreateFilingContent: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [serviceTypes, setServiceTypes] = useState<ServiceTypeModel>({});
	const [requestTypes, setRequestTypes] = useState<RequestTypeModel>({});
	const [generalLists, setGeneralLists] = useState<any>(null);
	const { decryptedToken } = useAccessToken();

	useEffect(() => {
		setLoading(true);
		const fetchBasicServices = async () => {
			try {
				// Get Service Types
				const serviceTypeEndpoint =
					API_BASE_URL + "api/tipos_servicios";
				const serviceTypeData = await fetchServiceTypeData(
					serviceTypeEndpoint
				);

				setServiceTypes(serviceTypeData.data);

				// Get requestTypes
				const requestTypeEndpoint =
					API_BASE_URL + "api/tipos_solicitudes";

				const requestTypeData = await fetchRequestTypeData(
					requestTypeEndpoint
				);

				setRequestTypes(requestTypeData.data);

				// Get general filing list
				const generalListEndpoint =
					API_BASE_URL +
					"radicacion/radicados/index-general-filing-lists-not-encrypt";
				if (decryptedToken != null) {
					const authorization = decryptedToken;

					const generalListData = await fetchGeneralListData(
						generalListEndpoint,
						authorization
					);

					setGeneralLists(generalListData);
				}
			} catch (err: any) {
				setError(err.message);
				console.error("Error validating authorization:", err);
			}
		};
		fetchBasicServices();
	}, [decryptedToken]);

	console.log("0", serviceTypes);
	console.log("1", requestTypes);
	console.log("2", generalLists);

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
						<FilingInformationTypeForm
							generalLists={generalLists}
						/>
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
