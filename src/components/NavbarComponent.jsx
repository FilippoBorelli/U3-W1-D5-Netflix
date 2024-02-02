import logo from "../assets/logo.png"

const NavbarComponent = () => {
    return(
        <nav
        className="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
        style={{background: "#221f1f"}}>
        <div className="container-fluid">
            <img src={logo} style={{width: "100px", height: "55px"}}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">TV Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Recently Added</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">My List</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">KIDS</div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default NavbarComponent