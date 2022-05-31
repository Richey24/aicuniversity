import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
    return (
        <div className="text-center">
            <hr />
            <h4 id='story' className="fw-bold">The Story Of Apostolic Impact Christian University.</h4>
            <p id='storyline' className="fw-bold text-secondary">The Institution was established for the purpose of training church leaders for the growth of their ministries across Africa and the World..</p>
            <footer className="foot">
                <div className={"mainFoot"}>
                    <div style={{ marginRight: '1rem' }}>
                        <p className="footHead">Quick Link</p>
                        <Link style={{ textDecoration: "none" }} to={`/profile`}>
                            <p className="footLink">Profile</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/course`}>
                            <p className="footLink">Read Courses</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/profile`}>
                            <p className="footLink">Register Courses</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/register`}>
                            <p className="footLink">Register</p>
                        </Link>
                    </div>
                    <div>
                        <p className="footHead">Key Features</p>
                        <Link style={{ textDecoration: "none" }} to={`/courses`}>
                            <p className="footLink">Courses</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/gallery`}>
                            <p className="footLink">Gallery</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/about`}>
                            <p className="footLink">About Us</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/contact`}>
                            <p className="footLink">Contact Us</p>
                        </Link>
                    </div>
                </div>
            </footer>

            <p className="copy">Copyright (c) 2022. Apostolic Impact Christian University</p>

        </div>
    )
}

export default Footer