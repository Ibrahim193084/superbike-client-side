import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user, logOut} = useAuth()
    return (
        <div>
               <Navbar className="fw-bold p-3" fixed="top"  bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand><img className='me-2' style={{height:'40px', width:'40px', borderRadius:'360px'}} src="https://images-eu.ssl-images-amazon.com/images/I/81wGn2TQJeL._AC._SR360,460.jpg"></img>
      Super Bike</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={HashLink} className="" to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} className="ms-2" to="/home#cycles">Cycles</Nav.Link>
        <Nav.Link as={Link} className="ms-2" to="/morecycles">More Cycles</Nav.Link>
        <Nav.Link as={HashLink} className="ms-2" to="/home#reviews">Reviews</Nav.Link>
        <Nav.Link as={HashLink} className="ms-2" to="/home#news">News</Nav.Link>
        <Nav.Link as={HashLink} className="ms-2" to="/home#about">About</Nav.Link>
        <Nav.Link as={HashLink} className="ms-2" to="/home#contact">Contact</Nav.Link>
      </Nav>
      <Navbar.Text>
        {
          user.email&& <span className="me-2"><Link style={{textDecoration:'none', color: 'lightgray'}} to="/dashboard">Dashboard</Link></span>
        }
        
     {
       user?.email&& <span><img style={{height:'40px', width:'40px', borderRadius:'360px'}} src={user?.photoURL}></img></span>

     }
      {
        user.email && <span className="ms-2">{user?.displayName}</span>
      }
        
       {!user?.email?
          <Link to="/login" style={{textDecoration: 'none'}}>Log in</Link>
          :  <Link to="/login"><button onClick={logOut} className="btn btn-primary ms-4">Log out</button></Link>
       }
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;