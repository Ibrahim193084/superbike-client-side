import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews]= useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://arcane-hamlet-67437.herokuapp.com/review')
        .then(res => res.json())
        .then(data=>setReviews(data))
        .finally(()=>setIsLoading(false))
    },[])
    return (
        <div id="reviews">
              <h1 className="text-center text-danger my-5">Reviews</h1>
              <div>
                  {
                isLoading ?<Spinner style={{marginLeft: '700px'}} className="text-center" animation="border" variant="danger"></Spinner>
                :
                <Row xs={1} md={4} className="g-2">
                {reviews?.map(review => <Review review={review} key = {review._id}></Review>)}
            </Row>
            }

              </div>
        </div>
    );
};

export default Reviews;