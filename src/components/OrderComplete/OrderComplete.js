import React, { useContext } from 'react';
import { UserContext } from '../../App';
import mapImg from '../../images/Image/map.PNG';
import rider from '../../images/Image/riderLogo.png';
import NavBar from '../Shared/NavBar/NavBar';

const OrderComplete = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
       <>
        <NavBar />
         <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={mapImg} alt="" className="img img-fluid"/>
                </div>
                <div className="col-md-4 ml-5 pl-5">
                    <img src={rider} alt="" className="w-50 h-25 mb-3"/>
                    <h5>Your Location</h5>
                    <p className="text-muted">107 Rd No 8</p>
                    <h5>Shop Address</h5>
                    <p className="text-muted">Gulshan Plaza Restaura GPR</p>
                    <h1>9.30pm</h1>
                    <p className="text-muted">Estimated Delivery Time</p>
                    <div className="d-flex">
                        <img src={loggedInUser.photo} alt="" />
                        <div>
                            <h5>{loggedInUser.name}</h5>
                            <p className="text-muted">your rider</p>
                        </div>
                    </div>
                    <button className="btn btn-danger w-100">Contact</button>
                </div>
            </div>
        </div>
       </>
    );
};

export default OrderComplete;