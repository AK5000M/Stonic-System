import React, { ReactNode, useState } from "react";
import { Box, CssBaseline, Container } from "@mui/material";
import TopNav from "@/components/topNav";
import SideNav from "@/components/sideNav";

interface SecondaryLayoutProps {
	children: ReactNode;
}

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false); // State to manage collapsed/expanded sidebar

	return (
		<Box sx={{ display: "flex", height: "100vh" }}>
			<CssBaseline />
			<SideNav collapsed={collapsed} setCollapsed={setCollapsed} />{" "}
			{/* Pass the state to SideNav */}
			<Box
				sx={{
					maxWidth: collapsed
						? "calc(100% - 60px)"
						: "calc(100% - 240px)",
					display: "flex",
					flexDirection: "column",
					flexGrow: 1,
				}}
			>
				<TopNav />
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 3,
					}}
				>
					<Container className="second-layout-container">
						{children}
					</Container>
				</Box>
			</Box>
		</Box>
	);
};

export default SecondaryLayout;
