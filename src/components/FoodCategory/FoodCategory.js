import React, { useEffect, useState } from 'react';
import { useHistory,  } from 'react-router-dom';
import foods from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import FoodCard from './FoodCard';

const FoodCategory = () => {
    const [currentFood, setCurrentFood] = useState([]);
    const [category, setCategory] = useState('lunch');
    let history = useHistory();

    const cartFoods = getDatabaseCart() //quantity from localStorage enable process order button
    const foodsQuantity = Object.keys(cartFoods)

    const handleCategory = (e, name) => {
        setCategory(name);
        e.preventDefault();
    }
    useEffect(() => {
        const dinnerItems = foods.filter(fd => fd.category === category)
        setCurrentFood(dinnerItems);
    }, [category])
    const proceedOrder = () => {
        history.push('/order')
    }
    
    return (
        <main>
           <nav className="my-5">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <button  className={`${category === 'breakfast' ? 'active' : ""} mr-5`}  onClick={(e) => handleCategory(e,'breakfast')}>Breakfast</button>
                    </li>
                    <li className="nav-item">
                        <button  className={`${category === 'lunch' ? 'active' : ""} mr-5`} onClick={(e) => handleCategory(e,'lunch')} >Lunch</button>
                    </li>
                    <li className="nav-item">
                        <button  className={`${category === 'dinner' ? 'active' : ""}`} onClick={(e) => handleCategory(e,'dinner')}>Dinner</button>
                    </li> 
                </ul>
           </nav>
            <div className="container row m-auto text-center">
                {
                    currentFood.map(fd => 
                        <div className="col-md-4 mb-5" key={fd.id}>
                            <FoodCard food={fd} />
                        </div>)   
                } 
                <button className="btn btn-danger m-auto w-50" disabled={foodsQuantity.length ? false : true}  onClick={proceedOrder}>
                Procced Checkout</button>
            </div>
        </main>
    );
};

export default FoodCategory;