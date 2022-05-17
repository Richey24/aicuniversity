import { ListGroup, Form, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
    return (
        <div className="text-center">
            <hr />
            <h1 className="fw-bold">The Story Of Apostolic Impact Christian University.</h1>
            <p className="fw-bold text-secondary">The Institution was established for the purpose of training church leaders for the growth of their ministries across Africa and the World..</p>
            <div style={{ background: 'grey', padding: '2rem', flexDirection: 'column' }} className="d-flex justify-content-around">
                <ListGroup>
                    <Link style={{ textDecoration: "none" }} to={`/login`}>
                        <ListGroup.Item style={{ margin: '0.2rem' }} className="fw-bold link">Login</ListGroup.Item>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/register`}>
                        <ListGroup.Item style={{ margin: '0.2rem' }} className="fw-bold link">Register</ListGroup.Item>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/course`}>
                        <ListGroup.Item style={{ margin: '0.2rem' }} className="fw-bold link">Courses</ListGroup.Item>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/about`}>
                        <ListGroup.Item style={{ margin: '0.2rem' }} className="fw-bold link">About Us</ListGroup.Item>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/contact`}>
                        <ListGroup.Item style={{ margin: '0.2rem' }} className="fw-bold link">Contact Us</ListGroup.Item>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/gallery`}>
                        <ListGroup.Item style={{ margin: '0.2rem' }} className="fw-bold link">Gallery</ListGroup.Item>
                    </Link>
                </ListGroup>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Send Us A Message</Form.Label>
                        <br />
                        <FormControl as='textarea' className='back' style={{ border: '1rem, solid, white', borderBottomColor: 'green' }} type="text" placeholder="Enter Your Message" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Footer