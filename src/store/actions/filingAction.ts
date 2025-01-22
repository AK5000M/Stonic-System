"use client";
import axios from "axios";

import { encryptAuthAES, decryptAuthAES } from "@/utils/encrypt";
import {
	filingGetApi,
	ServiceTypeGetApi,
	RequestTypeGetApi,
	GeneralListGetApi,
} from "../apis/filing";

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

// Get Service Type Data
export const fetchServiceTypeData = async (endpoint: string) => {
	try {
		const response = await ServiceTypeGetApi(endpoint);
		return response;
	} catch (error: any) {
		console.error("Error service type data in:", error.message);
		throw error;
	}
};

// Function to fetch Request Type
export const fetchRequestTypeData = async (endpoint: string) => {
	try {
		const response = await RequestTypeGetApi(endpoint);
		return response;
	} catch (error: any) {
		console.error("Error service type data in:", error.message);
		throw error;
	}
};

// Function to fetch General Filing List
export const fetchGeneralListData = async (
	endpoint: string,
	authorization: string | null
) => {
	try {
		const response = await GeneralListGetApi(endpoint, authorization);
		return response;
	} catch (error: any) {
		console.error("Error service type data in:", error.message);
		throw error;
	}
};
