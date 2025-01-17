// components/BreadcrumbsComponent.tsx

import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

// Define the types for breadcrumb props
interface Breadcrumb {
	label: string;
	href: string;
}

interface BreadcrumbsComponentProps {
	breadcrumbs: Breadcrumb[];
}

const BreadcrumbsComponent: React.FC<BreadcrumbsComponentProps> = ({
	breadcrumbs,
}) => {
	return (
		<Breadcrumbs separator="›" aria-label="breadcrumb">
			{/* Home Icon Link */}
			<Link
				underline="hover"
				color="inherit"
				href="/"
				sx={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<HomeOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
			</Link>
			{/* Dynamic Breadcrumb Links */}
			{breadcrumbs.map((breadcrumb, index) => (
				<Link
					key={index}
					underline="hover"
					color="inherit"
					href={breadcrumb.href}
				>
					{breadcrumb.label}
				</Link>
			))}
		</Breadcrumbs>
	);
};

export default BreadcrumbsComponent;
