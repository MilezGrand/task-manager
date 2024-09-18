import {
	createHashRouter,
	RouterProvider
} from "react-router-dom";
import HomePage from "../../pages/home/ui/HomePage";

const router = createHashRouter([
	{
		path: "/",
		element: <HomePage />,
	},
]);


export const AppRouter = () => {
	return <RouterProvider router={router} />
}