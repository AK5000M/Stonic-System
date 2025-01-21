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

const FileFilingForm: React.FC = () => {
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
				Incluir en expediente
			</Typography>
			<Typography
				variant="body1"
				sx={{
					pb: 2,
					fontSize: "1rem",
					lineHeight: "28px",
				}}
			>
				Ingrese el número o el nombre del expediente a buscar y presione
				el botón Buscar
			</Typography>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Número expediente *"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Nombre expediente *"
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
							label="Nombre Serie *"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Nombre Serie *"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</form>
			<Typography
				variant="body1"
				sx={{
					pb: 2,
					fontSize: "1rem",
					lineHeight: "28px",
				}}
			>
				Listado de expedientes
			</Typography>
		</Box>
	);
};

export default FileFilingForm;
