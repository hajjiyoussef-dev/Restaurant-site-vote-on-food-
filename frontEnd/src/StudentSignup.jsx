import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , useNavigate} from 'react-router-dom';
//import axios from './api/axios';
import axios from "axios";

function StudentSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate() ;


  const handleSignup = async (e) => {
    e.preventDefault();

    
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const formData = { name , email , password };
      const response = await axios.post('http://localhost:8000/api/signup', formData);
     
      setSuccessMessage("Student signup successful");
      setErrorMessage('');
      setEmail('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      navigate('/food'); 

      console.log(response.data);

      
    } catch (error) {
      console.log(error);
      setEmail('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('The email has already been taken or you did not fill all the fields ');
    }
  };

  return (
    <div className="container mt-2" style={{ width: '70vh' }}>
      <form onSubmit={handleSignup} className='form-group border p-4 mb-5 shadow-lg bg-white rounded' 
      style={{backgroundColor: 'rgb(230, 227, 227)'}}>
        <h1 className="mb-4 text-center"><em><b>Students Signup</b></em></h1>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label"><em><b>Name</b></em></label>
          <input
            type="text"
            className="form-control p-2 border rounded"
            id="nameInput"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label"><em><b>Email</b></em></label>
          <input
            type="email"
            className="form-control p-2 border rounded"
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
            className="form-control p-2 border rounded"
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
            className="form-control p-2 border rounded"
            id="confirmPasswordInput"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" onClick={handleSignup}><em>Signup</em></button>
        </div>
        <p class="d-block text-center text-muted mt-2 "><em> Already registered? </em><Link to="/StudantLogin" className='text-decoration-none'>Login here</Link></p>
        {errorMessage && <div className="text-danger text-center mt-2"><em><b>{errorMessage}</b></em></div>}
        {successMessage && <div className="text-success text-center mt-2"><b>{successMessage}</b></div>}
      </form>
    </div>
  );
}

export default StudentSignup;
