import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/shared/Loader/Loader';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

	const { user, loading, userRole, loadingRole } = useAuth();

	const location = useLocation();
	// console.log('user in private route', user);

	if (loading || loadingRole) {
		return <Loader></Loader>
	}

	if (user && userRole === "admin") {
		return children;
	}

	return <Navigate state={{ from: location }} to="/" replace></Navigate>;
};

export default PrivateRoute;