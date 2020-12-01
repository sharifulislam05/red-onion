import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import foods from '../../../fakeData';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import QuantityCard from './QuantityCard';

const OrderCart = () => {
    const[currentFood, setCurrentFood] = useState([])
    useEffect(() => {
        const foodKey = getDatabaseCart()
        const key = Object.keys(foodKey)
        const orderFood = key.map(key => {
        const food = foods.find(fd => fd.id === key)
        food.quantity = foodKey[key]
        return food
    })
        setCurrentFood(orderFood)
    },[])

const subTotal = currentFood.reduce((acc,food) => acc + (food.quantity) * food.price, 0)
const tax = (subTotal * 0.1).toFixed(2);
const delivery = 3;
const total =  parseInt(tax) + subTotal + delivery;
    return (
        <div className="">
            <p>From <strong>Gulshan plaza Restaura GPR</strong></p>
            <p>Arriving in 20-30 min</p>
            <p>107 Rd No 8</p>
            {
                currentFood.map(fd => <QuantityCard food={fd} key={fd.id} />)
            }
            <div className="row ">
                <div className="col-md-6">
                    <p>Subtotal</p>
                    <p>Tax</p>
                    <p>Delivery Fee</p>
                    <h5>Total</h5>
                </div>
                <div className="col-md-6">
                    <p>${subTotal}</p>
                    <p>${tax}</p>
                    <p>${delivery}</p>
                    <p>${total}</p>
                </div>
            </div>
            <Link to='/orderConfirm'> <button className="btn btn-danger form-control w-50 mt-3" >Place Order</button></Link>
        </div>
    );
};

export default OrderCart;