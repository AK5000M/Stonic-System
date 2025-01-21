// StandardFilingContent.tsx

import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Container, Box, Typography, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import SecondaryLayout from "@/layout/secondayLayout";
import DataTable from "../table/index";
import { validateAuthOperacionesUser } from "@/utils/auth";
import { useAccessToken } from "@/utils/token";
import { fetchStandardFilingData } from "@/store/actions/filingAction";
import { useRouter } from "next/router";

import BreadcrumbsComponent from "@/components/breadcrumbs";
import Loading from "@/components/loading";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const StandardFilingContent: React.FC = () => {
	const router = useRouter();
	const { decryptedToken } = useAccessToken();
	const [authData, setAuthData] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);
	const [standardFiling, setStandardFiling] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false); // Add loading state

	// Filter function to include specific fields
	const filterStandardFilingData = (data: any[]) => {
		return data.map((item) => ({
			encryptId: item.data[0],
			id: item.id,
			TipoRadicado: item.TipoRadicado,
			numeroRadiRadicado: item.numeroRadiRadicado,
			creacionRadiRadicado: item.creacionRadiRadicado,
			nombreCliente: item.nombreCliente,
			asuntoRadiRadicado: item.asuntoRadiRadicado,
			nombreTipoDocumental: item.nombreTipoDocumental,
			fechaVencimientoRadiRadicados: item.fechaVencimientoRadiRadicados,
			prioridadRadicados: item.prioridadRadicados,
			validDocument: item.validDocument,
			statusText: item.statusText,
		}));
	};

	useEffect(() => {
		if (decryptedToken != null) {
			setLoading(true);
			const fetchAuthorization = async () => {
				try {
					if (!decryptedToken) {
						throw new Error("Authorization token not available");
					}
					const data = await validateAuthOperacionesUser(
						decryptedToken
					);

					setAuthData(data);
				} catch (err: any) {
					setError(err.message);
					console.error("Error validating authorization:", err);
				}
			};

			fetchAuthorization();
		}
	}, [decryptedToken]);

	useEffect(() => {
		if (authData?.status === 200) {
			const fetchStandardFiling = async () => {
				try {
					const endpoint =
						API_BASE_URL + "radicacion/radicados/index";
					const params = "";
					const authorization = decryptedToken;

					const data: any = await fetchStandardFilingData(
						endpoint,
						params,
						authorization
					);

					if (data?.data) {
						setLoading(false);
						// Apply filtering before setting state
						const filteredData = filterStandardFilingData(
							data.data
						);

						setStandardFiling(filteredData);
					}
				} catch (error) {
					console.error(
						"Error fetching standard filing data:",
						error
					);
				} finally {
					setLoading(false);
				}
			};
			fetchStandardFiling();
		}
	}, [authData]);

	// Add New Filing
	const onAddNewFiling = () => {
		router.push("/filing/create");
	};

	return (
		<SecondaryLayout>
			<Container className="page-container">
				<Box sx={{ mt: 3 }}>
					{/* Use BreadcrumbsComponent with dynamic breadcrumb data */}
					<BreadcrumbsComponent
						breadcrumbs={[
							{ label: "Radicación", href: "/filing/standard" },
						]}
					/>

					<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
						<Button
							className="main-btn"
							onClick={() => onAddNewFiling()}
							startIcon={<AddIcon />}
							sx={{
								px: 3,
								py: 1,
								borderRadius: "25px",
							}}
						>
							CREAR RADICADO
						</Button>
					</Box>

					{/* Show loading component when fetching data */}
					{loading ? (
						<Loading message="Cargando datos de radicados..." />
					) : standardFiling.length > 0 ? (
						<DataTable data={standardFiling} />
					) : (
						<Typography
							variant="body1"
							sx={{ mt: 2, textAlign: "center" }}
						>
							No hay datos disponibles para mostrar.
						</Typography>
					)}
				</Box>
			</Container>

			<ToastContainer />
		</SecondaryLayout>
	);
};

export default StandardFilingContent;
