import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeSwitcher() {
	const [isDarkTheme, setIsDarkTheme] = useState(localStorage.theme == "dark");

	const checkThemePreference = () => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			setIsDarkTheme(true);
		} else {
			document.documentElement.classList.remove("dark");
			setIsDarkTheme(false);
		}
	};

	const detectSchemeChange = (e) => {
		if (e.matches) {
			document.documentElement.classList.add("dark");
			setIsDarkTheme(true);
		} else {
			document.documentElement.classList.remove("dark");
			setIsDarkTheme(false);
		}
	};

	useEffect(() => {
		checkThemePreference();
		if (!("theme" in localStorage)) {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", detectSchemeChange);
		}
	}, []);

	const toggleTheme = (isDarkTheme) => {
		if (isDarkTheme) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	};

	return (
		<Switch
			checked={isDarkTheme}
			onChange={() => {
				toggleTheme(!isDarkTheme);
				setIsDarkTheme(!isDarkTheme);
			}}
			className={`${
				isDarkTheme ? "bg-slate-200" : "bg-slate-950"
			} relative inline-flex h-8 w-14 items-center`}
		>
			<span className="sr-only">Change theme</span>
			<span
				className={`${
					isDarkTheme
						? "translate-x-[30px] bg-slate-500"
						: "translate-x-[6px] bg-slate-100"
				} absolute h-5 w-5 transform transition`}
			/>
			<div
				className={`${
					isDarkTheme
						? "translate-x-[8px] text-slate-600"
						: "translate-x-[32px] text-slate-400"
				} absolute h-4 w-4 transform rounded-full transition`}
			>
				{isDarkTheme ? <SunIcon /> : <MoonIcon />}
			</div>
		</Switch>
	);
}
