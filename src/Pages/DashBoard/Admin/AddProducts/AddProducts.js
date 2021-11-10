import React from 'react';
import { useForm } from 'react-hook-form';
const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://arcane-hamlet-67437.herokuapp.com/cycle',{
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
                alert('Product Added Successfully')
                reset()
            }
        })
    }
    return (
        <div>
            <div className="order">
            <h2 className="text-center text-primary mb-4">Add A Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")}placeholder="Product name" />
      <input type="number" {...register("price")}placeholder="price" />
      <textarea type="text" {...register("description")}placeholder="Description" />
      <input type="text" {...register("img")}placeholder="Img Url" />
      <input className="btn btn-primary" type="submit" value="Submit" />
    </form>
        </div>
        </div>
    );
};

export default AddProducts;