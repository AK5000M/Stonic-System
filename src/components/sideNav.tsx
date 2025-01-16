import React, { useEffect, useState } from "react";
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
	const [openMenus, setOpenMenus] = useState<string[]>([]); // Track open menus
	const [selectedItem, setSelectedItem] = useState<string>("");
	const router = useRouter(); // Initialize the router

	// Menu data structure
	const menuData = [
		{
			id: "panel",
			title: "Panel",
			icon: <DashboardOutlinedIcon />,
			submenu: [],
			route: "/dashboard",
		},
		{
			id: "radicacion",
			title: "Radicación",
			icon: <HighQualityOutlinedIcon />,
			submenu: [
				{
					id: "radicacion-estandar",
					title: "Radicación estándar",
					icon: <DashboardOutlinedIcon />, // Add submenu icons
					route: "/filing",
				},
				{
					id: "radicacion-correo",
					title: "Radicación correo e.",
					icon: <HighQualityOutlinedIcon />,
					route: "/filing/email",
				},
			],
		},
		{
			id: "newMenu",
			title: "New Menu",
			icon: <HighQualityOutlinedIcon />,
			submenu: [
				{
					id: "new-submenu",
					title: "New submenu",
					icon: <DashboardOutlinedIcon />,
					route: "/",
				},
				{
					id: "new-submenu-2",
					title: "New Submenu 2",
					icon: <HighQualityOutlinedIcon />,
					route: "/filing/email",
				},
			],
		},
	];

	const handleToggle = () => setCollapsed(!collapsed);

	const handleMenuClick = (menuId: string) => {
		setOpenMenus((prevOpenMenus) =>
			prevOpenMenus.includes(menuId)
				? prevOpenMenus.filter((id) => id !== menuId)
				: [...prevOpenMenus, menuId]
		);
	};

	const handleSelectItem = (item: string, route: string) => {
		setSelectedItem(item);
		router.push(route);
	};

	// Automatically open the menu based on the current route
	useEffect(() => {
		const activeMenu = menuData.find((menu) =>
			menu.submenu.some((submenu) => submenu.route === router.pathname)
		);

		if (activeMenu) {
			setOpenMenus([activeMenu.id]);
			const activeSubmenu = activeMenu.submenu.find(
				(submenu) => submenu.route === router.pathname
			);
			setSelectedItem(activeSubmenu ? activeSubmenu.id : "");
		} else {
			const activeTopLevelMenu = menuData.find(
				(menu) => menu.route === router.pathname
			);
			if (activeTopLevelMenu) {
				setSelectedItem(activeTopLevelMenu.id);
			}
		}
	}, [router.pathname]);

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
				<Image
					src={
						collapsed
							? "/assets/logo/logo-sm.webp"
							: "/assets/logo/logo.webp"
					}
					alt="Logo"
					width={120}
					height={40}
					style={{ objectFit: "contain" }}
					priority
				/>
			</Box>

			<Box sx={{ display: "flex", justifyContent: "flex-end", px: 1 }}>
				<IconButton onClick={handleToggle}>
					{collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</Box>

			<List>
				{menuData.map((menu) => (
					<React.Fragment key={menu.id}>
						<ListItem disablePadding>
							<ListItemButton
								selected={selectedItem === menu.id}
								onClick={() =>
									menu.submenu.length === 0
										? handleSelectItem(
												menu.id,
												menu.route || ""
										  )
										: handleMenuClick(menu.id)
								}
							>
								<ListItemIcon style={{ minWidth: "30px" }}>
									{menu.icon}
								</ListItemIcon>
								{!collapsed && (
									<ListItemText primary={menu.title} />
								)}
								{menu.submenu.length > 0 && (
									<IconButton edge="end">
										{openMenus.includes(menu.id) ? (
											<ExpandLessIcon />
										) : (
											<ExpandMoreIcon />
										)}
									</IconButton>
								)}
							</ListItemButton>
						</ListItem>

						<Collapse
							in={openMenus.includes(menu.id)}
							timeout="auto"
							unmountOnExit
						>
							<List component="div" disablePadding>
								{menu.submenu.map((submenu) => (
									<ListItem disablePadding key={submenu.id}>
										<ListItemButton
											sx={{ pl: 4 }}
											selected={
												selectedItem === submenu.id
											}
											onClick={() =>
												handleSelectItem(
													submenu.id,
													submenu.route
												)
											}
										>
											{!collapsed && (
												<ListItemText
													primary={submenu.title}
												/>
											)}
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
