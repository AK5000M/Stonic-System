import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import ProfileMenu from "@/components/profileMenu";
import Notification from "@/components/notification";
import LanguageSelect from "@/components/languageSelect"; // Import the LanguageSelect component

const TopNav: React.FC = () => {
	const [selectedLanguage, setSelectedLanguage] = useState("en");

	const handleNotificationClick = () => {
		// Handle notification icon click if needed
	};

	const handleLanguageChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setSelectedLanguage(event.target.value as string);
	};

	return (
		<AppBar
			position="sticky"
			className="topnav"
			sx={{
				width: "100%",
				marginLeft: "0px",
				px: 4,
			}}
		>
			<Toolbar>
				<div
					style={{
						marginLeft: "auto",
						display: "flex",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					{/* <LanguageSelect
						selectedLanguage={selectedLanguage}
						onLanguageChange={handleLanguageChange}
					/> */}
					<Notification count={5} onClick={handleNotificationClick} />

					<ProfileMenu />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default TopNav;
