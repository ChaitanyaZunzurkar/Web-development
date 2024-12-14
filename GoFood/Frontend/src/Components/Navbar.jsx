import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black text-white">
      <div className="container-fluid px-5 mx-2 " >
        <NavLink className="navbar-brand text-white" to="/">Go Food</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <NavLink className="nav-link active text-white mx-5" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
          </ul>
          <form className="d-flex p-2 mx-auto" role="search" >
            <input
              className="form-control me-2 w-200"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0" >
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/signin">
                  <button className="btn btn-outline-primary">
                    Sign in
                  </button>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/user/signup">
                <button className="btn btn-outline-primary">
                    Sign up
                  </button>
                </NavLink>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;