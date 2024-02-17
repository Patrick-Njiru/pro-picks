const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand h6 text-uppercase" href="#">
          <img src="" alt="logo" />
          <span className="text-warning fw-bold">Shop</span>
          <span className="text-primary fw-bold">Cart</span>
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
              className="d-none d-md-flex justify-content-between align-items-center m-2 me-4"
              style={{ width: 'fit-content' }}
            >
              <li className="list-group-item mx-2 h6">
                <a
                  href="#"
                  id="nav_home"
                  className='nav_link text-decoration-none'
                >
                  Home
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#shop"
                  id="nav_shop"
                  className='nav_link text-decoration-none'
                >
                  Shop
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#blog"
                  id="nav_blog"
                  className='nav_link text-decoration-none'
                >
                  Blog
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#about"
                  id="nav_about"
                  className='nav_link text-decoration-none'
                >
                  About
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#contact"
                  id="nav_contact"
                  className='nav_link text-decoration-none'
                >
                  Contact
                </a>
              </li>
              <li className="list-group-item ms-5 h6">
                <a
                  href="#create_acc"
                  id="create_acc"
                  className='nav_link text-decoration-none'
                >
                  Create Account
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#login"
                  id="nav_login"
                  className='nav_link text-decoration-none'
                >
                  Log In
                </a>
              </li>
            </ul>
            
            {/* Small Screen Display */}
            <ul className="d-md-none list-group-item text-center">
            <li className="list-group-item my-2 h6">
                <a
                  href="#"
                  id="nav_home"
                  className='nav_link text-decoration-none'
                >
                  Home
                </a>
              </li>
              <li className="list-group-item my-2 h6">
                <a
                  href="#shop"
                  id="nav_shop"
                  className='nav_link text-decoration-none'
                >
                  Shop
                </a>
              </li>
              <li className="list-group-item my-2 h6">
                <a
                  href="#blog"
                  id="nav_blog"
                  className='nav_link text-decoration-none'
                >
                  Blog
                </a>
              </li>
              <li className="list-group-item my-2 h6">
                <a
                  href="#about"
                  id="nav_about"
                  className='nav_link text-decoration-none'
                >
                  About
                </a>
              </li>
              <li className="list-group-item my-2 h6">
                <a
                  href="#contact"
                  id="nav_contact"
                  className='nav_link text-decoration-none'
                >
                  Contact
                </a>
              </li>
              <li className="list-group-item ms-5 h6">
                <a
                  href="#create_acc"
                  id="create_acc"
                  className='nav_link btn btn-warning px-3 text-decoration-none'
                >
                  Create Account
                </a>
              </li>
              <li className="list-group-item my-2 h6">
                <a
                  href="#login"
                  id="nav_login"
                  className='nav_link text-decoration-none'
                >
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar