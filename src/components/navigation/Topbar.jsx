import { useNavigate } from "react-router-dom";
import UniversalAssets from "../component/UniversalAssets";

const TopBar = ({ isSidebarOpen, setSideBarOpen }) => {
	const navigate = useNavigate();

	return (
		<>
			<div className="sticky top-0 z-10">
				<header className="border-b-2 border-gray-300 bg-white">
					<div className="mx-10 flex h-14 items-center justify-between">
						<div className="flex items-center gap-10">
							<button onClick={() => setSideBarOpen((prev) => !prev)}>
								<span className="relative block h-5 w-5">
									<UniversalAssets
										asset={"menu"}
										className={`absolute top-0 left-0 cursor-pointer text-gray-400 transition-all duration-300 ease-in-out ${
											isSidebarOpen
												? "scale-75 rotate-90 opacity-0"
												: "scale-100 rotate-0 opacity-100"
										}`}
										size={19}
										strokeWidth={2.5}
									/>
									<UniversalAssets
										asset={"x"}
										className={`absolute top-0 left-0 cursor-pointer text-gray-400 transition-all duration-300 ease-in-out ${
											isSidebarOpen
												? "scale-100 rotate-0 opacity-100"
												: "scale-75 -rotate-90 opacity-0"
										}`}
										size={19}
										strokeWidth={2.5}
									/>
								</span>
							</button>
							<div>
								<UniversalAssets
									// asset={`${import.meta.env.BASE_URL}images/cbi-full-logo.png`}
									className="h-10 cursor-pointer object-contain"
									alt="TOS Logo"
									imgHandler={() => {
										navigate(`homepage`);
										setShowCorrectionModal(true);
									}}
								/>
							</div>
						</div>
						<div className={`flex items-center justify-center `}>
							<h1 className="text-2xl font-bold text-[var(--primary-color)]">
								{/* Central Bank Of India */}
								UserName
							</h1>
						</div>
					</div>
				</header>
			</div>
		</>
	);
};

export default TopBar;
