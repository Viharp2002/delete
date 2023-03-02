import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">NewsVihar</Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link" to="/">Home</Link >
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" lang="en" to="/">Engish</Link></li>
            <li><Link className="dropdown-item" to="/">French</Link></li>
            <li><Link className="dropdown-item" to="/">German</Link></li>
            <li><Link className="dropdown-item" to="/">French</Link></li>
            <li><Link className="dropdown-item" to="/">Hindi</Link></li>
            <li><Link className="dropdown-item" to="/">Malyalam</Link></li>
            <li><Link className="dropdown-item" to="/">Marathi</Link></li>
            <li><Link className="dropdown-item" to="/">Russian</Link></li>
            <li><Link className="dropdown-item" to="/">Telugu</Link></li>
            <li><Link className="dropdown-item" to="/">Tamil</Link></li>
            <li><Link className="dropdown-item" to="/">Ukrainian</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Topics
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to="">Generals</Link></li>
            <li><Link className="dropdown-item" to="">Crime</Link></li>
            <li><Link className="dropdown-item" to="">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="">Technology</Link></li>
            <li><Link className="dropdown-item" to="">War</Link></li>
            <li><Link className="dropdown-item" to="">Environment</Link></li>
            <li><Link className="dropdown-item" to="">Politics</Link></li>
            <li><Link className="dropdown-item" to="">Sports</Link></li>
            <li><Link className="dropdown-item" to="">Bollywood</Link></li>
            <li><Link className="dropdown-item" to="">Hollywood</Link></li>
            <li><Link className="dropdown-item" to="">Health</Link></li>
            <li><Link className="dropdown-item" to="">Buisness</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="">India</Link></li>
            <li><Link className="dropdown-item" to="">Canada</Link></li>
            <li><Link className="dropdown-item" to="">United States</Link></li>
            <li><Link className="dropdown-item" to="">United Kingdom</Link></li>
            <li><Link className="dropdown-item" to="">Australia</Link></li>
            <li><Link className="dropdown-item" to="">Chin</Link></li>
            <li><Link className="dropdown-item" to="">Ukrain</Link></li>
            <li><Link className="dropdown-item" to="">Russia</Link></li>
            <li><Link className="dropdown-item" to="">Taiwan</Link></li>
            <li><Link className="dropdown-item" to="">Norway</Link></li>
            <li><Link className="dropdown-item" to="">Switzerland</Link></li>
            <li><Link className="dropdown-item" to="">Pakistan</Link></li>
            <li><Link className="dropdown-item" to="">Germeny</Link></li>
            <li><Link className="dropdown-item" to="">France</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
