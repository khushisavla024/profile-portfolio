import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/component/ErrorPage";
import Portfolio from "./pages/portfolio";
import HomeLayout from "./layouts/HomeLayout";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";

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
