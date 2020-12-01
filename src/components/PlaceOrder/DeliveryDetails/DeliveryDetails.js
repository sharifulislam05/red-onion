import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import './_deliveryDetails.scss';

const DeliveryDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        alert("your information are saved successfully")
    }

    return (
        <>
            <h5 className="ml-5">Edit Delivery Details</h5>
            <hr className="w-75 ml-5"/> 
            <p className="ml-5">Delivery to door</p>
            <form onSubmit={handleSubmit(onSubmit)} className="shipment__form ml-5 w-75">
                <input name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} className="shipment__input" placeholder="Name" />
                {errors.email && <span className="text-danger">Name is required</span>}
                
                <input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} className="shipment__input" placeholder="Email" />
                {errors.email && <span className="text-danger">Emails is required</span>}

                <input name="phone" type="number" ref={register({ required: true })} className="shipment__input" placeholder="Phone" />
                {errors.phone && <span className="text-danger">Phone is required</span>}

                <input name="address" ref={register({ required: true })} className="shipment__input" placeholder="Address" />
                {errors.address && <span className="text-danger">Address is required</span>}
                
                <input name="instruction" ref={register({ required: true })} className="shipment__input" placeholder="Add Delivery Instruction" />
                {errors.instruction && <span className="text-danger">Address is required</span>}
                
                <input type="submit" className="btn-delivery-form" value="Save & CheckOut"/>
            </form>
    </>
    );
};

export default DeliveryDetails;