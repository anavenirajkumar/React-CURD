import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <NavLink to="/" className="navbar-brand mt-2 mt-lg-0" >
        <img
          src="data:image/png;base64,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"
          height="55"
          alt=""
          loading="lazy"
        />
      </NavLink>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/add" className="nav-link" style={{fontWeight:'bold'}} >Add User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/all" className="nav-link" style={{fontWeight:'bold'}}>All Users</NavLink>
        </li>
      </ul>
    </div>
   </div>
</nav>
    )
}

export default NavBar;