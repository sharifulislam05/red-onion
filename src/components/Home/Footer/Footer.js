import React from 'react';
import logo from '../../../images/logo2.png';
import './_footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="d-flex container pt-5">
               <div className="mr-auto">
                    <img src={logo} alt="" className="h-25" />
                </div>
                <div className="mr-5">
                    <ul>
                        <li>About online food</li>
                        <li>Read Our blog</li>
                        <li>Sign up to deliver</li>
                        <li>Add your restaurant</li>
                    </ul>
                </div>
                <div >
                    <ul>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all cites</li>
                        <li>Restaurant near me</li>
                    </ul>
                </div>
            </div>
            <div className="d-flex container mt-5">
                <p className="mr-auto text-muted">copyright &copy;2021 red onion food</p>
                <p className="mr-5">Privacy policy</p>
                <p className="mr-5">Terms of use</p>
                <p className="mr-5">Pricing</p>
            </div>
        </footer>
    );
};

export default Footer;