import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/shared/Loader/Loader';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

	const { user, loading } = useAuth();

	const location = useLocation();
	// console.log('user in private route', user);

	if (loading) {
		return <Loader></Loader>
	}

	if (user) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;