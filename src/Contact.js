import Header from "./components/Header";
import { Container, Form, Button, FormControl } from "react-bootstrap";
import "./App.css";
import { useEffect } from "react";

function Contact() {
  const hide = () => {
    let main = document.getElementById("main");
    if (main.style.opacity === "0") {
      main.style.transition = "opacity 0.5s ease-in";
      main.style.height = "auto";
      main.style.opacity = "1";
    } else {
      main.style.transition = "opacity 0.5s ease-out";
      main.style.opacity = "0";
      main.style.height = "0";
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Header hide={hide} />
      <br />
      <div id="main" className="contactUs">
        <Container>
          <h2 className="fw-bold" style={{ color: "#d62750" }}>
            Contact Details
          </h2>
          <br />
          <p>
            For Admission and other inquiries contact us based on your location
          </p>
          <br />
          <h4 style={{ color: "#d62750" }}>Address:</h4>
          <p>
            Tongo field, Sierra-Leone,
            <br />
            <hr />
            Ablekuma Acrra, Ghana,
            <br />
            <hr />
            No.45 Emovon Street, Upper Lawani, Benin City, Edo State,
            <br />
            <hr />
            Kisumu, Kenya,
            <br />
            <hr />
            Freetown, Sierra-Leone
          </p>
          <br />

          <h4 style={{ color: "#d62750" }}>Phone Numbers:</h4>
          <br />
          <a className="num" href="tel: +234-7037738030">
            +234-7037738030
          </a>
          <hr />
          <a className="num" href="tel: +233-246537974">
            +233-246537974
          </a>
          <hr />
          <a className="num" href="tel: +232-30707180">
            +232-30707180
          </a>
          <hr />
          <a className="num" href="tel: +254-723842339">
            +254-723842339
          </a>
          <hr />
          <a className="num" href="tel: +232-77408901">
            +232-77408901
          </a>
          <br />
          <br />

          <h4 style={{ color: "#d62750" }}>Email Us At:</h4>
          <br />
          <a className="num" href="mailto: apostolicimpactuniversity@gmail.com">
            apostolicimpactuniversity@gmail.com
          </a>
          <hr />
          <h1 style={{ color: "#d62750" }}>Get In Touch</h1>
          <br />
          <Form>
            <div className="d-flex">
              <Form.Group
                style={{ marginRight: "1rem" }}
                className="mb-3"
                controlId="formBasicName"
              >
                <Form.Label>Your Name</Form.Label>
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
              <FormControl
                as="textarea"
                className="back"
                style={{
                  border: "1rem, solid, white",
                  borderBottomColor: "#d62750",
                }}
                type="text"
                placeholder="Enter Your Message"
              />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#d62750",
                border: "none",
                marginBottom: "1rem",
              }}
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
