import { useState } from "react";
import { NavLink } from "react-router-dom";
import UniversalAssets from "../component/UniversalAssets";

export const navItems = [
	{ id: "dashboard", label: "Dashboard", page: "dashboard", icon: "home" },
	{
		id: "projects",
		label: "Projects",
		children: [
			{
				id: "allProjects",
				label: "All Projects",
				page: "projects",
				icon: "folder",
			},
			{
				id: "activeProjects",
				label: "Active Projects",
				page: "projects/active",
				icon: "play",
			},
			{
				id: "completedProjects",
				label: "Completed",
				page: "projects/completed",
				icon: "circleCheck",
			},
		],
	},
	{
		id: "finance",
		label: "Finance",
		children: [
			{ id: "invoices", label: "Invoices", page: "invoices", icon: "invoice" },
			{ id: "payments", label: "Payments", page: "payments", icon: "wallet" },
		],
	},
	{ id: "settings", label: "Settings", page: "settings", icon: "settings" },
	{ id: "logout", label: "Logout", page: "", icon: "powericon" },
];

const Sidebar = ({
	sideBarOpen,
	onLogout,
	footerLogo,
	footerMiniLogo,
	footerClick,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	return (
		<>
			{/* Sidebar Shell */}
			<nav
				className={`fixed top-14 left-0 h-[91vh] flex flex-col justify-between border-r border-gray-200 bg-white p-3 transition-all duration-300 ${sideBarOpen ? "w-60" : "w-16"}`}>
				{/* Main Navigation Links */}
				<ul className="space-y-2 overflow-y-auto flex-1">
					{navItems.map(({ id, label, page, icon, children }) => {
						const hasChildren = !!children;

						return (
							<li key={id}>
								<NavLink
									to={
										hasChildren || id === "logout" ? "#" : `/home/list/${page}`
									}
									onClick={(e) => {
										if (hasChildren) {
											e.preventDefault();
											setOpenDropdown(openDropdown === id ? null : id); // Toggle collapse
										} else if (id === "logout") {
											e.preventDefault();
											setIsModalOpen(true); // Open logout pop-up
										}
									}}
									className={({ isActive }) =>
										`flex items-center gap-3 p-2 rounded-md text-gray-600 transition hover:bg-gray-100 ${isActive && !hasChildren ? "bg-blue-50 text-blue-600 font-medium" : ""}`
									}>
									<UniversalAssets asset={icon} className="h-5 w-5" />
									{sideBarOpen && (
										<span className="text-[15px] truncate">{label}</span>
									)}
								</NavLink>

								{/* Child Submenu Dropdowns */}
								{hasChildren && openDropdown === id && sideBarOpen && (
									<ul className="ml-6 mt-1 space-y-1 border-l border-gray-200 pl-2">
										{children.map((child) => (
											<li key={child.id}>
												<NavLink
													to={`/home/list/${child.page}`}
													className={({ isActive }) =>
														`flex items-center justify-between p-2 rounded-md text-xs hover:bg-gray-50 ${isActive ? "text-blue-600 font-medium" : "text-gray-500"}`
													}>
													<span>{child.label}</span>
													<UniversalAssets
														asset={child.icon}
														className="h-4 w-4"
													/>
												</NavLink>
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>

				{/* Footer Image/Logo Branding Block */}
				<div className="pt-4 border-t border-gray-100 flex justify-center">
					<UniversalAssets
						asset={sideBarOpen ? footerLogo : footerMiniLogo}
						className="h-8 cursor-pointer object-contain"
						imgHandler={footerClick}
					/>
				</div>
			</nav>

			{/* Direct Logout Pop-Up Box */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs">
					<div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
						<h3 className="text-lg font-bold text-gray-900">Are you sure?</h3>
						<p className="text-sm text-gray-500 mt-1">Do you want to logout?</p>
						<div className="mt-4 flex justify-center gap-3">
							<button
								onClick={() => setIsModalOpen(false)}
								className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
								Cancel
							</button>
							<button
								onClick={onLogout}
								className="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 cursor-pointer">
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
