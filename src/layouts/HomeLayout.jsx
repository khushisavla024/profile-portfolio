import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import TopBar from "../components/navigation/Topbar";

const HomeLayout = () => {
	const location = useLocation(); // <-- gives you the current path
	const path = location.pathname; // current pathname

	const [sideBarOpen, setSideBarOpen] = useState(false);
	return (
		<>
			<TopBar setSideBarOpen={setSideBarOpen} isSidebarOpen={sideBarOpen} />
			<Sidebar sideBarOpen={sideBarOpen} />

			<main
				className={`transition-all duration-300 ease-in-out ${sideBarOpen ? "mx-5 my-5 ml-[260px]" : "mx-10 my-5 ml-[104px]"}`}>
				<Outlet />
			</main>
		</>
	);
};

export default HomeLayout;
