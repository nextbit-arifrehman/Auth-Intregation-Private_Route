import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {

const { loginUser } = use(AuthContext);




const handleLogin = e => {
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;
    console.log(email,password);
    

    // login user
    loginUser(email,password)
    .then(result => {
      console.log(result);
    })
    .catch (error => {
      console.log(error);
    })
}



    return (
    
          <div className="mx-auto mt-8 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl bg-green-500">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p>New to this site? Please <Link to ='/register' className='text-white underline'>Register</Link></p>
            </div>
           </div>
    );
};

export default Login;