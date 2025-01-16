"use client";
import axios from "axios";

import { encryptAuthAES, decryptAuthAES } from "@/utils/encrypt";
import { filingGetApi } from "../apis/filing";

// Function to fetch data with encryption and custom headers
export const fetchStandardFilingData = async (
	endpoint: string,
	params: any,
	authorization: string | null
) => {
	try {
		const response = await filingGetApi(endpoint, params, authorization);

		return response;
	} catch (error: any) {
		console.error("Error filing in:", error.message);
		throw error;
	}
};
