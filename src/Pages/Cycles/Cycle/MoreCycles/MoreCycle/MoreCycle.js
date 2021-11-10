import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MoreCycle = (props) => {
    const{name, price, description, img, _id} = props.cycle
    return (
        <div>
        <Col>
<Card className="rounded-5 mx-2 mb-3">
  <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    ${price}
    </Card.Text>
    <Card.Text>
    {description.slice(0, 70)}
    </Card.Text>
    <Link to={`/cycles/${_id}`}> <button className="btn btn-primary"><i class="fas fa-shopping-cart"></i> Buy now</button></Link>
  </Card.Body>
</Card>
</Col>
  </div>
    );
};

export default MoreCycle;