import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom';
import './Styles.css';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate() ;


 const handleSubmit = async (e) => { 
  
    e.preventDefault();

    
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }



    try {
      const formData = { email, password };
      const response = await axios.post('http://localhost:8000/api/Student/login ', formData); 
      const userId = response.data.userId;
      localStorage.setItem('userId', userId);
      console.log('User logged in successfully and userId stored:', userId);
      setSuccessMessage("Login successful");
      setError('');
      setEmail('');
      setPassword('') ;
      navigate('/food');

      console.log(response.data.message);
    } catch (error) {
     console.log(error);
     setError('Login invalide or password incorrect');
      
    }
  };

  return (
    <div className="container mt-5" style={{ width: '80vh' }}>
    
      <form onSubmit={handleSubmit} className='form-group border p-4 mb-5 shadow-lg bg-white rounded' >
      <h1 className="mb-4" style={{ textAlign: 'center' }}><em><b>Students Login</b></em></h1>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label"><em><b>Email</b></em></label>
          <input
            type="email"
            className="form-control p-2 mb-2  bg-light"
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
            className="form-control p-2 mb-2 bg-light  border"
            id="passwordInput"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="mt-3 mb-3"><Link to="">Forgotten password?</Link></div>
        <div className='text-center '>
           <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}><em>Login</em></button>
           <p class="d-block text-center text-muted mt-2"><em>New customer? </em><Link to="/StudentSignup" className='text-decoration-none'>Sign up</Link></p>
        </div>
       
        {error && <div className="text-danger text-center mt-2"><em><b>{error}</b></em></div>}
        {successMessage && <div className="text-success text-center mt-2"><b>{successMessage}</b></div>}
      </form>
    </div>
  );
}

export default StudentLogin;
