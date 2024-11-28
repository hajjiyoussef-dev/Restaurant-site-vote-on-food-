import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


// chef login and password is : e 1337Food@gmail.com ps 1337food

function Cheflogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
   
  const handleSubmit = async (e) => { 
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      return;
    }
    try {
      const formData = { email, password };
      const response = await axios.post('http://127.0.0.1:8000/api/chef/login', formData); // Update URL with your endpoint
      setSuccessMessage("Login successful");
      setEmail('');
      setPassword('')
      setErrorMessage('');
      navigate('/chefmeals')
      console.log(response.data.message);
    } catch (error) {
      console.log(error)
      setErrorMessage('error login')
    }
  };
 // const isFormValid = email && password && confirmPassword;
  return (
    <div className="container mt-5"  style={{width : '80vh'}}>
    <form onSubmit={handleSubmit} className='form-group border p-4 mb-5 shadow-lg bg-white rounded' 
      style={{backgroundColor: 'rgb(230, 227, 227)'}}>
      <h1 className="mb-4" style={{textAlign:'center'}}><em><b>Chef login</b></em></h1>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label"><em><b>login</b></em></label>
        <input
          type="email"
          className="form-control p-2 mb-2 bg-light  border "
          id="emailInput"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label"><em><b>Password</b></em></label>
        <input
          type="password"
          className="form-control p-2 mb-2 bg-light  border "
          id="passwordInput"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPasswordInput" className="form-label"><em><b>Confirm Password</b></em></label>
        <input
          type="password"
          className="form-control p-2 mb-2 bg-light  border "
          id="confirmPasswordInput"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      
        <button className="btn btn-primary w-100" 
                
               
                >
                  <em>Login</em>
        </button>
      
      {errorMessage && <div className="text-danger mt-4 text-center"><em><b>{errorMessage}</b></em></div>}
      {successMessage && <div className="text-success mt-4 text-center"><em><b>{successMessage}</b></em></div>}
    </form>
    </div>
  );
}

export default Cheflogin;
