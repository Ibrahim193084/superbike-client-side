import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
   
    useEffect(()=>{
        fetch('https://arcane-hamlet-67437.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[orders])
    // console.log(orders)

       //delete all users orders
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

    //update status
  
    const handleUpdate = id =>{
        const url = `https://arcane-hamlet-67437.herokuapp.com/order/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data. modifiedCount>0){
                    alert('Status updated successfully')
                }
             
            })
    }

    return (
        <div>
            <h2>Manage all orders</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Tour Place</th>
      <th>Date</th>
      <th>Cost</th>
      <th>Status</th>
      <th>Update Status</th>
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
                  {order.tourplace}
              </td>
              <td>
                  {order.date}
              </td>
              <td>
                  {order.cost}
              </td>
              <td className="text-danger">
                  {order.status}
              </td>
              <td>
              <i onClick={()=>handleUpdate(order._id)} className="fas fa-check-circle text-success fs-5"></i>
              </td>
              <td>
              <i onClick={()=>handleDelete(order._id)} className="fas fa-trash text-danger fs-5"></i>
              </td>
          </tr>)
      }
  </tbody>
</Table>
        </div>
    );
};

export default ManageAllOrders;