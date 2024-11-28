import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css' ;
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light   rounded container  bg-light  shadow-lg mb-5 mt-2  rounded "
    style={{backgroundColor: 'rgb(230, 227, 227)', }}
    >
      <div className="container">
        <div className="dropdown">
          <button type="button" className="btn btn-outline-info my-2 my-sm-0" id="menu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span  className="navbar-brand"><i className="bi bi-list"></i></span>
          </button>
          <ul className="dropdown-menu   text-white">
              <li> <Link to={'/studentsignup'} className="dropdown-item "> <em><b>Studant Sign up & login</b></em></Link></li> 
                {/* <li><Link to={'/StudantLogin'} className="dropdown-item "> <em><b>Studant Login</b></em></Link></li> */}
               <li> <Link to={'/Cheflogin'} className="dropdown-item "> <em><b>Chef login</b> </em></Link></li>
          </ul>
        </div>
        <Link to={'/'} className="navbar-brand mx-auto  background-text"><em><b className="highlight">1337FOOD</b></em></Link>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="button" >
          <Link to={'/StudentSignup'} className="navbar-brand mx-auto">
            <em><b>Vote</b></em>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
