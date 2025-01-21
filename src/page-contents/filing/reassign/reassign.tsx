import React, { useState } from "react";
import {
	Box,
	TextField,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Typography,
	Button,
	FormControlLabel,
	Switch,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTheme } from "@mui/material/styles";

// Example options for Select fields
const tipoRadicadoOptions = ["Tipo 1", "Tipo 2", "Tipo 3"];

const ReassignFilingForm: React.FC = () => {
	const theme = useTheme();

	const [formData, setFormData] = useState({
		tipoRadicado: "",
		clienteNombre: "",
		asunto: "",
		fechaVencimiento: null,
		prioridad: false,
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
				Reasignar
			</Typography>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					{/* Tipo Radicado Select */}
					<div className="form-column">
						<FormControl fullWidth className="select-field">
							<InputLabel id="filing-type-label">
								Seleccione la dependencia destino *
							</InputLabel>
							<Select
								labelId="filing-type-label"
								value={formData.tipoRadicado}
								onChange={handleInputChange}
								name="tipoRadicado"
								label="Seleccione la dependencia destino *"
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
							<InputLabel id="filing-type-label">
								Seleccione el usuario destino *
							</InputLabel>
							<Select
								labelId="filing-type-label"
								value={formData.tipoRadicado}
								onChange={handleInputChange}
								name="tipoRadicado"
								label="Seleccione el usuario destino *"
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
							<InputLabel id="filing-type-label">
								Seleccione las dependencias *
							</InputLabel>
							<Select
								labelId="filing-type-label"
								value={formData.tipoRadicado}
								onChange={handleInputChange}
								name="tipoRadicado"
								label="Seleccione las dependencias *"
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
							<InputLabel id="filing-type-label">
								Seleccione los usuarios *
							</InputLabel>
							<Select
								labelId="filing-type-label"
								value={formData.tipoRadicado}
								onChange={handleInputChange}
								name="tipoRadicado"
								label="Seleccione los usuarios *"
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
						<TextField
							multiline
							rows={4}
							className="text-field"
							fullWidth
							label="Observación *"
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

export default ReassignFilingForm;
