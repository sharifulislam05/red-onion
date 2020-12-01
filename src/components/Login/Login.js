import React, { useContext, useState } from 'react';
import { handleGoogleSignIn, signInWithEmail, signUpWithEmail } from './LoginManager';
import './_Login.scss';
import {UserContext} from '../../App'
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logo2.png';


const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [inputError, setInputError] = useState(false)
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
    })
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || {from : {pathname: '/'}}
//googleSignIn
const googleSignIn = () => {
    handleGoogleSignIn()
    .then((res) => {
        setLoggedInUser(res)
        history.replace(from)
    })
}
//validation input field
    const handleInputField = (e) => {
        let isValidInputField = true;
        if(e.target.name === 'email') {
            const isValidEmail = /\S+@\S+\.\S+/.test(e.target.value)
            isValidInputField = isValidEmail;
        }
        if(e.target.name === 'password') {
            const isValidPassLength = e.target.value.length > 4
            const hasCheckCharacter = /\d{1}/.test(e.target.value)
            isValidInputField = (isValidPassLength && hasCheckCharacter);
            if(!isValidInputField) {
                setInputError(true)
            }
        }
       if( isValidInputField ) {
           const newUser = {...user}
           newUser[e.target.name] = e.target.value;
           setUser(newUser);
       }
    }
// email signup and signin
    const handleSubmit = (e) => {
        if( newUser && user.email && user.password ) {
           signUpWithEmail(user.name, user.email, user.password)
           .then(res => {
            alert("user created successfully")
            window.location.reload();
           })
        }
        if( !newUser && user.email && user.password ) {
            signInWithEmail(user.email, user.password)
            .then((res) => {
                console.log(res);
                setLoggedInUser(res)
                history.replace(from)
            })
        }
        e.preventDefault();
    }
   
    return (
        <div>
            <div className="text-center my-5">
               <Link to="/home"><img src={logo} alt="" className="img img-fluid" style={{height: '50px'}}/></Link>
            </div>
            <div className=" d-flex justify-content-center mb-3">
            
            <div className="login__form p-5">
                <h1 className="text-center mb-3">Sign In Now</h1>
              <form onSubmit={handleSubmit}>
                 {
                     newUser &&  <div className="form-group">
                     <label htmlFor="name">Name</label>
                     <input type="text" name="name" onBlur={handleInputField} className="form-control" id="name" required />
                     {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                 </div>
                 }
                  <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" name="email" onBlur={handleInputField} className="form-control" id="email" required />
                      
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" onBlur={handleInputField} className="form-control" required />
                      {inputError && <small className="form-text text-danger">password must be one digit</small>}
                  </div>
                  <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" onChange={() => setNewUser(!newUser)}/>
                      <label className="form-check-label" htmlFor="exampleCheck1"><small className="text-warning">Create an account</small></label>
                  </div>
                  <button type="submit" className="btn btn-danger form-control">Sign in</button>
              </form>
              <button className="btn btn-primary form-control mt-3" onClick={googleSignIn}>Google SignIn</button>
              <small className="text-danger text-center">{loggedInUser.error}</small>
            </div>
          </div>
        </div>
    );
};

export default Login;