import { Form, Button, Container, Spinner } from "react-bootstrap";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url } from "./env";

function Register() {
  let [err, setErr] = useState("");
  let [load, setLoad] = useState(false);
  let navigate = useNavigate();

  let [{ userId }, setCookie] = useCookies(["userId"]);
  useEffect(() => {
    if (userId) {
      navigate("/profile");
    }
  });

  // eslint-disable-next-line no-unused-vars
  const registerUser = async (response) => {
    let body = {
      name: response.name,
      image: response.picture.data.url,
      email: response.email,
      password: response.id,
    };
    let res = await axios.post(`${backend_url}/register`, body);
    let res1 = await res.data;
    if (res1.message) {
      setErr(res1.message);
      return;
    }
    if (res1) {
      setCookie("userId", res1._id);
      navigate("/profileform");
    }
  };

  const normalRegister = async (event) => {
    setLoad(true);
    event.preventDefault();
    let image = new FormData();
    if (event.target[2].files[0]) {
      image.append(
        "image",
        event.target[2].files[0],
        event.target[2].files[0].name
      );
      await axios.post(`${backend_url}/upload`, image);
    }
    let body = {
      name: event.target[0].value + " " + event.target[1].value,
      image: event.target[2].files[0] ? event.target[2].files[0].name : "",
      email: event.target[3].value,
      password: event.target[4].value,
    };
    let res = await axios.post(`${backend_url}/register`, body);
    let response = await res.data;
    setLoad(false);
    if (response.message) {
      setErr(response.message);
      return;
    }
    if (response) {
      setCookie("userId", response._id);
      navigate("/profileform");
    }
  };

  const login = () => {
    navigate("/login");
  };

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

  return (
    <div>
      <Header hide={hide} />
      <div id="main">
        <h1 className="text-center aboutAicu">Register As A Student</h1>
        <Container>
          <h5 className="text-danger text-center">{err}</h5>
          <Form onSubmit={normalRegister}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Your Photo</Form.Label>
              <Form.Control name="dp" type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <FacebookLogin
                appId="392398942929367"
                autoLoad={true}
                fields="name,email,picture"
                callback={registerUser}
                render={(renderProps) => (
                  <Button
                    style={{
                      backgroundColor: "rgb(21, 154, 211)",
                      border: "none",
                      marginBottom: "1rem",
                    }}
                    type="submit"
                  >
                    Facebook Sign Up
                  </Button>
                )}
              />
              <Button
                style={{
                  backgroundColor: "#d62750",
                  border: "none",
                }}
                type="submit"
              >
                {load ? (
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                ) : (
                  "Register"
                )}
              </Button>
            </div>
          </Form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <h6>Already have an account? </h6>
            <Button
              style={{
                backgroundColor: "#d62750",
                border: "none",
              }}
              onClick={login}
            >
              Login
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Register;
