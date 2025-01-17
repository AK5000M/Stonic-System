// src/components/ProfileMenu.tsx
import React, { useState } from "react";
import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAppDispatch } from "@/store";
import { logoutUser } from "@/store/actions/authAction";

const ProfileMenu = () => {
	const dispatch = useAppDispatch();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLogoutConfirm = () => {
		setAnchorEl(null);
		dispatch(logoutUser());
	};

	return (
		<Box className="profile-menu">
			<IconButton
				className="profile-button"
				size="large"
				edge="end"
				color="inherit"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenuOpen}
			>
				<AccountCircleOutlinedIcon className="icon" />
			</IconButton>

			<Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}
			>
				<MenuItem onClick={handleMenuClose}> Mi cuenta </MenuItem>
				<MenuItem onClick={handleLogoutConfirm}>
					{" "}
					Cerrar sesión{" "}
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default ProfileMenu;
