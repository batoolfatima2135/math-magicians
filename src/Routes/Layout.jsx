// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink, Outlet } from 'react-router-dom';
import '../Styles/Layout.css';

const Layout = () => (
  <div className="container-fluid p-0">
    <nav className="navbar navbar-expand-lg  bg-success">
      <div className="container-fluid">
        <NavLink className="h1 title" to="/">Math Magicians</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/qoute">Quote</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <Outlet />
    </div>
  </div>
);
export default Layout;
