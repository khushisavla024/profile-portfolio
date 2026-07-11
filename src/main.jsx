import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StatusProvider } from "@/context/StatusProvider";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StatusProvider>
			<App />
		</StatusProvider>
	</StrictMode>,
);
