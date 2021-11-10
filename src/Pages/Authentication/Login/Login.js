import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from './../../../hooks/useAuth';


const Login = () => {

    const {signInWithGoogle,user,error,handleLogIn,handleEmail,handlePassword,sendVerification,setError,setUser,setIsLoading,saveUser} =  useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from ||'/home';
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
    const user = result.user;
    setUser(user)
    saveUser(user.email, user.displayName, 'PUT')
    sendVerification()
    history.push(redirect_uri);
  })
  .finally(()=>setIsLoading(false))
//   .catch((error) => {
//     const errorMessage = error.message;
//     setError(errorMessage)
//   });
    }
    
    return (
        <div> 
        {!user.email? <div>
          <Navigation/>
           <br />
           <br />
           <h1 className="text-center text-white mt-5">Please Log in!</h1>
           <div className="d-flex justify-content-center align-items-center">
           <form onSubmit={handleLogIn} action="">
               <input onChange={handleEmail} className="my-2 p-1" placeholder="Email" type="email" name="email" id="" required />
               <br />
               <input onChange={handlePassword} className="my-2 p-1" placeholder="Password" type="password" name="password" id="" required />
               <br />
               <input className="btn btn-primary" type="submit" value="Log in" />
           </form>
           </div>
           <p className="text-danger text-center fw-bold">{error}</p>
           <div className=" text-center mt-3">
           <img onClick={handleGoogleLogin} src="https://img.icons8.com/color/48/000000/google-logo.png"/>
           <img src="https://img.icons8.com/fluency/50/000000/facebook-new.png"/>
           <img src="https://img.icons8.com/fluency/48/000000/github.png"/>
           </div>
           <p className="text-white text-center mt-3">Are you new in Super Bike? <Link to="/signup">Please sign up</Link></p>
         
           <Footer></Footer>
          </div>
          : <Home></Home>}
       </div>
    );
};

export default Login;