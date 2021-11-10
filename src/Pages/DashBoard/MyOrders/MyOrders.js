import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState()
    const {user} = useAuth()
    useEffect(()=>{
        fetch('https://arcane-hamlet-67437.herokuapp.com/order')
        .then(res => res.json())
        .then(data => data.filter(orders =>{
            return orders.email==user.email;
        }))
        .then((matched) =>setOrders(matched))
       
    },[user])
    

     //delete my orders
     const handleDelete = id =>{
        const proceed = window.confirm ('Are you sure, you want to delete?');
if(proceed){
    const url = `https://arcane-hamlet-67437.herokuapp.com/order/${id}`
fetch(url,{
    method: 'DELETE'
})
.then(res=> res.json())
.then(data =>{
    if(data.deletedCount>0){
        alert('deleted successfully');
        const remainingOrders = orders.filter(order => order._id !== id)
        setOrders(remainingOrders)
    }
})
}
    }
    return (
        <div>
            <h3 className="mt-2 text-center text-primary">My orders</h3>
            <div>
               
                         <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Cycle Name</th>
      <th>Size</th>
      <th>Date</th>
      <th>Cost</th>
      <th>Status</th>
      <th>Delete</th>

    </tr>
  </thead>
  <tbody>
  {
          orders?.map(order =><tr key={order._id}>
              <td>
                  {order.name}
              </td>
              <td>
                  {order.email}
              </td>
              <td>
                  {order.address}
              </td>
              <td>
                  {order.phone}
              </td>
              <td>
                  {order.cycleName}
              </td>
              <td>
                  {order.size}
              </td>
              <td>
                  {order.date}
              </td>
              <td>
                  {order.price}
              </td>
              <td className="text-danger">
              {order.status}
              </td>
              <td>
              <i onClick={()=>handleDelete(order._id)} className="fas fa-trash text-danger fs-5"></i>
              </td>
          </tr>)
      }
  </tbody>
</Table>

                   
            </div>

        </div>
    );
};

export default MyOrders;