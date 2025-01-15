// import Router from "next/router";

import { AppDispatch } from "@/store";
// import { loginSuccess } from "../reducers/authReducer";
// import { loginApi } from "@/store/apis/auth";

// import { DashboardURL } from "@/utils/routes";

export const login =
	(username: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			console.log(username, password);
		} catch (error) {
			console.error("Login failed", error);
			// Handle login failure (e.g., dispatch an error action, show a notification, etc.)
		}
	};
