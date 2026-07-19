import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/component/ErrorPage";
import HomeLayout from "./layouts/HomeLayout";
import Dashboard from "./pages/Dashboard";
import ExpenseTracker from "./pages/ExpenseTracker";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Setting from "./pages/Setting";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route errorElement={<ErrorPage />}>
					<Route path="/" element={<Portfolio />} />
					<Route
						path="home"
						element={<HomeLayout />}
						errorElement={<ErrorPage />}>
						<Route path="homepage" element={<Homepage />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="money" element={<ExpenseTracker />} />
						<Route path="project" element={<Projects />} />
						<Route path="setting" element={<Setting />} />
						{/* <Route path="listSearch/:params" element={<DynamicPage />} /> */}
						{/* <Route path="list">
							<Route path="form27QDeductee" element={<Form27QDeductee />} />
						</Route> */}
					</Route>
				</Route>

				{/* Catch-all route for 404s */}
				<Route path="*" element={<PageNotFound />} />
			</>,
		),
	);
	return <RouterProvider router={router} />;
};

export default App;
