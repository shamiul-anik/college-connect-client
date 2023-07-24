/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../pages/shared/Loader/Loader";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const ErrorPage = lazy(() => import("../pages/shared/ErrorPage/ErrorPage"));

const Home = lazy(() => import("../pages/Home/Home"));
const Colleges = lazy(() => import("../pages/Colleges/Colleges"));
const ViewCollege = lazy(() => import("../pages/ViewCollege/ViewCollege"));
// const Classes = lazy(() => import("../pages/Classes/Classes"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
// const About = lazy(() => import("../pages/About/About"));

// const Login = lazy(() => import("../pages/Authentication/Login/Login"));
// const Registration = lazy(() => import("../pages/Authentication/Registration/Registration"));
// const PasswordReset = lazy(() => import("../pages/Authentication/PasswordReset/PasswordReset"));
// const Profile = lazy(() => import("../pages/Authentication/Profile/Profile"));

const PrivateRoute = lazy(() => import("./PrivateRoute"));
// const AdminRoute = lazy(() => import("./AdminRoute"));

// const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
// const ManageUsers = lazy(() => import("../pages/Dashboard/Admin/ManageUsers/ManageUsers"));
// const ManageClasses = lazy(() => import("../pages/Dashboard/Admin/ManageClasses/ManageClasses"));
// const AddClass = lazy(() => import("../pages/Dashboard/Instructor/AddClass/AddClass"));
// const MyClasses = lazy(() => import("../pages/Dashboard/Instructor/MyClasses/MyClasses"));
// const MySelectedClasses = lazy(() => import("../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses"));
// const MyEnrolledClasses = lazy(() => import("../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses"));
// const MyPaymentHistory = lazy(() => import("../pages/Dashboard/Student/MyPaymentHistory/MyPaymentHistory"));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<Loader></Loader>}><Home></Home></Suspense>,
			},
			{
				path: '/colleges',
				element: <Suspense fallback={<Loader></Loader>}><Colleges></Colleges></Suspense>,
			},
			{
				path: "/college/:id",
				// element: <Suspense fallback={<Loader></Loader>}><ViewCollege></ViewCollege></Suspense>,
				element: <Suspense fallback={<Loader></Loader>}><PrivateRoute><ViewCollege></ViewCollege></PrivateRoute></Suspense>,
				loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/college/${params.id}`)
			},
			// {
			// 	path: 'login',
			// 	element: <Suspense fallback={<Loader></Loader>}><Login></Login></Suspense>
			// },
			// {
			// 	path: 'registration',
			// 	element: <Suspense fallback={<Loader></Loader>}><Registration></Registration></Suspense>
			// },
			// {
			// 	path: 'password-reset',
			// 	element: <Suspense fallback={<Loader></Loader>}><PasswordReset></PasswordReset></Suspense>
			// },
			// {
			// 	path: 'profile',
			// 	element: <Suspense fallback={<Loader></Loader>}><Profile></Profile></Suspense>
			// },
			{
				path: 'contact',
				element: <Suspense fallback={<Loader></Loader>}><Contact></Contact></Suspense>
			},
			// {
			// 	path: 'about',
			// 	element: <Suspense fallback={<Loader></Loader>}><About></About></Suspense>
			// }
		]
	},
	// {
	// 	path: '/dashboard',
	// 	element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
	// 	errorElement: <ErrorPage></ErrorPage>,
	// 	children: [
	// 		{
	// 			path: '/dashboard',
	// 			element: <Suspense fallback={<Loader></Loader>}><Dashboard></Dashboard></Suspense>,
	// 		},
	// 		{
	// 			path: '/dashboard/manage-users',
	// 			element: <Suspense fallback={<Loader></Loader>}><AdminRoute><ManageUsers></ManageUsers></AdminRoute></Suspense>,
	// 		},
	// 		{
	// 			path: '/dashboard/manage-classes',
	// 			element: <Suspense fallback={<Loader></Loader>}><AdminRoute><ManageClasses></ManageClasses></AdminRoute></Suspense>,
	// 		},
	// 		{
	// 			path: '/dashboard/add-a-class',
	// 			element: <Suspense fallback={<Loader></Loader>}><InstructorRoute><AddClass></AddClass></InstructorRoute></Suspense>,
	// 		},
	// 		{
	// 			path: '/dashboard/my-classes',
	// 			element: <Suspense fallback={<Loader></Loader>}><InstructorRoute><MyClasses></MyClasses></InstructorRoute></Suspense>,
	// 		},
	// 		{
	// 			path: '/dashboard/my-selected-classes',
	// 			element: <Suspense fallback={<Loader></Loader>}><MySelectedClasses></MySelectedClasses></Suspense>,
	// 		},
	// 		{
	// 			path: '/dashboard/my-enrolled-classes',
	// 			element: <Suspense fallback={<Loader></Loader>}><MyEnrolledClasses></MyEnrolledClasses></Suspense>,
	// 		},
	// 		{
	// 			path: '/dashboard/my-payment-history',
	// 			element: <Suspense fallback={<Loader></Loader>}><MyPaymentHistory></MyPaymentHistory></Suspense>,
	// 		}
	// 	]
	// }
]);