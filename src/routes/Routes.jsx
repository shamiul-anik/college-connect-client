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
const Admission = lazy(() => import("../pages/Admission/Admission"));
const AdmitToCollege = lazy(() => import("../pages/Admission/AdmitToCollege"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
// const About = lazy(() => import("../pages/About/About"));

const Login = lazy(() => import("../pages/Authentication/Login/Login"));
const Registration = lazy(() => import("../pages/Authentication/Registration/Registration"));
const PasswordReset = lazy(() => import("../pages/Authentication/PasswordReset/PasswordReset"));
const Profile = lazy(() => import("../pages/Authentication/Profile/Profile"));

const PrivateRoute = lazy(() => import("./PrivateRoute"));
// const AdminRoute = lazy(() => import("./AdminRoute"));

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));


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
			{
				path: '/admission',
				element: <Suspense fallback={<Loader></Loader>}><Admission></Admission></Suspense>,
			},
			{
				path: "/admit/:id",
				element: <Suspense fallback={<Loader></Loader>}><PrivateRoute><AdmitToCollege></AdmitToCollege></PrivateRoute></Suspense>,
				loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/college/${params.id}`)
			},
			{
				path: 'login',
				element: <Suspense fallback={<Loader></Loader>}><Login></Login></Suspense>
			},
			{
				path: 'registration',
				element: <Suspense fallback={<Loader></Loader>}><Registration></Registration></Suspense>
			},
			{
				path: 'password-reset',
				element: <Suspense fallback={<Loader></Loader>}><PasswordReset></PasswordReset></Suspense>
			},
			{
				path: 'profile',
				element: <Suspense fallback={<Loader></Loader>}><Profile></Profile></Suspense>
			},
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
	{
		path: '/dashboard',
		element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/dashboard',
				element: <Suspense fallback={<Loader></Loader>}><Dashboard></Dashboard></Suspense>,
			},
			// {
			// 	path: '/dashboard/manage-users',
			// 	element: <Suspense fallback={<Loader></Loader>}><AdminRoute><ManageUsers></ManageUsers></AdminRoute></Suspense>,
			// },
			// {
			// 	path: '/dashboard/manage-colleges',
			// 	element: <Suspense fallback={<Loader></Loader>}><AdminRoute><ManageClasses></ManageClasses></AdminRoute></Suspense>,
			// },
			// {
			// 	path: '/dashboard/add-a-college',
			// 	element: <Suspense fallback={<Loader></Loader>}><InstructorRoute><AddClass></AddClass></InstructorRoute></Suspense>,
			// },
			// {
			// 	path: '/dashboard/all-classes',
			// 	element: <Suspense fallback={<Loader></Loader>}><InstructorRoute><MyClasses></MyClasses></InstructorRoute></Suspense>,
			// },
		]
	}
]);