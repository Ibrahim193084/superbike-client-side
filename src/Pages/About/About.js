import React from 'react';

const About = () => {
    return (
        <div id="about" className="my-5">
        <h1 className="text-danger text-center my-5">ABOUT US</h1>
        <div className="row ms-5">
            <div className="col-md-6">
                <img className="w-75 h-75" src="https://cdn.shopify.com/s/files/1/0514/3160/4395/files/why-alchemy1_1.jpg?v=1614847413" alt="" />
        
            </div>
            <div className="col-md-4 mt-5">
                <p style={{marginTop:'50px'}}>
                We manufacture bikes for your unique style.  Everything from our welds, to our carbon fiber lay ups, to our patented Sine suspension is designed to give you a better riding bike. Our direct-to-rider model and one-on-one customer relationships guarantees that you will love your ride.
                </p>
            </div>
        </div>
        
        </div>
    );
};

export default About;