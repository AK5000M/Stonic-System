// src/pages/_app.tsx
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { AuthenticationProvider } from "@/providers/authProvider";
// import { SocketContextProvider } from "@/hooks/use-socket";
import createEmotionCache from "@/utils/createEmotionCache";
import theme from "@/styles/theme";
import { store } from "@/store";
import "../src/styles/globals.scss";
import "../src/styles/topNav.scss";

import { SignInURL } from "@/utils/routes";

const hashSgdea = process.env.NEXT_PUBLIC_HASHSGDEA as string;

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	// Router for page redirection
	const router = useRouter();

	useEffect(() => {
		// Check if user is authenticated and redirect if not
		if (typeof window !== "undefined") {
			const token = localStorage.getItem(hashSgdea);
			if (!token) {
				router.push(SignInURL);
			}
		}
	}, [router]); // Runs when the component is mounted

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Opentic Free Software</title>
			</Head>
			<CacheProvider value={emotionCache}>
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						{/* <SocketContextProvider> */}
						<AuthenticationProvider>
							<ToastContainer />
							<CssBaseline />
							<Component {...pageProps} />
						</AuthenticationProvider>
						{/* </SocketContextProvider> */}
					</ThemeProvider>
				</Provider>
			</CacheProvider>
		</React.Fragment>
	);
}
