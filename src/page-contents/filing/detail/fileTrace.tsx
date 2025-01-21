import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const FileTraceForm: React.FC = () => {
	// Data for the roadmap
	const steps = [
		{
			action: "Copiar a informado",
			timestamp: "2025-01-09 14:33:12",
			user: "Soporte SGDA",
			dependency: "DIRECCIÓN APOYO COMERCIAL",
			observation:
				"Se informó el radicado al usuario Brian Sanabria - asdfasdfasfd",
		},
		{
			action: "Copiar a informado",
			timestamp: "2025-01-09 14:33:12",
			user: "Soporte SGDA",
			dependency: "DIRECCIÓN APOYO COMERCIAL",
			observation:
				"Se informó el radicado al usuario CAPACITACIONES CAPACITACIONES - asdfasdfasfd",
		},
		{
			action: "Copiar a informado",
			timestamp: "2025-01-09 14:33:12",
			user: "Soporte SGDA",
			dependency: "DIRECCIÓN APOYO COMERCIAL",
			observation:
				"Se informó el radicado al usuario Dayhana Pérez - asdfasdfasfd",
		},
		{
			action: "Crear Radicado",
			timestamp: "2024-11-29 08:03:00",
			user: "Soporte SGDA",
			dependency: "DIRECCIÓN APOYO COMERCIAL",
			observation:
				"Se radicó el documento de forma correcta con los siguientes datos: Usuario tramitador: Soporte SGDA, Dependencia tramitadora: DIRECCIÓN APOYO COMERCIAL, Usuario creador: Soporte SGDA",
		},
	];

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
				Trazabilidad del radicado
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					position: "relative",
					ml: 4, // Margin to align with the timeline
				}}
			>
				{steps.map((step, index) => (
					<Box
						key={index}
						sx={{
							display: "flex",
							alignItems: "flex-start",
							mb: 3,
						}}
					>
						{/* Timeline Dot and Connector */}
						<Box
							sx={{
								position: "relative",
								mr: 2,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							{/* Timeline Dot */}
							<Box
								sx={{
									width: 16,
									height: 16,
									borderRadius: "50%",
									backgroundColor: "primary.main",
									zIndex: 1,
								}}
							></Box>
							{/* Line for all but the last item */}
							{index < steps.length - 1 && (
								<Divider
									orientation="vertical"
									flexItem
									sx={{
										backgroundColor: "#0064ff",
										height: 20,
										width: 20,
										borderRadius: "50%",
									}}
								/>
							)}
						</Box>

						{/* Step Content */}
						<Box>
							<Typography
								variant="body1"
								sx={{ fontWeight: 500, mb: 0.5 }}
							>
								{step.action} - {step.timestamp}
							</Typography>
							<Typography variant="body2" sx={{ mb: 0.5 }}>
								<strong>Usuario:</strong> {step.user}
							</Typography>
							<Typography variant="body2" sx={{ mb: 0.5 }}>
								<strong>Dependencia:</strong> {step.dependency}
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: "gray", fontStyle: "italic" }}
							>
								{step.observation}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default FileTraceForm;
