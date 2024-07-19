import React from 'react';
import { Link } from "react-router-dom";

function Menu()
{
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">ABC Automobiles</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vehicle-list">Vehicles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Contact us</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
        </>
    )
}

export default Menu;