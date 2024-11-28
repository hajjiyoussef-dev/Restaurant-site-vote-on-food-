import React from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';
const Body = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-3 mb-4"><em>Discover 1337FOOD</em></h1>
        <p className="lead ">
         <em> <b>Indulge in a culinary journey at the School 1337 restaurant. Explore a world of flavors and cast your VOTE for the most mouthwatering dishes! </b></em>
        </p>
        <button  className="btn btn-primary btn-lg mt-4 animate__animated animate__fadeInUp animate__delay-1s button-Border">
         <Link to={'/StudentSignup'} className='text-white text-decoration-none'><em>VOTE NOW</em></Link>
        </button>
      </div>
    </div>
  );
};

export default Body;
