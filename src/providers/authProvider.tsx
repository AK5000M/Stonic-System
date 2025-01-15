import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ChildrenProps } from "@/types/index";
import { UserModelType } from "@/types/index";

import { SignInURL, DashboardURL } from "@/utils/routes";

const restrictedPages = [DashboardURL];
const restrictedPagesForReSellers = [DashboardURL];

export const AuthenticationProvider: React.FC<ChildrenProps> = ({
	children,
}) => {
	const router = useRouter();
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	);

	// Ensure that the user is correctly typed as UserModelType or null
	const user = useSelector(
		(state: RootState) => state.auth.user
	) as UserModelType | null;

	const currentRoute = router.pathname;

	useEffect(() => {
		if (typeof window !== "undefined") {
			// No need for `token`, rely on isAuthenticated
			const isRestricted = restrictedPages.includes(currentRoute);

			// Redirect if the page is restricted and user is not authenticated
			if (isRestricted && !isAuthenticated) {
				router.push(SignInURL);
			} else if (
				isAuthenticated &&
				(currentRoute === SignInURL || currentRoute === "/")
			) {
				router.push(DashboardURL);
			}
		}
	}, [isAuthenticated, currentRoute, router]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// If the user is a reseller, check restricted pages for resellers
			if (user && user.role === "reseller") {
				const isRestricted =
					restrictedPagesForReSellers.includes(currentRoute);

				if (!isRestricted && isAuthenticated) {
					router.push("/");
				}
			}
		}
	}, [isAuthenticated, currentRoute, user, router]);

	return <div className="authentication">{children}</div>;
};
