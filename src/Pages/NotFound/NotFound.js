import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
        <div className="bg-dark">
        <Navigation/>
        <img style={{height: '600px', width: '1300px'}} className="notfound" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirwMo_RBSjS96pBQfEbpKLygfQWkWyfPLOpYpXT1m68SB2VhZ50b4i1QnahAQ5IDzdwM&usqp=CAU" alt="" />
        <Footer></Footer>
    </div>
    );
};

export default NotFound;