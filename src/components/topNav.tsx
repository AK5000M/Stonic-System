import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import ProfileMenu from "@/components/profileMenu";
import Notification from "@/components/notification";

const TopNav: React.FC = () => {
	const handleNotificationClick = () => {
		// Handle notification icon click if needed
	};

	return (
		<AppBar
			position="sticky"
			className="topnav"
			sx={{
				width: "100%",
				marginLeft: "0px",
			}}
		>
			<Toolbar>
				{/* Push Notification and Profile Menu to the right */}
				<div
					style={{
						marginLeft: "auto",
						display: "flex",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<Notification count={5} onClick={handleNotificationClick} />
					<ProfileMenu />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default TopNav;
