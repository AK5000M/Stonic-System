import React, { useState } from "react";
import {
	Box,
	TextField,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Typography,
	FormControlLabel,
	Switch,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

// Example options for Select fields
const tipoRadicadoOptions = ["Tipo 1", "Tipo 2", "Tipo 3"];

const SenderFilingTypeForm: React.FC = () => {
	const theme = useTheme();

	const [formData, setFormData] = useState({
		senderandrecipient: "",
		tipoRadicado: "",
		clienteNombre: "",
		asunto: "",
		fechaVencimiento: null,
		acceptPolicy: false,
		isNew: false,
	});

	// Handle form field changes
	const handleInputChange = (event: any) => {
		const { name, value } = event.target as HTMLInputElement;
		setFormData((prevData) => ({
			...prevData,
			[name || ""]: value,
		}));
	};

	// Handle switch changes
	const handleSwitchChange = (event: any) => {
		const { name, checked } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: checked,
		}));
	};

	// Handle form submission
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("Form Submitted:", formData);
	};

	return (
		<Box
			className="add-filing-form"
			sx={{
				mt: 3,
			}}
		>
			<Typography
				variant="body1"
				sx={{
					pb: 2,
					mb: 4,
					fontSize: "1.25rem",
					lineHeight: "28px",
					borderBottom: "solid 1px rgb(226 232 240)",
				}}
			>
				Información del Remitente
			</Typography>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					{/* Switch for policy acceptance */}
					<div className="form-column">
						<FormControlLabel
							control={
								<Switch
									checked={formData.acceptPolicy}
									onChange={handleSwitchChange}
									name="acceptPolicy"
								/>
							}
							label="Acepta política tratamiento"
						/>
					</div>
				</div>

				<div className="form-row">
					{/* Tipo Radicado Select */}
					<div className="form-column">
						<FormControl fullWidth className="select-field">
							<InputLabel id="user-type-label">
								Seleccione remitente/destinatario
							</InputLabel>
							<Select
								labelId="user-type-label"
								value={formData.senderandrecipient}
								onChange={handleInputChange}
								name="senderandrecipient"
								label="Seleccione remitente/destinatario"
							>
								{tipoRadicadoOptions.map((option, index) => (
									<MenuItem key={index} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
					<div className="form-column"></div>
				</div>

				<div className="form-row">
					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Nombre o razón social"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>

					<div className="form-column">
						<FormControl fullWidth className="select-field">
							<InputLabel id="filings-association-label">
								Tipo de persona
							</InputLabel>
							<Select
								labelId="filings-association-label"
								value={formData.asunto}
								onChange={handleInputChange}
								name="asunto"
								label="Tipo de persona"
							>
								{tipoRadicadoOptions.map((option, index) => (
									<MenuItem key={index} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>

					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Documento o NIT"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Dirección"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>

					<div className="form-column">
						<FormControl fullWidth className="select-field">
							<InputLabel id="filings-association-label">
								Pais *
							</InputLabel>
							<Select
								labelId="filings-association-label"
								value={formData.asunto}
								onChange={handleInputChange}
								name="asunto"
								label="Pais"
							>
								{tipoRadicadoOptions.map((option, index) => (
									<MenuItem key={index} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>

					<div className="form-column">
						<FormControl fullWidth className="select-field">
							<InputLabel id="filings-association-label">
								Departamento
							</InputLabel>
							<Select
								labelId="filings-association-label"
								value={formData.asunto}
								onChange={handleInputChange}
								name="asunto"
								label="Departamento"
							>
								{tipoRadicadoOptions.map((option, index) => (
									<MenuItem key={index} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
				</div>

				<div className="form-row">
					<div className="form-column">
						<FormControl fullWidth className="select-field">
							<InputLabel id="filings-association-label">
								Municipio *
							</InputLabel>
							<Select
								labelId="filings-association-label"
								value={formData.asunto}
								onChange={handleInputChange}
								name="asunto"
								label="Municipio"
							>
								{tipoRadicadoOptions.map((option, index) => (
									<MenuItem key={index} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>

					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Email"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Teléfono"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</form>
		</Box>
	);
};

export default SenderFilingTypeForm;
