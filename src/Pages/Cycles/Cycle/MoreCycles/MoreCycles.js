import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import MoreCycle from './MoreCycle/MoreCycle';

const MoreCycles = () => {
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
        <div>
            <Navigation></Navigation>
            <br/>
            <br/>
            <br/>
            <br/>
           <div>
           {
                isLoading ?<Spinner style={{marginLeft: '700px'}} className="text-center" animation="border" variant="danger"></Spinner>
                :
                <Row xs={1} md={3} className="g-2">
                {cycles?.map(cycle => <MoreCycle key={cycle._id}cycle={cycle}></MoreCycle>)}
            </Row>
            }
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MoreCycles;