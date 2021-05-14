import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AdminGuardedRoute = ({ component: Component, ...rest }) => {
    const auth = localStorage.getItem('token')? true : false;
    const role = localStorage.getItem('role');
    return (
        <Route {...rest} render={(props) => (
            auth === true && role === 'admin'
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default AdminGuardedRoute;