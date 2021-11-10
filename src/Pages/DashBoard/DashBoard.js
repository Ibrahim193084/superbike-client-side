import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddProducts from './Admin/AddProducts/AddProducts';
import AdminRoute from './Admin/AdminRoute/AdminRoute';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Admin/ManageProducts/ManageProducts';
import AddReview from './MyOrders/AddReview/AddReview';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {logOut, user, admin} = useAuth()
    return (
        <div>
            <div style={{height: "700px"}} className="row">
                <div className="col-md-2 bg-dark">
                    <h3 className='text-white text-center'>DashBoard</h3>
                    <h4 className="text-center"><Link to="/">Home</Link></h4>
              
            <br />
           
               
                {
                    admin?
                    <div className='text-center mt-3'> 
                    <Link to={`${url}/makeadmin`}>Make Admin</Link>
                    <br />
                    <Link to={`${url}/manageallorders`}>Manage All Orders</Link>
                    <br />
                    <Link to={`${url}/addproducts`}>Add Product</Link>
                    <br />
                    <Link to={`${url}/manageproducts`}>Manage Products</Link>
                    <br />
                    <button onClick={logOut} className='btn btn-primary mt-3'>Log out</button>
                    </div>
                    :
                     <div className='text-center mt-3'> 
                     <Link to={`${url}/myorders`}>My orders</Link>
                     <br />
                     <Link to={`${url}/pay`}>Pay</Link>
                     <br />
                     <Link to={`${url}/addreview`}>Add Review</Link>
                     <br />
                     <button onClick={logOut} className='btn btn-primary mt-3'>Log out</button>
                     </div>
                }
           

                </div>
                <div className="col-md-10">
                     <Switch>
                  
                    <PrivateRoute path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Pay></Pay>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                       <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallorders`}>
                      <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproducts`}>
                       <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                       <ManageProducts></ManageProducts>
                    </AdminRoute>
                   
                    
                </Switch>


                </div>
            </div>
        </div>
    );
};

export default DashBoard;