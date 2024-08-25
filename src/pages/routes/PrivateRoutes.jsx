import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/Authproviders";

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="mx-auto dark:text-fuchsia-50 flex justify-center h-screen"><span className="loading w-40  mx-auto  loading-infinity "></span></div>
    }
    if (user) {
        return children;
    }
    return (<Navigate state={location.pathname} to='/login'></Navigate>);
    
};

export default PrivateRoutes;