import React from 'react';
import OrderCart from '../OrderCart/OrderCart';
import NavBar from '../../Shared/NavBar/NavBar';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';

const PlaceOrder = () => {
   
    return (
        <>
           <NavBar />
           <div className="container">
                <div className="row mt-5 ">
                    <div className="col-md-6">
                        <DeliveryDetails />
                    </div>
                    <div className="col-md-6">
                        <OrderCart />
                    </div>
                </div>
           </div>
        </>
    );
};

export default PlaceOrder;