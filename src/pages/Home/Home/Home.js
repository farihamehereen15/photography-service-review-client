import React from 'react';
import Banner from '../Banner/Banner';
import Camera from '../Camera/Camera';
import FAQ from '../FAQ/FAQ';
import Homeservice from '../Homeservice/Homeservice';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Homeservice></Homeservice>
            <Camera></Camera>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;