import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    Route,
    Redirect,
    useLocation,
  } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user,admin,isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <Spinner animation="border" variant="danger"></Spinner>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email && admin? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;