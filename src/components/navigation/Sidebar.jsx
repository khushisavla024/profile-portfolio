import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import UniversalAssets from "../component/UniversalAssets";

export const navItems = [
	{
		id: "dashboard",
		label: "Dashboard",
		page: "/dashboard",
		icon: "home",
	},
	{
		id: "allProjects",
		label: "All Projects",
		page: "/project",
		icon: "salary",
	},
	{
		id: "activeProjects",
		label: "Active Projects",
		page: "/project?status=active",
		icon: "loader",
	},
	{
		id: "completedProjects",
		label: "Completed Projects",
		page: "/project?status=completed",
		icon: "circleCheck",
	},
	{
		id: "invoices",
		label: "Expense Tracker",
		page: "/money",
		icon: "invoice",
	},
	{
		id: "payments",
		label: "Payments",
		page: "/money?tab=payments",
		icon: "wallet",
	},
	{
		id: "settings",
		label: "Settings",
		page: "/setting",
		icon: "settings",
	},
	{
		id: "logout",
		label: "Logout",
		page: "/",
		icon: "logout",
	},
];

const Sidebar = ({
	sideBarOpen,
	onLogout,
	footerLogo,
	footerMiniLogo,
	footerClick,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const location = useLocation();

	// Direct path match + search parameter match for query-based routing active state
	const isLinkActive = (page) => {
		const fullTargetUrl = `/home${page}`;
		const currentUrl = location.pathname + location.search;
		return currentUrl === fullTargetUrl;
	};

	return (
		<>
			{/* Sidebar Shell - Claymorphism styling */}
			<nav
				className={`fixed top-16 left-3 h-[88vh] flex flex-col justify-between p-3 transition-all duration-300 group hover:w-60 rounded-2xl bg-[#f4f7f6] text-gray-700 border border-white/40 ${
					sideBarOpen ? "w-60" : "w-16"
				} shadow-[inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_8px_rgba(163,177,198,0.2),8px_8px_16px_rgba(163,177,198,0.4)]`}>
				{/* Main Navigation Links */}
				<ul className="space-y-3 overflow-y-auto flex-1 select-none pr-1">
					{navItems.map(({ id, label, page, icon }) => {
						const isLogout = id === "logout";
						const active = isLinkActive(page);

						return (
							<li key={id} className="w-full">
								<NavLink
									to={isLogout ? "#" : `/home${page}`}
									onClick={(e) => {
										if (isLogout) {
											e.preventDefault();
											setIsModalOpen(true);
										}
									}}
									className={`flex items-center transition-all duration-200 border border-transparent rounded-xl p-2.5
                                        ${
																					sideBarOpen
																						? "justify-start gap-3"
																						: "justify-center group-hover:justify-start group-hover:gap-3"
																				}
                                        ${
																					active && !isLogout
																						? "bg-[#e0e8f5] text-blue-600 border-white shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7),inset_-2px_-2px_5px_rgba(163,177,198,0.2)]"
																						: "hover:bg-white/60 hover:shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8)]"
																				}`}>
									<UniversalAssets asset={icon} className="h-5 w-5 shrink-0" />

									<span
										className={`text-[15px] font-medium truncate transition-all duration-200 ${
											sideBarOpen
												? "opacity-100 w-auto visible"
												: "opacity-0 w-0 invisible group-hover:opacity-100 group-hover:w-auto group-hover:visible"
										}`}>
										{label}
									</span>
								</NavLink>
							</li>
						);
					})}
				</ul>

				{/* Footer Image/Logo Branding Block */}
				<div className="pt-4 border-t border-gray-200/50 flex justify-center relative h-12 items-center">
					<div
						className={`transition-all duration-200 ${sideBarOpen ? "block" : "hidden group-hover:block"}`}>
						<UniversalAssets
							asset={footerLogo}
							className="h-8 cursor-pointer object-contain"
							imgHandler={footerClick}
						/>
					</div>
					<div
						className={`transition-all duration-200 ${sideBarOpen ? "hidden" : "block group-hover:hidden"}`}>
						<UniversalAssets
							asset={footerMiniLogo}
							className="h-8 cursor-pointer object-contain"
							imgHandler={footerClick}
						/>
					</div>
				</div>
			</nav>

			{/* Direct Logout Pop-Up Box */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
					<div className="bg-[#f4f7f6] p-6 rounded-2xl max-w-sm w-full text-center border border-white/50 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.15)]">
						<h3 className="text-lg font-bold text-gray-800">Are you sure?</h3>
						<p className="text-sm text-gray-500 mt-1">Do you want to logout?</p>
						<div className="mt-5 flex justify-center gap-4">
							<button
								onClick={() => setIsModalOpen(false)}
								className="px-5 py-2 rounded-xl text-sm font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] shadow-[2px_3px_6px_rgba(0,0,0,0.05)] cursor-pointer transition-all">
								Cancel
							</button>
							<button
								onClick={onLogout}
								className="px-5 py-2 rounded-xl text-sm font-medium text-white bg-red-500 hover:bg-red-600 active:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] shadow-[2px_4px_8px_rgba(239,68,68,0.3)] cursor-pointer transition-all">
								Logout
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Sidebar;
