import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import AddReview from './MyOrders/AddReview/AddReview';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {logOut, user} = useAuth()
    return (
        <div>
            <div style={{height: "700px"}} className="row">
                <div className="col-md-2 bg-dark">
                    <h3 className='text-white text-center'>DashBoard</h3>
                    <h4 className="text-center"><Link to="/">Home</Link></h4>
              
            <br />
            <div className='text-center mt-3'> 
                <Link to={`${url}/myorders`}>My orders</Link>
                <br />
                <Link to={`${url}/pay`}>Pay</Link>
                <br />
                <Link to={`${url}/addreview`}>Add Review</Link>
                <br />
                <Link to={`${url}/makeadmin`}>Make Admin</Link>
                <br />
                <button onClick={logOut} className='btn btn-primary mt-3'>Log out</button>
                </div>

                </div>
                <div className="col-md-10">
                     <Switch>
                  
                    <PrivateRoute path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute exact path={`${path}/`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Pay></Pay>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/makeadmin`}>
                       <MakeAdmin></MakeAdmin>
                    </PrivateRoute>
                </Switch>


                </div>
            </div>
        </div>
    );
};

export default DashBoard;