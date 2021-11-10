import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Cycle from './Cycle/Cycle';

const Cycles = () => {
    const [cycles, setCycles]= useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://arcane-hamlet-67437.herokuapp.com/cycles')
        .then(res => res.json())
        .then(data=>setCycles(data))
        .finally(()=>setIsLoading(false))
    },[])
    return (
        <div id="cycles">
            <h1 className="text-center text-danger my-5">Cycles</h1>
            {
                isLoading ?<Spinner style={{marginLeft: '700px'}} className="text-center" animation="border" variant="danger"></Spinner>
                :
                <Row xs={1} md={3} className="g-2">
                {cycles?.slice(0, 6).map(cycle => <Cycle key={cycle._id}cycle={cycle}></Cycle>)}
            </Row>
            }
            
        </div>
    );
};

export default Cycles;