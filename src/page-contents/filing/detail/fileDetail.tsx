import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const FileDetailForm: React.FC = () => {
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
				Detalle del Radicado
			</Typography>

			<Box sx={{ display: "flex", width: "100%" }}>
				<Box sx={{ flex: 1, paddingRight: 2 }}>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "15px",
							}}
						>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Tipo de persona:{" "}
								<span style={{ fontWeight: 500 }}>
									Persona Jurídica
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Nombre:{" "}
								<span style={{ fontWeight: 500 }}>rueda</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Documento identificación:{" "}
								<span style={{ fontWeight: 500 }}>
									1070952417
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Municipio:{" "}
								<span style={{ fontWeight: 500 }}>
									Facatativá
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Departamento:{" "}
								<span style={{ fontWeight: 500 }}>
									Cundinamarca
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								País:{" "}
								<span style={{ fontWeight: 500 }}>
									COLOMBIA
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Correo electrónico:{" "}
								<span style={{ fontWeight: 500 }}>
									jfrueda@opentic.co
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Teléfono de contacto :{" "}
								<span style={{ fontWeight: 500 }}>
									3208006157
								</span>
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box sx={{ flex: 1, paddingLeft: 2 }}>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "15px",
							}}
						>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Complemento:{" "}
								<span style={{ fontWeight: 500 }}></span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								zona: <span style={{ fontWeight: 500 }}></span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Número de radicado:{" "}
								<span style={{ fontWeight: 500 }}>
									E-2024-000000140
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Tipo documental:{" "}
								<span style={{ fontWeight: 500 }}>
									Comunicación oficial
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Tipo radicado :{" "}
								<span style={{ fontWeight: 500 }}>ENTRADA</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Prioridad:{" "}
								<span style={{ fontWeight: 500 }}>Baja</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Medio recepción:{" "}
								<span style={{ fontWeight: 500 }}>
									Ventanilla física
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Dependencia tramitadora :{" "}
								<span style={{ fontWeight: 500 }}>
									DIRECCIÓN APOYO COMERCIAL
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Serie:{" "}
								<span style={{ fontWeight: 500 }}>
									INFORMES
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Subserie:{" "}
								<span style={{ fontWeight: 500 }}>
									Informes a entidades de control y vigilancia
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Usuario tramitador :{" "}
								<span style={{ fontWeight: 500 }}>
									Soporte SGDA
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Autoriza envío de correo :{" "}
								<span style={{ fontWeight: 500 }}>No</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Asunto :{" "}
								<span style={{ fontWeight: 500 }}>
									asdfadsdf
								</span>
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "1rem",
									fontWeight: 600,
								}}
							>
								Firmado digitalmente :{" "}
								<span style={{ fontWeight: 500 }}>No</span>
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default FileDetailForm;
