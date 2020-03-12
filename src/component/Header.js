// Header.js
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (            
			  <header class="header">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <div class="logo"><a href="#!"><img src="images/logo.png" alt="logo" /></a></div>
      <div class="right-header">
        <div class="top-btns text-right d-flex justify-content-end align-items-center"><div class="dropdown dropdown-btn">
          <a href="#!" class="orange-btn dropdown-toggle" data-toggle="dropdown">login/signup</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#!">Your Dropdown SJ</a>
          <a class="dropdown-item" href="#!">Your Dropdown SJ</a>
          <a class="dropdown-item" href="#!">Your Dropdown SJ</a>
        </div>
      </div> <a href="#!" class="orange-btn red-btn">Order now</a></div>
        <nav class="top-nav navbar navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="toggle-title">Menu</span> <i class="fas fa-bars"></i> </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="nav navbar-nav">
              <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Catering</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">dropdown</a></li>
                  <li><a class="dropdown-item" href="#">dropdown</a></li>
                  <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">dropdown</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">dropdown</a></li>
                      <li><a class="dropdown-item" href="#">dropdown</a></li>
                      <li><a class="dropdown-item" href="#">dropdown</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Retail</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Schools</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Order Page</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Gallery</a></li>
              <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
        )
    }
}