import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./css/Head.css";

function Header({ hide }) {
  // eslint-disable-next-line no-unused-vars
  let [{ userId }, _, removeCookie] = useCookies();
  let navigate = useNavigate();

  const logOut = () => {
    removeCookie("userId");
    navigate("/");
  };
  return (
    <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
      <Navbar style={{ backgroundColor: "white" }} expand="lg">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ textDecoration: "none" }} to={`/`}>
            <img src={logo} alt="logo" width={30} height={30} />
          </Link>
          <h3 href="#home" className="aicu">
            {" "}
            AICU
          </h3>
        </div>
        <Navbar.Toggle
          style={{ border: "none" }}
          onClick={hide}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse
          className="justify-content-end collapse"
          id="basic-navbar-nav"
        >
          {userId !== undefined ? (
            <Link style={{ textDecoration: "none" }} to={`/profile`}>
              <Nav.Link className="text-secondary fw-bold" href="#home">
                Student Profile
              </Nav.Link>
            </Link>
          ) : (
            <Link style={{ textDecoration: "none" }} to={`/login`}>
              <Nav.Link className="text-secondary fw-bold" href="#home">
                Login
              </Nav.Link>
            </Link>
          )}

          {userId !== undefined ? (
            <Nav.Link className="text-secondary fw-bold" onClick={logOut}>
              Logout
            </Nav.Link>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/register">
              <Nav.Link className="text-secondary fw-bold" href="#link">
                Register
              </Nav.Link>
            </Link>
          )}
          <Link style={{ textDecoration: "none" }} to="/about">
            <Nav.Link className="text-secondary fw-bold" href="#action/3.1">
              About Us
            </Nav.Link>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <Nav.Link className="text-secondary fw-bold" href="#action/3.2">
              Contact Us
            </Nav.Link>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/course">
            <Nav.Link className="text-secondary fw-bold" href="#action/3.3">
              Courses
            </Nav.Link>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/gallery">
            <Nav.Link className="text-secondary fw-bold" href="#action/3.4">
              Gallery
            </Nav.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
