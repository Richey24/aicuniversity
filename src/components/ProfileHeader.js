import { Navbar, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function ProfileHeader({ hide }) {
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link style={{ textDecoration: "none" }} to={`/`}>
                        <img src={logo} alt='logo' width={30} height={30} />
                    </Link>
                    <p className='text-secondary'>
                        AICU Student Profile
                    </p>
                </div>

                <Navbar.Toggle onClick={hide} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={{ textDecoration: "none" }} to={`/profile`}>
                            <Nav.Link href="#home" >Register Course</Nav.Link>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/profile`}>
                            <Nav.Link>Read Course</Nav.Link>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/profile`}>
                            <Nav.Link>Curriculum</Nav.Link>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/profile`}>
                            <Nav.Link>Time Table</Nav.Link>
                        </Link>
                        <Nav.Link onClick={logOut}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default ProfileHeader