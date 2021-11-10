import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';

const ManageProducts = () => {
    const [cycles, setCycles]= useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://arcane-hamlet-67437.herokuapp.com/cycles')
        .then(res => res.json())
        .then(data=>setCycles(data))
        .finally(()=>setIsLoading(false))
    },[])
     //delete products
    const handleDelete = id =>{
        const proceed = window.confirm ('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://arcane-hamlet-67437.herokuapp.com/cycle/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remainingCycles = cycles.filter(cycle => cycle._id !== id)
                setCycles(remainingCycles)
            }
        })
        }

    }
    return (
        <div>
            <h2 className="text-primary text-center my-3">Manage Products</h2>
            <div>
            {
                isLoading ?<Spinner style={{marginLeft: '700px'}} className="text-center" animation="border" variant="danger"></Spinner>
                :
                <Row xs={1} md={3} className="g-2">
                {cycles?.map(cycle =>
                     <Col key={cycle._id}>
                     <Card className="rounded-5 mx-2 mb-3">
                       <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src={cycle.img} />
                       <Card.Body>
                         <Card.Title>{cycle.name}</Card.Title>
                         <Card.Text>
                         ${cycle.price}
                         </Card.Text>
                         <Card.Text>
                         {cycle.description}
                         </Card.Text>
                         <button onClick={()=>handleDelete(cycle._id)} className="btn btn-primary"> <i className="fas fa-trash text-danger fs-5"></i> Delete</button>
                       </Card.Body>
                     </Card>
                     </Col>
                    )}
            </Row>
            }
            
        </div>
        </div>
    );
};

export default ManageProducts;