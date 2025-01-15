import CryptoJS from "crypto-js";

// Key for AES encryption
const llaveAES = process.env.NEXT_PUBLIC_llaveAES || "";

/**
 * Encrypts data using AES encryption.
 * @param data - The data to be encrypted.
 * @param base64 - Whether to encode the result in Base64 format.
 * @returns The encrypted string.
 */
export const encryptAES = (data: unknown, base64: boolean = false): string => {
	let encrypted = CryptoJS.AES.encrypt(
		JSON.stringify(data),
		llaveAES
	).toString();

	if (base64) {
		encrypted = btoa(encrypted).replace(/_/g, "/").replace(/-/g, "+");
	}

	return encrypted;
};

/**
 * Decrypts AES-encrypted data.
 * @param encryptedData - The encrypted string.
 * @returns The decrypted data as an object, or `null` if decryption fails.
 */
export const decryptAES = (encryptedData: string): unknown => {
	if (!encryptedData || typeof encryptedData !== "string") {
		console.error("Invalid encrypted data");
		return null;
	}

	try {
		// Attempt to decrypt the data
		const decrypted = CryptoJS.AES.decrypt(
			encryptedData,
			llaveAES
		).toString(CryptoJS.enc.Utf8);

		if (!decrypted) {
			console.error("Decryption resulted in an empty string");
			return null;
		}

		// Attempt to parse the decrypted string as JSON
		return JSON.parse(decrypted);
	} catch (error) {
		// Handle decryption or JSON parsing errors
		console.error("Decryption failed:", error);
		return null;
	}
};

/**
 * Encrypts data using AES encryption.
 * @param data - The data to be encrypted.
 * @param base64 - Whether to encode the result in Base64 format.
 * @returns The encrypted string.
 */
export const encryptAuthAES = (
	data: unknown,
	authorization: string | null,
	base64: boolean = false
): string => {
	let encrypted = CryptoJS.AES.encrypt(
		JSON.stringify(data),
		authorization + llaveAES
	).toString();

	if (base64) {
		encrypted = btoa(encrypted).replace(/_/g, "/").replace(/-/g, "+");
	}

	return encrypted;
};

/**
 * Decrypts after logged in
 * @param encrypted Variable a desenciptar
 * @param authorization
 */
export const decryptAuthAES = (
	encrypted: string,
	authorization: string | null
) => {
	const decrypted = CryptoJS.AES.decrypt(
		encrypted,
		authorization + llaveAES
	).toString(CryptoJS.enc.Utf8);
	return JSON.parse(decrypted);
};
