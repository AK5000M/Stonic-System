"use client";
import axios from "axios";

import { encryptAuthAES, decryptAuthAES } from "@/utils/encrypt";

// Function to fetch data with encryption and custom headers
export const filingGetApi = async (
	endpoint: string,
	params: any,
	authorization: string | null
) => {
	try {
		const encryptedParams = encryptAuthAES(params, authorization, true);
		const urlParams = `?request=${encryptedParams}`;

		// Make the GET request with encrypted params
		const response = await axios.get(endpoint + urlParams, {
			headers: {
				Authorization: "Bearer " + authorization,
				"Content-Type": "application/x-www-form-urlencoded",
				language: localStorage.getItem("language") || "es",
			},
		});

		// If there's encrypted response, decrypt it
		if (response.data && response.data.encrypted) {
			const decryptedResponse = decryptAuthAES(
				response.data.encrypted,
				authorization
			);
			// Handle the response if a file is included
			if (response.data.datafile) {
				decryptedResponse.datafile = response.data.datafile;
			}
			return decryptedResponse;
		} else {
			throw new Error("No encrypted data found in response");
		}
	} catch (error: any) {
		console.error("Error filing in:", error.message);
		throw error;
	}
};

// Function to fetch service data
export const ServiceTypeGetApi = async (endpoint: string) => {
	try {
		const response = await axios.get(endpoint);
		return response;
	} catch (error: any) {
		console.error("Error fetch serviceType in:", error.message);
		throw error;
	}
};

// Function to fetch request type
export const RequestTypeGetApi = async (endpoint: string) => {
	try {
		const response = await axios.get(endpoint);
		return response;
	} catch (error: any) {
		console.error("Error fetch requestType in:", error.message);
		throw error;
	}
};

// Function to get general list
export const GeneralListGetApi = async (
	endpoint: string,
	authorization: string | null
) => {
	try {
		const response = await axios.get(endpoint, {
			headers: {
				Authorization: `Bearer ${authorization}`,
				"Content-Type": "application/x-www-form-urlencoded",
				language: localStorage.getItem("language") || "es",
			},
		});
		return response.data;
	} catch (error: any) {
		console.error("Error fetch requestType in:", error.message);
	}
};
