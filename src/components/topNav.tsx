import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import ProfileMenu from "@/components/profileMenu";

const TopNav: React.FC = () => (
	<AppBar
		position="sticky"
		className="topnav"
		sx={{
			width: "100%",
			marginLeft: "0px",
		}}
	>
		<Toolbar>
			{/* Push Profile Menu to the right */}
			<div style={{ marginLeft: "auto" }}>
				<ProfileMenu />
			</div>
		</Toolbar>
	</AppBar>
);

export default TopNav;
