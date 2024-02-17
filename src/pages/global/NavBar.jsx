import { NavLink } from "react-router-dom"
import '../pages.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top px-5" style={{background: 'rgba(254,254,254,0.8)'}}>
      <div className="container-fluid">
        <a className="navbar-brand h6 text-uppercase" href="#">
          <img
            src="https://www.picsum.photos/30"
            alt="app logo"
            className='img-fluid rounded-circle d-none d-sm-inline'
          />
          <span className="text-orange fw-bold ms-2">Pro</span>
          <span className="text-primary fw-bold">Picks</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav_links"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav_links">
          <div className="d-block ms-auto">
            {/* Large Screen Display */}
            <ul
              className="d-none d-lg-flex justify-content-between align-items-center m-2 me-4"
              style={{ width: 'fit-content' }}
            >
              <li className="list-group-item mx-2 h6">
                <NavLink
                  to="/"
                  className='text-decoration-none'
                >
                  Home
                </NavLink>
              </li>
              <li className="list-group-item mx-2 h6">
                <NavLink
                  to="/shop"
                  className='text-decoration-none'
                >
                  Shop
                </NavLink>
              </li>
              <li className="list-group-item mx-2 h6">
                <NavLink
                  to="/blog"
                  className='text-decoration-none'
                >
                  Blog
                </NavLink>
              </li>
              <li className="list-group-item mx-2 h6">
                <NavLink
                  to="/about"
                  className='text-decoration-none'
                >
                  About
                </NavLink>
              </li>
              <li className="list-group-item mx-2 h6">
                <NavLink
                  to="/contact"
                  className='text-decoration-none'
                >
                  Contact
                </NavLink>
              </li>
              <li className="list-group-item ms-4 h6">
              <NavLink
                  to="/create_acc"
                  className='btn link-orange fw-bold px-3 text-decoration-none'
                >
                  Create Account
                </NavLink>
              </li>
              <li className="list-group-item mx-2 h6">
                <button className="btn border-0 mx-0 px-0">
                  <NavLink
                    to="/login"
                    className='text-decoration-none h6'
                  >
                    Log In
                  </NavLink>
                </button>
              </li>
            </ul>
            
            {/* Small to Medium Screen Display */}
            <ul className="d-lg-none list-group-item text-center">
            <li className="list-group-item my-4 h6">
                <NavLink
                  to="/"
                  className='text-decoration-none'
                >
                  Home
                </NavLink>
              </li>
              <li className="list-group-item my-4 h6">
                <NavLink
                  to="/shop"
                  className='text-decoration-none'
                >
                  Shop
                </NavLink>
              </li>
              <li className="list-group-item my-4 h6">
                <NavLink
                  to="/blog"
                  className='text-decoration-none'
                >
                  Blog
                </NavLink>
              </li>
              <li className="list-group-item my-4 h6">
                <NavLink
                  to="/about"
                  className='text-decoration-none'
                >
                  About
                </NavLink>
              </li>
              <li className="list-group-item my-4 h6">
                <NavLink
                  to="/contact"
                  className='text-decoration-none'
                >
                  Contact
                </NavLink>
              </li>
              <li className="list-group-item mt-5 h6">
                <NavLink
                  to="/create-account"
                  className='btn link-orange fw-bold px-3 text-decoration-none'
                >
                  Create Account
                </NavLink>
              </li>
              <li className="list-group-item">
                <button className="btn">
                  <NavLink
                    to="/login"
                    className='text-decoration-none h6'
                  >
                    Log In
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar