import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Home from '../../../Home/Home/Home';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const Signup = () => {
    const{signInWithGoogle,user,handleEmail,handlePassword,handleSignUp,error,handleName}= useAuth()
    return (
        <div>
        {!user.email?  <div>
          <Navigation/>
          <br />
          <br />
           <h1 className="text-center text-white mt-5">Please Sign up!</h1>
          <div className="d-flex justify-content-center align-items-center">
            
          <form onSubmit={handleSignUp} action="">
              
              <input onChange={handleName} className="my-2 p-1" placeholder="Name" type="text" name="email" id="" />
              <br />
              <input onChange={handleEmail} className="my-2 p-1" placeholder="Email" type="email" name="email" id="" required/>
              <br />
              <input onChange={handlePassword} className="my-2 p-1" placeholder="Password" type="password" name="password" id="" required />
              <br />
              <input className="btn btn-primary" type="submit" value="Sign up" />
          </form>
          </div>
          <p className="text-danger text-center fw-bold">{error}</p>
          <div className=" text-center mt-3">
          <img onClick={signInWithGoogle} src="https://img.icons8.com/color/48/000000/google-logo.png"/>
          <img src="https://img.icons8.com/fluency/50/000000/facebook-new.png"/>
          <img src="https://img.icons8.com/fluency/48/000000/github.png"/>
          </div>
          <p className="text-white text-center mt-3">Already have an account? <Link to="/login">Please log in</Link></p>
        
          <Footer></Footer>
          </div>
          :
          <Home></Home>
        }
      </div>
    );
};

export default Signup;