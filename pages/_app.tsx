import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { lightTheme } from "../themes";
import UiProvider from "../context/UiProvider";
import CartProvider from "../context/Cart/CartProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<UiProvider>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</UiProvider>
		</CartProvider>
	);
}

export default MyApp;
