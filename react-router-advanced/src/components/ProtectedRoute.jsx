import React from "react";
import { Children } from "react";
import { Navigate} from "react-router-dom"
import { useAuth } from './AuthContext'

function ProtectedRoute(Children) {

    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {return <Navigate to="/" />}

    return Children;
}

export default ProtectedRoute;