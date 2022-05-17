import Header from "./components/Header"
import { Container, Form, Button, FormControl } from 'react-bootstrap'
import './App.css'

function Contact() {
    return (
        <div>
            <Header />
            <br />
            <br />
            <div>
                <Container>
                    <h2>Contact Details</h2>
                    <br />
                    <p>For Admission and other inquiries contact us based on your location</p>
                    <br />
                    <h4 className="fw-bold" style={{ color: 'orangered' }}>Address:</h4>
                    <p>
                        No.45 Emovon Street, Upper Lawani, Benin City, Edo State,
                        <br />
                        <hr />
                        Ablekuma Acrra, Ghana,
                        <br />
                        <hr />
                        Kenema, Sierra-Leone,
                        <br />
                        <hr />
                        Kisumu, Kenya,
                        <br />
                        <hr />
                        Freetown, Sierra-Leone
                    </p>
                    <br />

                    <h4 className="fw-bold" style={{ color: 'orangered' }}>Phone Numbers:</h4>
                    <br />
                    <a className='num' href="tel: +234-7037738030">+234-7037738030</a>
                    <hr />
                    <a className='num' href="tel: +233-246537974">+233-246537974</a>
                    <hr />
                    <a className='num' href="tel: +232-30707180">+232-30707180</a>
                    <hr />
                    <a className='num' href="tel: +254-723842339">+254-723842339</a>
                    <hr />
                    <a className='num' href="tel: +232-77408901">+232-77408901</a>
                    <br />
                    <br />

                    <h4 className="fw-bold" style={{ color: 'orangered' }}>Email Us At:</h4>
                    <br />
                    <a className="num" href="mailto: apostolicimpactuniversity@gmail.com">apostolicimpactuniversity@gmail.com</a>
                    <hr />
                    <h1 className="fw-bold" style={{ color: 'black' }}>Get In Touch</h1>
                    <br />
                    <Form>
                        <div className="d-flex">
                            <Form.Group style={{ marginRight: '1rem' }} className="mb-3" controlId="formBasicName">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="Your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <br />
                            <FormControl as='textarea' className='back' style={{ border: '1rem, solid, white', borderBottomColor: 'green' }} type="text" placeholder="Enter Your Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default Contact