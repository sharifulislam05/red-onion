import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import FoodCategory from '../../FoodCategory/FoodCategory';
import Footer from '../Footer/Footer';

import Header from '../Header/Header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <FoodCategory />
            <ChooseUs />
            <Footer />
        </>
    );
};

export default Home;