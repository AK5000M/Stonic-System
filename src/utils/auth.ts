"use client";
import axios from "axios";
import { decryptAuthAES } from "./encrypt";

let apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

// Function to validate user authorization and fetch submenu data
export const validateAuthOperacionesUser = async (authorization: string) => {
	try {
		const response = await axios.get(
			`${apiUrl}default/authorization-user`,
			{
				headers: {
					Authorization: "Bearer " + authorization,
					"Content-Type": "application/x-www-form-urlencoded",
					language: localStorage.getItem("language") || "es",
				},
			}
		);

		if (response.data) {
			const responseDecrypted = decryptAuthAES(
				response.data.encrypted,
				authorization
			);

			return responseDecrypted;
		} else {
			throw new Error("No data found in response");
		}
	} catch (error) {
		console.error("Error fetching authorization data:", error);
		throw error;
	}
};

// Function to process submenu data
export const jsonSubMenu = async (
	globalAppService: any,
	subMenuActive: string,
	dataService: any[]
) => {
	try {
		const responseJsonSubMenus = await globalAppService.subMenuGet();

		const subMenuCols: any[] = [];
		let index = -1;

		if (responseJsonSubMenus[subMenuActive]) {
			responseJsonSubMenus[subMenuActive].forEach((element: any) => {
				dataService.forEach((elementService: any) => {
					if (element.operacion === elementService) {
						index++;
						subMenuCols[index] = element;
					}
				});
			});
		}

		return subMenuCols;
	} catch (error) {
		console.error("Error processing submenu data:", error);
		throw error;
	}
};
