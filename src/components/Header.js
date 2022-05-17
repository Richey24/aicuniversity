import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Header() {
    // eslint-disable-next-line no-unused-vars
    let [{ userId }, _, removeCookie] = useCookies()
    let navigate = useNavigate()

    const logOut = () => {
        removeCookie("userId")
        navigate('/')
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <Link style={{ textDecoration: "none" }} to={`/`}>
                            <img src={logo} alt='logo' width={70} height={70} />
                        </Link>
                        <h3 href="#home">
                            {' '}
                            Apostolic Impact Christian University
                        </h3>
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                userId !== undefined ? (
                                    <Link style={{ textDecoration: "none" }} to={`/profile`}>
                                        <Nav.Link href="#home" >Student Profile</Nav.Link>
                                    </Link>
                                ) : (
                                    <Link style={{ textDecoration: "none" }} to={`/login`}>
                                        <Nav.Link href="#home" >Login</Nav.Link>
                                    </Link>
                                )
                            }

                            {
                                userId !== undefined ? (
                                    <Nav.Link onClick={logOut}>Logout</Nav.Link>
                                ) : (
                                    <Link style={{ textDecoration: "none" }} to="/register">
                                        <Nav.Link href="#link" >Register</Nav.Link>
                                    </Link>
                                )
                            }


                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <Link style={{ textDecoration: "none" }} to="/about">
                                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to="/contact">
                                    <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to="/course">
                                    <NavDropdown.Item href="#action/3.3">Courses</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <Link style={{ textDecoration: "none" }} to="/gallery">
                                    <NavDropdown.Item href="#action/3.4">Gallery</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header