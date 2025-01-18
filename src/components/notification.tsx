import React, { useState } from "react";
import { IconButton, Badge, Menu, MenuItem, Typography } from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { useRouter } from "next/router"; // Import from next/router for Next.js navigation

interface NotificationProps {
	count: number;
	onClick: () => void;
}

const Notification: React.FC<NotificationProps> = ({ count, onClick }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [notifications] = useState<string[]>([
		"New message from Alice",
		"Your subscription is about to expire",
		"John commented on your post",
		"Reminder: Meeting at 10 AM",
		"New update available",
		"Your password has been changed",
		"Friend request from Bob",
		"New like on your photo",
		"New comment on your post",
	]); // Example notifications
	const router = useRouter();

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleSeeAllNotifications = () => {
		// Redirect to the notifications page using Next.js router
		router.push("/");
		handleMenuClose();
	};

	return (
		<>
			<IconButton
				color="inherit"
				aria-label="notifications"
				onClick={handleMenuOpen}
			>
				<Badge badgeContent={count} color="error">
					<NotificationsActiveOutlinedIcon
						sx={{ color: "#0064ff" }}
					/>
				</Badge>
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
			>
				<Typography
					variant="h6"
					sx={{ padding: "8px", fontWeight: "bold" }}
				>
					Notificaciones
				</Typography>

				{/* Render the first 10 notifications */}
				{notifications.slice(0, 10).map((notification, index) => (
					<MenuItem key={index} onClick={handleMenuClose}>
						{notification}
					</MenuItem>
				))}

				{/* Show "See All Notifications" at the bottom */}
				<MenuItem onClick={handleSeeAllNotifications}>
					Ver todas las notificaciones
				</MenuItem>
			</Menu>
		</>
	);
};

export default Notification;
