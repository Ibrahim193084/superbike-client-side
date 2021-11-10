import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from '../../../../../node_modules/react-hook-form/dist/index.cjs';
import useAuth from '../../../../hooks/useAuth';
import './AddReview.css'

const AddReview = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = data => {
        console.log(data)
        fetch('https://arcane-hamlet-67437.herokuapp.com/review',{
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
                alert('Review added Successfully')
                reset()
            }
        })
    }

    return (
        <div>
            <h3 className="text-center text-primary mt-5">Add Review</h3>
            <div className="order">
            <form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
  <input type="email" {...register("email")} placeholder="Email" defaultValue={user.email} />
  <input type="number" {...register("rating")} placeholder="Give us a rating between 1 to 5" required/>
  <textarea type="text" {...register("review")}placeholder="write something about our cycles" required/>
 
  <input className="btn btn-primary p-2" type="submit" value="Submit" />
</form>
            </div>
        </div>
    );
};

export default AddReview;