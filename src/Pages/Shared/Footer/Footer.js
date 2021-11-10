import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
    
               <div className="bg-dark my-5 text-white"id="contact">
        <Container>
<Row md={4} xs={12}>
<Col className="ms-5 my-5">
   <h3>Super Bike</h3>
   <h5 className="my-3">Our Contacts</h5>
   <h6><i class="fas fa-map-marker-alt"></i> 350, Chhagalnaiya, Feni</h6>
   <h6><i class="far fa-envelope"></i> superbike@gmail.com</h6>
   <h6><i class="fas fa-phone"></i> +008150640540</h6>
   </Col>
<Col className="ms-5 my-5" xs={3}>
   <h3>Quick Links</h3>
   <Stack direction="vertical" gap={2}>
 <NavLink className="navlink"
to="/home"
activeStyle={activeStyle}>
Home
</NavLink>
 <NavLink className="navlink"
to="/cycles"
activeStyle={activeStyle}>
Cycles
</NavLink>
 <NavLink className="navlink"
to="/reviews"
activeStyle={activeStyle}>
Reviews
</NavLink>
 <NavLink className="navlink"
to="/news"
activeStyle={activeStyle}>
News
</NavLink>
 <NavLink className="navlink"
to="/about"
activeStyle={activeStyle}>
About
</NavLink>
 <NavLink className="navlink"
to="/contact"
activeStyle={activeStyle}>
Contact
</NavLink>

</Stack>
   </Col>
<Col xs={3} className="my-5">
 
   <img className="ms-3" src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png"></img>
   </Col>
</Row>
<footer className="text-center mb-5">Copyright © 2021 superbike.com</footer>
</Container>
   </div>
    );
};

export default Footer;