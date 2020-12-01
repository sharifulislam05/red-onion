import React from 'react';
import choose1 from '../../../images/Image/choose1.png';
import choose2 from '../../../images/Image/choose2.png';
import choose3 from '../../../images/Image/choose3.png';
import icon2 from '../../../images/ICON/Group 1133.png';
import icon1 from '../../../images/ICON/Group 204.png';
import icon3 from '../../../images/ICON/Group 245.png';

const ChooseUs = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="w-50 mb-5">
                <h3>Why you choose us</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit tempora quae iusto nesciunt est ex ullam cupiditate quas nobis.</p>
            </div>
            <div className="card-deck">
                <div className="card" style={{borderStyle:"none"}}>
                    <img className="card-img-top img img-fluid" src={choose1} alt="Card cap" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="card-img-top img img-fluid p-1" src={icon1} alt="Card cap" />
                            </div>
                            <div className="col-md-9">
                                <h3>Fast Delivery</h3>
                                <p className="text-justify text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dignissimos repudiandae, minus deserunt itaque aut sequi, eius quae odio sed amet quod veritatis excepturi quam pariatur suscipit ab molestias nihil!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={{borderStyle:"none"}}>
                    <img className="card-img-top" src={choose2} alt="Card cap" />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <img className="card-img-top img img-fluid p-1" src={icon2} alt="Card cap" />
                                </div>
                                <div className="col-md-9">
                                    <h3>A Good Auto Responder</h3>
                                    <p className="text-justify text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dignissimos repudiandae, minus deserunt itaque aut sequi, eius quae odio sed amet quod veritatis excepturi quam pariatur suscipit ab molestias nihil!</p>
                                </div>
                            </div> 
                        </div>
                </div>
                <div className="card" style={{borderStyle:"none"}}>
                    <img className="card-img-top" src={choose3} alt="Card cap" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="card-img-top img img-fluid p-1" src={icon3} alt="Card cap" />
                            </div>
                            <div className="col-md-9">
                                <h3>Home Delivery</h3>
                                <p className="text-justify text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dignissimos repudiandae, minus deserunt itaque aut sequi, eius quae odio sed amet quod veritatis excepturi quam pariatur suscipit ab molestias nihil!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;