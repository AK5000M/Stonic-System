import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Box,
	IconButton,
	Collapse,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HighQualityOutlinedIcon from "@mui/icons-material/HighQualityOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SideNavProps {
	collapsed: boolean;
	setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNav: React.FC<SideNavProps> = ({ collapsed, setCollapsed }) => {
	const [openMenu, setOpenMenu] = useState<string | null>(null); // Track the currently open menu
	const [selectedItem, setSelectedItem] = useState<string>("");
	const router = useRouter(); // Initialize the router

	// Menu data structure
	const menuData = [
		{
			id: "panel",
			title: "Panel",
			icon: <DashboardOutlinedIcon />,
			submenu: [],
			route: "/dashboard", // Define the route for this menu item
		},
		{
			id: "radicacion",
			title: "Radicación",
			icon: <HighQualityOutlinedIcon />,
			submenu: [
				{
					id: "radicacion-estandar",
					title: "Radicación estándar",
					route: "/filing",
				},
				{
					id: "radicacion-correo",
					title: "Radicación correo e.",
					route: "/filing/email",
				},
			],
		},
	];

	const handleToggle = () => {
		setCollapsed(!collapsed); // Toggle the collapsed state
	};

	// Update the menu open logic to toggle only one menu at a time
	const handleMenuClick = (menuId: string) => {
		setOpenMenu(openMenu === menuId ? null : menuId); // Toggle submenu open/close for the selected menu
	};

	const handleSelectItem = (item: string, route: string) => {
		setSelectedItem(item); // Set selected item
		router.push(route); // Redirect to the specified route
	};

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: collapsed ? 60 : 240,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: collapsed ? 60 : 240,
					boxSizing: "border-box",
				},
			}}
		>
			{/* Logo Section */}
			<Box
				sx={{
					height: 64,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderBottom: "1px solid #ddd",
					px: 2,
				}}
			>
				{collapsed ? (
					<Image
						src="/assets/logo/logo-sm.webp"
						alt="Logo"
						width={120}
						height={40}
						style={{ objectFit: "contain" }}
						priority
					/>
				) : (
					<Image
						src="/assets/logo/logo.webp"
						alt="Logo"
						width={120}
						height={40}
						style={{ objectFit: "contain" }}
						priority
					/>
				)}
			</Box>

			{/* Toggle Button (left/right) */}
			<Box sx={{ display: "flex", justifyContent: "flex-end", px: 1 }}>
				<IconButton onClick={handleToggle}>
					{collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</Box>

			{/* Navigation List */}
			<List>
				{menuData.map((menu) => (
					<React.Fragment key={menu.id}>
						{/* Panel Item */}
						<ListItem disablePadding>
							<ListItemButton
								selected={selectedItem === menu.id} // Check if this item is selected
								onClick={() =>
									handleSelectItem(
										menu.id,
										menu.route as string
									)
								} // Set this item as selected and redirect
								sx={{
									backgroundColor:
										selectedItem === menu.id
											? "blue"
											: "inherit", // Blue background for selected item
								}}
							>
								<ListItemIcon className="side-menu">
									{menu.icon}
								</ListItemIcon>
								{!collapsed && (
									<ListItemText primary={menu.title} />
								)}
							</ListItemButton>
						</ListItem>

						{/* Radicación Item with Submenu */}
						{menu.submenu.length > 0 && (
							<ListItem disablePadding>
								<ListItemButton
									onClick={() => handleMenuClick(menu.id)}
								>
									<ListItemIcon className="side-menu">
										{menu.icon}
									</ListItemIcon>
									{!collapsed && (
										<ListItemText primary={menu.title} />
									)}
									{openMenu === menu.id ? (
										<ExpandLessIcon />
									) : (
										<ExpandMoreIcon />
									)}
								</ListItemButton>
							</ListItem>
						)}

						{/* Submenu under Radicación */}
						<Collapse
							in={openMenu === menu.id}
							timeout="auto"
							unmountOnExit
						>
							<List component="div" disablePadding>
								{menu.submenu.map((submenu) => (
									<ListItem disablePadding key={submenu.id}>
										<ListItemButton
											sx={{ pl: 4 }}
											onClick={() =>
												handleSelectItem(
													submenu.id,
													submenu.route
												)
											}
											selected={
												selectedItem === submenu.id
											}
										>
											<ListItemText
												primary={submenu.title}
											/>
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</Collapse>
					</React.Fragment>
				))}
			</List>
		</Drawer>
	);
};

export default SideNav;
