import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "flowbite-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
	const menuData = [
		{ name: "Home", icon: "🏠", path: "/" },
		{ name: "About", icon: "ℹ️", submenu: [{ name: "Team", path: "/about/team" }] },
	  ];
	
	return (
		<>
			<div className="antialiased bg-gray-50 dark:bg-gray-900">
				<Navbar menuItems={menuData}/>
				<Sidebar />
				<main className="p-4 md:ml-64 h-auto pt-20">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
						<div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64" />
					</div>
					<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4" />
					<div className="grid grid-cols-2 gap-4 mb-4">
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
					</div>
					<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4" />
					<div className="grid grid-cols-2 gap-4">
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
						<div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
