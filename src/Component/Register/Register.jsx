import React, { use } from 'react'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';


const Register = () => {

  // create user
  const {createUser} = use(AuthContext);
  const navigate=useNavigate();


const handleRegister = e =>{
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  console.log(name,email,password)

  // create user

  createUser (email,password)
  .then(result =>{
    console.log(result);
    navigate('/login');
  })
  .catch(error => {
    console.log(error);
  })
}

    return (
        <div className="mx-auto mt-8 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl bg-green-500">
        <div className="card-body">
        <h1 className="text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" name='name' placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" className="input" name='email' placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" name='password' placeholder="Password" />
            
            <button className="btn btn-neutral mt-4">Sign Up</button>
          </form>
          <p>Already have an account? Please <Link to ='/login' className='text-white underline'>Login</Link></p>
        </div>
       </div>
    );
};

export default Register;