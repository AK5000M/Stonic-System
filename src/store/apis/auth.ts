import axios from "axios";

import { decryptAES, encryptAES } from "@/utils/encrypt";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const hashSgdea = process.env.NEXT_PUBLIC_HASHSGDEA as string;
const hashMenu = process.env.NEXT_PUBLIC_HASHMENU as string;
const hashTimeOut = process.env.NEXT_PUBLIC_HASHTIMEOUT as string;
const HashMailSgdea = process.env.NEXT_PUBLIC_HASGMAINSGDEA as string;
const hashMailInitialListSgdea = process.env
	.NEXT_PUBLIC_HASHMAININITIALLISTSGEA as string;

// Define types for the responses
interface AuthPostResponse {
	status: number;
	data?: unknown;
	encrypted?: string;
}

interface ConfirmLoginResponse {
	data: unknown;
}

// Utility: Auth POST function
const authPost = async (
	action: string,
	data: unknown,
	resOnlyDecrypt = true
) => {
	try {
		const dataEncrypted = encryptAES(data);
		const dataSend = encodeURIComponent(JSON.stringify(dataEncrypted));
		const jsonParams = `jsonSend=${dataSend}`;

		const response = await axios.post(action, jsonParams, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				language: localStorage.getItem("language") || "en",
			},
		});

		const responseEncrypted = response.data.encrypted;
		const responseDecrypted = decryptAES(responseEncrypted);

		if (resOnlyDecrypt) {
			return responseDecrypted;
		}

		if (
			typeof responseDecrypted === "object" &&
			responseDecrypted !== null
		) {
			return {
				...responseDecrypted,
				encrypted: responseEncrypted,
			};
		}
	} catch (error: unknown) {
		if (axios.isAxiosError(error) && error.response?.data?.message) {
			throw new Error(error.response.data.message);
		}
		throw new Error("Request failed");
	}
};

const confirmLogin = async (data: unknown) => {
	try {
		const action = `${API_BASE_URL}site/login`;
		const res = await authPost(action, data, false);
		return res;
	} catch (error) {
		console.log(error);
	}
};

const analyzeLocalStorage = (username: string) => {
	const hashMailSgdea = localStorage.getItem(HashMailSgdea);
	const hashMailSgdeaDecipted = decryptAES(hashMailSgdea as string) as {
		userLoginApp?: string;
	};

	if (hashMailSgdeaDecipted && hashMailSgdeaDecipted.userLoginApp) {
		/** Compare the current user with the user who performed the email process in the previous session */
		if (hashMailSgdeaDecipted.userLoginApp !== username) {
			localStorage.removeItem(HashMailSgdea);
			localStorage.removeItem(hashMailInitialListSgdea);
		}
	} else {
		localStorage.removeItem(HashMailSgdea);
		localStorage.removeItem(hashMailInitialListSgdea);
	}
};

export const loginApi = async (username: string, password: string) => {
	const data = {
		username,
		password,
	};

	const action = `${API_BASE_URL}site/user-status-licensing`;

	const res = (await authPost(action, data, false)) as AuthPostResponse;

	if (res.status == 200) {
		const response = (await confirmLogin(data)) as ConfirmLoginResponse;

		const dataUser = response.data;

		localStorage.setItem(hashSgdea, encryptAES(dataUser, false));
		localStorage.setItem(hashMenu, encryptAES(dataUser, false));
		localStorage.setItem(hashTimeOut, encryptAES(dataUser, false));

		analyzeLocalStorage(data.username);

		return response.data;
	} else {
		throw new Error("Login failed");
	}
};
