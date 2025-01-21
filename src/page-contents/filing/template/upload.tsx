import React, { useState } from "react";
import {
	Box,
	TextField,
	FormControlLabel,
	Switch,
	Typography,
	Button,
	Avatar,
	IconButton,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

const UploadTemplateFilingForm: React.FC = () => {
	const [formData, setFormData] = useState({
		clienteNombre: "",
		prioridad: false,
		image: null, // Store the image file here
	});

	// Handle form field changes
	const handleInputChange = (event: any) => {
		const { name, value } = event.target as HTMLInputElement;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
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

	// Handle image upload change
	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setFormData((prevData: any) => ({
				...prevData,
				image: URL.createObjectURL(file), // Create a URL for the image preview
			}));
		}
	};

	// Handle image cancel (reset selected image)
	const handleImageCancel = () => {
		setFormData((prevData) => ({
			...prevData,
			image: null, // Reset the image
		}));
	};

	// Handle clicking the cropper area
	const handleCropperClick = () => {
		document.getElementById("image-upload")?.click(); // Trigger the file input click
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
				p: "20px",
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
				Asociar plantilla
			</Typography>
			<form
				onSubmit={handleSubmit}
				style={{ width: "50%", margin: "auto" }}
			>
				{/* Description Text Field */}
				<Box sx={{ mb: 3 }}>
					<TextField
						className="text-field"
						fullWidth
						label="Nombre archivo *"
						name="clienteNombre"
						value={formData.clienteNombre}
						onChange={handleInputChange}
					/>
				</Box>

				{/* Image Upload Section */}
				<Box>
					{!formData.image && (
						<Box sx={{ mb: 3, display: "none" }}>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
								style={{ display: "none" }}
								id="image-upload"
							/>
							<label htmlFor="image-upload">
								<Button
									component="span"
									variant="outlined"
									color="secondary"
									sx={{
										width: "auto",
										marginBottom: 2,
										borderRadius: 2,
										borderColor: "primary.main",
										color: "primary.main",
										"&:hover": {
											borderColor: "secondary.main",
											color: "secondary.main",
										},
									}}
								>
									Upload Image
								</Button>
							</label>
						</Box>
					)}

					{/* Image Preview Section */}
					{formData.image ? (
						<Box
							sx={{
								mt: 3,
								position: "relative",
								cursor: "pointer",
								border: "1px dashed gray",
								borderRadius: 2,
								padding: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: 200,
								backgroundColor: "rgb(241 245 249)",
							}}
							onClick={handleCropperClick}
						>
							{/* Show Image Preview */}
							<Box
								sx={{
									position: "relative",
									width: 150,
									height: 150,
								}}
							>
								<Avatar
									src={formData.image}
									alt="Uploaded Image Preview"
									sx={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										border: "2px solid",
										borderColor: "primary.main",
									}}
								/>
								{/* Cancel Button */}
								<IconButton
									onClick={(e) => {
										e.stopPropagation();
										handleImageCancel();
									}}
									sx={{
										position: "absolute",
										top: -10,
										right: -10,
										backgroundColor: "white",
										borderRadius: "50%",
										border: "2px solid",
										borderColor: "primary.main",
										boxShadow:
											"0px 2px 6px rgba(0, 0, 0, 0.15)",
									}}
								>
									<CancelIcon sx={{ color: "black" }} />
								</IconButton>
							</Box>
						</Box>
					) : (
						<Box
							sx={{
								padding: 2,
								border: "1px dashed gray",
								borderRadius: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: 200,
								cursor: "pointer",
								backgroundColor: "rgb(241 245 249)",
							}}
							onClick={handleCropperClick}
						>
							<Typography
								variant="body2"
								sx={{
									textAlign: "center",
									color: "gray",
								}}
							>
								Arrastre o haga clic para cargar la imagen
							</Typography>
						</Box>
					)}
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							mt: 3,
						}}
					>
						<Button
							className="main-btn"
							startIcon={<CloudDoneOutlinedIcon />}
							sx={{ width: "200px" }}
						>
							Guardar
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default UploadTemplateFilingForm;
