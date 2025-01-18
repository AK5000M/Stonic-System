import React, { useState } from "react";
import {
	Container,
	Box,
	Typography,
	TextField,
	Button,
	CircularProgress,
} from "@mui/material";
import { useAppDispatch } from "@/store";
import { login } from "@/store/actions/authAction";
import Layout from "@/layout/layout";
import theme from "@/styles/theme";
import Logo from "@/components/logo";

export const LoginContent: React.FC = () => {
	const dispatch = useAppDispatch();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false); // State to track loading

	const onSubmitLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsLoading(true); // Set loading to true when submitting
		try {
			await dispatch(login(username, password)); // Assuming login is an async function
		} finally {
			setIsLoading(false); // Reset loading state
		}
	};

	return (
		<Layout>
			<Container
				maxWidth="sm"
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100vh",
				}}
			>
				<Box
					sx={{
						width: "100%",
						backgroundColor: `#ffffffbd`,
						py: 6,
						px: 4,
						border: `solid 1px ${theme.palette.primary.main}`,
						borderRadius: "5px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							mb: 3,
						}}
					>
						<Logo />
					</Box>
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							textAlign: "center",
							color: `${theme.palette.secondary.main}`,
						}}
					>
						Bienvenido
					</Typography>
					<Typography
						variant="h6"
						gutterBottom
						sx={{
							textAlign: "center",
							color: `${theme.palette.common.black}`,
						}}
					>
						Inicie sesión con sus credenciales
					</Typography>
					<Typography
						variant="body1"
						gutterBottom
						sx={{
							textAlign: "center",
							color: `${theme.palette.primary.light}`,
						}}
					>
						Solo para usuarios internos del sistema
					</Typography>

					<form onSubmit={onSubmitLogin}>
						<TextField
							className="text-field"
							variant="outlined"
							label="Nombre de usuario"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							fullWidth
							margin="normal"
							required
						/>

						<TextField
							className="text-field"
							variant="outlined"
							label="Contraseña"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							fullWidth
							margin="normal"
							required
						/>

						<Button
							className="main-btn"
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, minHeight: "51.5px" }}
							disabled={isLoading}
						>
							{isLoading ? (
								<CircularProgress size={24} color="inherit" />
							) : (
								"Iniciar sesión"
							)}
						</Button>
					</form>
				</Box>
			</Container>
		</Layout>
	);
};
