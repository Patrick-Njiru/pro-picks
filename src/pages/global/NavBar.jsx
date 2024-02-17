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
          <span className="text-orange fw-bold ms-2">Shop</span>
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
              className="d-none d-lg-flex justify-content-between align-items-center m-2 me-4"
              style={{ width: 'fit-content' }}
            >
              <li className="list-group-item mx-2 h6">
                <a
                  href="#"
                  className='link-dark text-decoration-none'
                >
                  Home
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#shop"
                  className='link-dark text-decoration-none'
                >
                  Shop
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#blog"
                  className='link-dark text-decoration-none'
                >
                  Blog
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#about"
                  className='link-dark text-decoration-none'
                >
                  About
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <a
                  href="#contact"
                  className='link-dark text-decoration-none'
                >
                  Contact
                </a>
              </li>
              <li className="list-group-item ms-4 h6">
              <a
                  href="#create_acc"
                  className='btn link-orange fw-bold px-3 text-decoration-none'
                >
                  Create Account
                </a>
              </li>
              <li className="list-group-item mx-2 h6">
                <button className="btn border-0 mx-0 px-0">
                  <a
                    href="#login"
                    className='link-dark text-decoration-none h6'
                  >
                    Log In
                  </a>
                </button>
              </li>
            </ul>
            
            {/* Small to Medium Screen Display */}
            <ul className="d-lg-none list-group-item text-center">
            <li className="list-group-item my-4 h6">
                <a
                  href="#"
                  className='link-dark text-decoration-none'
                >
                  Home
                </a>
              </li>
              <li className="list-group-item my-4 h6">
                <a
                  href="#shop"
                  className='link-dark text-decoration-none'
                >
                  Shop
                </a>
              </li>
              <li className="list-group-item my-4 h6">
                <a
                  href="#blog"
                  className='link-dark text-decoration-none'
                >
                  Blog
                </a>
              </li>
              <li className="list-group-item my-4 h6">
                <a
                  href="#about"
                  className='link-dark text-decoration-none'
                >
                  About
                </a>
              </li>
              <li className="list-group-item my-4 h6">
                <a
                  href="#contact"
                  className='link-dark text-decoration-none'
                >
                  Contact
                </a>
              </li>
              <li className="list-group-item mt-5 h6">
                <a
                  href="#create_acc"
                  className='btn link-orange fw-bold px-3 text-decoration-none'
                >
                  Create Account
                </a>
              </li>
              <li className="list-group-item">
                <button className="btn">
                  <a
                    href="#login"
                    className='link-dark text-decoration-none h6'
                  >
                    Log In
                  </a>
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