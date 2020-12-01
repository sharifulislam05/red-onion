import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../PlaceOrder/_placeOrder.scss'

const QuantityCard = ({ food }) => {
    const { title, picture, price, quantity } = food;

    return (
        <div className="row my-4">
            <div className="col-md-6 d-flex pl-0 ">
                <img src={picture} alt="" className="img img-fluid w-50 " />
                <div className="ml-5">
                    <p className="mt-2">{title}</p>
                    <h5 className="text-danger">${price}</h5>
                </div>
            </div>
            <div className="col-md-6">
                <div className=" d-flex cart mt-3 text-muted menu__cart border-0" >
                    <button type="button" className="h-50">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input type="text" className="form-control input--quantity  text-center h-50 w-50" value={quantity} readOnly />
                    <button type="button" className="h-50" >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuantityCard;