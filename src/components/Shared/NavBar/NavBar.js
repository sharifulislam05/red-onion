import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './_navBar.scss';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getDatabaseCart, processOrder } from '../../../utilities/databaseManager';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const cartFoods = getDatabaseCart();
    const cartQuantity = Object.keys(cartFoods).length;

    const handleSignOut = () => {
        setLoggedInUser({});
        processOrder()
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
            <Link to={'/'} className="navbar-brand ml-5">
                <img src={logo} alt="" className="w-25 img img-fluid"/>
            </Link>
            <div className="collapse navbar-collapse ">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-5 mt-2">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className='badge badge-warning' id='cartCount'> {cartQuantity} </span>
                    </li>
                    <li className="nav-item mr-3">
                            <Link to="/login"><button className="btn--login">
                                {loggedInUser.email ? loggedInUser.name : 'Login'}
                                </button></Link>
                    </li>
                    <li className="nav-item">
                        {
                            loggedInUser.email ? <button className="btn--signUp mr-5" onClick={handleSignOut}> Sign out</button>
                            : <Link to="/login"><button className="btn--signUp mr-5"> Sign up</button></Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;