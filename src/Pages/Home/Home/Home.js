import React from 'react';
import About from '../../About/About';
import Cycles from '../../Cycles/Cycles';
import News from '../../News/News';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Banner></Banner>
            <Cycles></Cycles>
            <Reviews></Reviews>
            <News></News>
            <About></About>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;