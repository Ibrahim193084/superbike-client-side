import React, { useEffect, useState } from 'react';
import './BuyNow.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const BuyNow = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [cycle, setCycle] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const url = `https://arcane-hamlet-67437.herokuapp.com/cycles/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setCycle(data))
    },[])
    


    const onSubmit = data => {
        console.log(data)
        data.status="Pending"
        fetch('https://arcane-hamlet-67437.herokuapp.com/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('order place Successfully')
                reset()
            }
        })
    }

    return (
        <div>
        <Navigation/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="row mt-5 ms-5">
            <div className="col-md-6">
                <div>
                    <img className="image"  src={cycle.img} alt="" />
                    <h3>{cycle.name}</h3>
                    <h3>${cycle.price}</h3>
                    <p>{cycle.description}</p>

                </div>
            </div>
            <div className="col-md-6">
            <div className="order">
        <h2 className="text-center text-primary mb-4">Place Order</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
  <input type="email" {...register("email")} placeholder="Email" defaultValue={user.email} />
  <input type="text" {...register("cycleName")} placeholder="Cycle Name" defaultValue={cycle.name} />
  <input type="number" {...register("price")} defaultValue={cycle.price} />
  <input type="number" {...register("size")} placeholder="Give any one size 20, 21, 22, 24, 26, 29" required />
  <input type="text" {...register("address")} placeholder="Address" required />
  <input type="number" {...register("phone")} placeholder="Phone number" required />
  <input type="date" {...register("date")} placeholder="date" required />
  <input className="btn btn-primary p-2" type="submit" value="Purchase" />

</form>
    </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default BuyNow;