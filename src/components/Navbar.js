import React from 'react'
import Logo from '../images/logo.svg'
import '../App.css'

const navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light container mt-5">
        <a class="navbar-brand" href="#">
          <img src={Logo} alt='logo' className='logo'/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">features<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" aria-disabled>Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="dropdownId" aria-haspopup="true" aria-expanded="false">sign in</a>
            </li>
          </ul>
        </div>
      </nav>


      {/* <nav className='m-5 d-flex justify-content-between align-items-center mt-5 nav'>

        <input type="checkbox" id='check' />
        <label for="check" id='menu'>
          <i className='fa fa-bars'></i>
        </label>
        <img src={Logo} alt='logo' />
        <ul className=''>
          <li>
            <a href="https://...">Features</a>
          </li>
          <li>
            <a href="https://....">Team</a>
          </li>
          <li>
            <a href="https://...">Sign In</a>
          </li>
        </ul>
      </nav> */}
    </div>
  )
}

export default navbar
