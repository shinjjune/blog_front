import React from 'react';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          불로그 시작인디...
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
