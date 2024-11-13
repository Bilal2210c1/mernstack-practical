import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">User Registeration</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Register</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/rolelist">Role List</Link>
        </li> */}
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar