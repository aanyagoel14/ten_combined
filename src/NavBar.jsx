import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink class="navbar-brand" to="/">QuizApp</NavLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <NavLink class="nav-item nav-link active" to="/nation">Search Country</NavLink>
        <NavLink class="nav-item nav-link" to="/video">Video Search</NavLink>
      
    
      </div>
    </div>
  </nav>
  )
}

export default NavBar