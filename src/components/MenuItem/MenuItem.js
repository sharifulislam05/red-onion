import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import foods from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../Shared/NavBar/NavBar';
import './_menuItem.scss';

const MenuItem = () => {
    const {foodId} = useParams();
    const [food, setFood] = useState({});
    const [foodQuantity, setFoodQuantity] = useState(1);
    let history = useHistory();

    useEffect(() => {
        const foodItems = foods.find(fd => fd.id === foodId);
        setFood(foodItems)
    }, [foodId])

    const handleQuantity = (isIncrement) => {
       const inputFood =  parseInt(document.querySelector(".input--quantity").value)
       let quantity;
       if( isIncrement ) {
            quantity = inputFood + 1;
       }
       if( !isIncrement ) {
            quantity = inputFood - 1;
       }
       if( quantity < 0 ) {
           return alert("quantity can not be negative")
       }
        setFoodQuantity(quantity);
    }
    const handleAddItems = () => {
        addToDatabaseCart(foodId, foodQuantity)
        history.push('/home')
    }
    
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <div className="mb-5">
                            <h1>{food.title}</h1>
                            <p className="text-muted">{food.details}</p>
                        </div>
                        <div className="d-flex">
                            <h1 className="mr-5">${food.price}</h1>
                            <div className=" d-flex menu__cart">
                                <button type="button" onClick={() => handleQuantity(false)} >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input type="text" className="form-control input--quantity" value={foodQuantity} readOnly />
                                <button type="button" onClick={() => handleQuantity(true)} >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        <button className="menu__btn--add mt-5" onClick={handleAddItems}>
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                            Add</button>
                    </div>
                    <div className="col-md-6">
                        <img src={food.picture} alt={''} className="img-fluid w-75 ml-5" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuItem;