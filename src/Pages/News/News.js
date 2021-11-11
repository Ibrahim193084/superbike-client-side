import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const News = () => {
    return (
        <div id="news">
        <h1 className="text-center text-danger my-5">NEWS</h1>
        <Row xs={1} md={4} className="g-2">
        <Col>
 <Card className="rounded-5 mx-2 mb-3">
   <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://blog.mapmyrun.com/wp-content/uploads/2017/10/7-Things-No-One-Tells-You-About-Long-Distance-Cycling.jpg" />
   <Card.Body>
    
     <Card.Text>
         <span className="me-5"><i class="fas fa-user-shield"></i> Admin</span>
         <span className="ms-3"><i class="fas fa-comments"></i> 3comments</span>
   
     </Card.Text>
     <Card.Title>
       Long Distance Cyclist with Bicycle by Ocean Stock
     </Card.Title>
    
      <button className="btn btn-primary">Read more</button>
   </Card.Body>
 </Card>
</Col>
        <Col>
 <Card className="rounded-5 mx-2 mb-3">
   <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Cycling/Tips+for+Century+Ride/carousel.jpg" />
   <Card.Body>
    
     <Card.Text>
         <span className="me-5"><i class="fas fa-user-shield"></i> Admin</span>
         <span className="ms-3"><i class="fas fa-comments"></i> 2comments</span>
   
     </Card.Text>
     <Card.Title>
    Advantages of Bike Riding - roma-n-bike
     </Card.Title>
    
      <button className="btn btn-primary">Read more</button>
   </Card.Body>
 </Card>
</Col>
        <Col>
 <Card className="rounded-5 mx-2 mb-3">
   <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://s14761.pcdn.co/wp-content/uploads/sites/2/2018/03/Highend-E-Mountainbike-Group-Test-Vergleich-CB-web-60-von-124-1140x760.jpg" />
   <Card.Body>
    
     <Card.Text>
         <span className="me-5"><i class="fas fa-user-shield"></i> Admin</span>
         <span className="ms-3"><i class="fas fa-comments"></i> 4comments</span>
   
     </Card.Text>
     <Card.Title>
       Is It Safe to Ride in Groups Again?
     </Card.Title>
    
      <button className="btn btn-primary">Read more</button>
   </Card.Body>
 </Card>
</Col>
        <Col>
 <Card className="rounded-5 mx-2 mb-3">
   <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/newsandevents/news/2019/06/l2l-bike-ride.jpg" />
   <Card.Body>
    
     <Card.Text>
         <span className="me-5"><i class="fas fa-user-shield"></i> Admin</span>
         <span className="ms-3"><i class="fas fa-comments"></i> 3comments</span>
   
     </Card.Text>
     <Card.Title>
         Enjoy & Feel adventure in your life By Cycling
     </Card.Title>
    
      <button className="btn btn-primary">Read more</button>
   </Card.Body>
 </Card>
</Col>
        </Row>
   </div>
    );
};

export default News;