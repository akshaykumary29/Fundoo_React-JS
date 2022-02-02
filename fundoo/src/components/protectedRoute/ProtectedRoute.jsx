import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute ({ component: Component, ...rest }) {

    const isAuthenticated = localStorage.getItem("token");
    // console.log("this", isAuthenticated);

    return (
        <div>
            <Route
                { ...rest }
                render={( props ) =>
                    isAuthenticated ? <Component { ...props } /> : <Redirect to="/signin" />
                }
            />
        </div>
    );
}

export default ProtectedRoute;