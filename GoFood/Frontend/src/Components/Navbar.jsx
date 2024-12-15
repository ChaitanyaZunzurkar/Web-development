import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-black text-white">
      <div className="container-fluid px-5 mx-2">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              token ? 
              (
                <div className='d-flex justify-center container-fluid px-5 mx-2'>
                    <li className="nav-item">
                      <NavLink className="nav-link active text-white mx-5" aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link active text-white mx-5" aria-current="page" to="/orders">
                        My Orders
                      </NavLink>
                    </li>
                </div>
              ) :
              (
                <li className="nav-item">
                  <NavLink className="nav-link active text-white mx-5" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
              )
            }
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            {
              token ? 
              (
                <div className='d-flex container-fluid px-5 mx-2'>
                  <li className="nav-item">
                      <button className="btn btn-outline-primary" 
                        onClick={() => {
                          localStorage.removeItem('token');
                          navigate('/api/v1/signin'); 
                        }}
                      >
                        Sign out
                      </button>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/api/v1/cart">
                    <button className="btn btn-outline-primary">
                        Cart
                      </button>
                    </NavLink>
                  </li>
                </div>
              ) :
              (
                <div className='d-flex container-fluid px-5 mx-2'>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/api/v1/signin">
                      <button className="btn btn-outline-primary">
                        Sign in
                      </button>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/api/v1/signup">
                    <button className="btn btn-outline-primary">
                        Sign up
                      </button>
                    </NavLink>
                  </li>
                </div>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
