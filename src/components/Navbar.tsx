import Link from "next/link";
import React from "react";
import ThemeSwitch from "@/components/ThemeSwitcher";

const navItems = [
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Experience",
		href: "/experience",
	},
	{
		label: "Projects",
		href: "/projects",
	},
];

const Navbar = () => {
	return (
		<div className="flex items-center justify-between">
			<div>Here is signature</div>
			<div className="flex items-center gap-4">
				{navItems.map((item, key) => (
					<Link
						key={key}
						href={item.href}
						className="font-medium text-md"
					>
						{item.label}
					</Link>
				))}
				<ThemeSwitch />
			</div>
		</div>
	);
};

export default Navbar;
