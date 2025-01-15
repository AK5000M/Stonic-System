import { AppDispatch } from "@/store";
import { loginSuccess } from "../reducers/authReducer";
import { loginApi } from "@/store/apis/auth";
import Router from "next/router";
import { DashboardURL } from "@/utils/routes";
import { UserModelType } from "@/types";

// Updated login function to match the expected user structure in loginSuccess
export const login =
	(username: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			// Fetch user data from API
			const response = (await loginApi(
				username,
				password
			)) as UserModelType;

			// Map the response to the required structure for the reducer
			const userPayload = {
				user: {
					idRol: response.idRol || "",
					username: response.username || "",
					email: response.email || "",
				},
				accessToken: response.accessToken || "",
			};

			// Dispatch the success action with the correctly shaped payload
			dispatch(loginSuccess(userPayload));

			// Redirect to the dashboard page
			Router.push(DashboardURL);
		} catch (error) {
			console.error("Login failed", error);
		}
	};
