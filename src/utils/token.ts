import { useEffect, useState } from "react";
import { decryptAES } from "./encrypt";

const hashSgdea = process.env.NEXT_PUBLIC_HASHSGDEA as string;

/**
 * Custom hook to handle the auth token logic.
 */
export const useAccessToken = () => {
	const [authHashSgdea, setAuthHashSgdea] = useState<string | null>(null);
	const [decryptedToken, setDecryptedToken] = useState<string | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedHash = localStorage.getItem(hashSgdea);
			setAuthHashSgdea(storedHash);
		}
	}, []);

	useEffect(() => {
		if (authHashSgdea) {
			const decrypted = decryptAES(authHashSgdea) as any;
			setDecryptedToken(decrypted?.accessToken);
		}
	}, [authHashSgdea]);

	return { authHashSgdea, decryptedToken };
};
