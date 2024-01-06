import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top topnav">
    <div className="container-fluid text-center">
      <h1 className="navbar-brand text-white font-weight-bold text-uppercase fs-2 fw-bold">E-Commerce Website</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse toptext" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to="/home" className="nav-link text-white text-end text-uppercase fw-bolder"><i class="fa fa-home"></i> Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link text-white text-end text-uppercase fw-bolder"><i className="bi bi-cart"></i> Cart</Link>
          </li>
          <li className="nav-item">
          <Link to="/contactus" className="nav-link text-white text-end text-uppercase fw-bolder"><i class="fa fa-phone"></i> Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;

