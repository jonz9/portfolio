"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children, ...props }: ThemeProviderProps) {
	const router = useRouter();

	const navigate = (url: string) => {
		router.push(url);
	};

	return (
		<NextUIProvider navigate={navigate}>
			<NextThemesProvider
				attribute="class"
				defaultTheme="light"
				themes={["light", "dark"]}
				storageKey="portfolio-theme"
				{...props}
			>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
