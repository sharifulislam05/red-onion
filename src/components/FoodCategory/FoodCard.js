import React from 'react';
import { Link } from 'react-router-dom';
import './_foodCategory.scss';


const FoodCard = ({food}) => {
    const {title, picture, shortDecription, price, catagorey, id} = food;

    return (
        <div>
            <Link to={`/food/${id}`} style={{textDecoration: "none", color:"black"}}>
            <div className="card category-card p-3" >
                <img src={picture} className="card-img-top img-fluid w-50 m-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-muted">{shortDecription}</p>
                    <h5>${price}</h5>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default FoodCard;