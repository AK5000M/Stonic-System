// src/pages/index.tsx
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { DashboardURL, SignInURL } from "@/utils/routes";

const IndexPage = () => {
	const router = useRouter();
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	);

	useEffect(() => {
		if (isAuthenticated) {
			// If the user is authenticated, redirect to the dashboard
			router.push(DashboardURL);
		} else {
			// If the user is not authenticated, redirect to the login page
			router.push(SignInURL);
		}
	}, [isAuthenticated, router]);

	return (
		<div>
			<h1>Loading...</h1>
		</div>
	);
};

export default IndexPage;
