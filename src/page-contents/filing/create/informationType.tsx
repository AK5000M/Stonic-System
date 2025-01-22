import React, { useEffect, useState } from "react";
import {
	Box,
	TextField,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Typography,
	Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTheme } from "@mui/material/styles";

interface GeneralListProps {
	generalLists: any;
}

interface DataRadicatedItemProps {
	map(
		arg0: (item: DataRadicatedItemProps) => React.JSX.Element
	): React.ReactNode;
	length: number;
	id?: number;
	val?: string;
}

interface DateNumRadicatedItemProps {
	map(
		arg0: (item: DateNumRadicatedItemProps) => React.JSX.Element
	): React.ReactNode;
	length: number;
	id?: number;
	val?: string;
}
// Example options for Select fields
const tipoRadicadoOptions = ["Tipo 1", "Tipo 2", "Tipo 3"];

const FilingInformationTypeForm: React.FC<GeneralListProps> = (
	generalLists
) => {
	const [dataRadicated, setDataRadicated] = useState<DataRadicatedItemProps>(
		[]
	);
	const [dateNumRadicated, setDateNumRadicated] =
		useState<DateNumRadicatedItemProps>([]);
	const theme = useTheme();

	const [formData, setFormData] = useState({
		tipoRadicado: "",
		clienteNombre: "",
		asunto: "",
		fechaVencimiento: null,
	});

	useEffect(() => {
		if (generalLists != null) {
			setDataRadicated(generalLists.generalLists?.dataRadicado);
			setDateNumRadicated(generalLists.generalLists?.dataNumRadicados);
		}
	}, [generalLists]);

	// Handle form field changes
	const handleInputChange = (event: any) => {
		const { name, value } = event.target as HTMLInputElement;
		setFormData((prevData) => ({
			...prevData,
			[name || ""]: value,
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
				Información tipo de radicado
			</Typography>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					{/* Tipo Radicado Select */}
					<div className="form-column">
						<FormControl fullWidth className="select-field">
							<InputLabel id="filing-type-label">
								Seleccione el tipo radicado
							</InputLabel>
							<Select
								labelId="filing-type-label"
								value={formData.tipoRadicado}
								onChange={handleInputChange}
								name="tipoRadicado"
								label="Seleccione el tipo radicado"
							>
								{dataRadicated && dataRadicated.length > 0 ? (
									dataRadicated.map(
										(item: DataRadicatedItemProps) => (
											<MenuItem
												key={item.id}
												value={item.id}
											>
												{item.val}
											</MenuItem>
										)
									)
								) : (
									<p>No data available</p>
								)}
							</Select>
						</FormControl>
					</div>

					{/* Nombre Cliente TextField */}
					<div className="form-column">
						<TextField
							className="text-field"
							fullWidth
							label="Radicado origen"
							name="clienteNombre"
							value={formData.clienteNombre}
							onChange={handleInputChange}
						/>
					</div>

					{/* Asociación de radicados */}
					<div className="form-column">
						<FormControl fullWidth className="select-field">
							<InputLabel id="filings-association-label">
								Asociación de radicados
							</InputLabel>
							<Select
								labelId="filings-association-label"
								value={formData.asunto}
								onChange={handleInputChange}
								name="asunto"
								label="Asociación de radicados"
								MenuProps={{
									PaperProps: {
										style: {
											maxHeight: 350,
											overflowY: "auto",
										},
									},
								}}
							>
								{dateNumRadicated &&
								dateNumRadicated.length > 0 ? (
									dateNumRadicated.map(
										(item: DataRadicatedItemProps) => (
											<MenuItem
												style={{
													width: "300px",
												}}
												key={item.id}
												value={item.id}
											>
												{item.val}
											</MenuItem>
										)
									)
								) : (
									<p>No data available</p>
								)}
							</Select>
						</FormControl>
					</div>

					{/* Date Picker */}
					<div className="form-column">
						<Box className="date-picker-wrapper">
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									sx={{ width: "100%" }}
									label="Fecha documento"
									value={formData.fechaVencimiento}
									onChange={(newValue) =>
										setFormData((prevData: any) => ({
											...prevData,
											fechaVencimiento: newValue,
										}))
									}
									slotProps={{
										textField: {
											className: "date-field",
										},
									}}
								/>
							</LocalizationProvider>
						</Box>
					</div>
				</div>
			</form>
		</Box>
	);
};

export default FilingInformationTypeForm;
