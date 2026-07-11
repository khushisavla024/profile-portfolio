import statusContext from "@/context/statusContext";
import { useContext } from "react";
import UniversalAssets from "../component/UniversalAssets";

const ErrorModal = () => {
	const { errorModal, setErrorModal, errorMessage } = useContext(statusContext);

	return (
		<div
			className={`bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
				errorModal ? "visible opacity-100" : "invisible opacity-0"
			}`}>
			<div className="relative max-h-[70vh] w-fit max-w-[30vw] min-w-[300px] rounded-xl bg-white px-4 pt-8 pb-4 shadow-xl">
				<div className="flex h-full flex-col">
					{/* Header with image */}
					<div className="flex flex-col items-center justify-center gap-2">
						<UniversalAssets
							asset={"circlex"}
							className="text-red-600"
							size={60}
						/>
						<p className="text-2xl font-medium">Error</p>
					</div>

					{/* Error message */}
					<div className="wrap-break-words mt-3 mb-4 max-h-[30vh] overflow-y-auto px-2 text-center text-gray-600">
						{typeof errorMessage === "string" ? (
							<div className="whitespace-pre-line break-words">
								{errorMessage}
							</div>
						) : (
							errorMessage
						)}
					</div>

					{/* Footer */}
					<div className="mt-auto flex w-full justify-center pt-2">
						<button
							onClick={() => setErrorModal(false)}
							className="w-full cursor-pointer rounded-lg bg-[#d40008] py-2 font-medium text-white hover:bg-red-600">
							OK
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ErrorModal;
