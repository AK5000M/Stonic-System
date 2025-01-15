import React, { useState } from "react";

import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useAppDispatch } from "@/store";
import { login } from "@/store/actions/authAction";
import Layout from "@/layout/layout";
import theme from "@/styles/theme";
import Logo from "@/components/logo";

export const LoginContent: React.FC = () => {
	const dispatch = useAppDispatch();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onSubmitLogin = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(login(username, password));
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
							sx={{ mt: 3 }}
						>
							Iniciar sesión
						</Button>
					</form>
				</Box>
			</Container>
		</Layout>
	);
};
