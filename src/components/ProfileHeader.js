import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function ProfileHeader() {
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
                            <img src={logo} alt='logo' width={50} height={50} />
                        </Link>
                        <h5 className='text-secondary'>
                            {' '}
                            AICU Student Profile
                        </h5>
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link style={{ textDecoration: "none" }} to={`/profile`}>
                                <Nav.Link href="#home" >Register Course</Nav.Link>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to={`/profile`}>
                                <Nav.Link>Read Course</Nav.Link>
                            </Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <Link style={{ textDecoration: "none" }} to="/about">
                                    <NavDropdown.Item href="#action/3.1">Curriculum</NavDropdown.Item>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to="/course">
                                    <NavDropdown.Item href="#action/3.3">TimeTable</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default ProfileHeader