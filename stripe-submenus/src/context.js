import React, { useState, useContext } from "react";
import sublinks from "./data";
import Submenu from "./Submenu";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: "", links: [] });

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setPage(page);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubmenuOpen,
				openSidebar,
				closeSidebar,
				openSubmenu,
				closeSubmenu,
				location,
				page,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
