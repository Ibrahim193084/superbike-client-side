import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const {review, rating, name, email} = props.review
    return (
        <div>
             <Col>
             <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
    <Card.Text>
      {review}
    </Card.Text>
    <Card.Text>
    <i style={{color:'gold'}} class="fas fa-star"></i> 
    {rating}
    </Card.Text>
  </Card.Body>
</Card>

             </Col>
        </div>
    );
};

export default Review;