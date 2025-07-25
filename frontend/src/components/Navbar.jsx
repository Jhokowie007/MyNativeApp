import "./navbar.css";

function Navi() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary fixed-top container-fluid">
        <div className="container-fluid justify-content-start gap-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-white text-center" href="#">
            My Schools
          </a>
          <div
            className="offcanvas offcanvas-start bg-success"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white text-uppercase" id="offcanvasNavbarLabel">
                My Schools
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-4">
                <li className="nav-item">
                  <a className="nav-link active bg-dark" aria-current="page" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navi;
