import { Form, Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url } from "./env";

function Login() {
  let [err, setErr] = useState("");
  let [{ userId }, setCookie] = useCookies(["userId"]);
  let navigate = useNavigate();
  useEffect(() => {
    if (userId) {
      navigate("/profile");
    }
  });
  // eslint-disable-next-line no-unused-vars
  const loginUser = async (response) => {
    let body = {
      email: response.email,
      password: response.id,
    };
    let res = await axios.post(`${backend_url}/login`, body);
    let res1 = await res.data;
    if (res1.message) {
      setErr(res1.message);
      return;
    }
    if (res1) {
      setCookie("userId", res1._id);
      navigate("/profile");
    }
  };

  const mainLogin = async (event) => {
    event.preventDefault();
    let body = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    let res = await axios.post(`${backend_url}/login`, body);
    let response = await res.data;
    if (response.message) {
      setErr(response.message);
      return;
    }
    if (response) {
      setCookie("userId", response._id);
      navigate("/profile");
    }
  };

  const register = () => {
    navigate("/register");
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
        <h1 className="text-center aboutAicu">Login To Your Student Account</h1>
        <Container>
          <h5 className="text-danger text-center">{err}</h5>
          <Form onSubmit={mainLogin}>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep Me Signed In" />
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
                callback={loginUser}
                render={(renderProps) => (
                  <Button
                    style={{
                      backgroundColor: "rgb(21, 154, 211)",
                      border: "none",
                      marginBottom: "1rem",
                    }}
                    type="submit"
                  >
                    Login With Facebook
                  </Button>
                )}
              />
              <Button
                onClick={loginUser}
                style={{
                  backgroundColor: "#d62750",
                  border: "none",
                }}
                type="submit"
              >
                Login
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <h6>Don't have an account? </h6>
              <Button
                style={{
                  backgroundColor: "#d62750",
                  border: "none",
                }}
                onClick={register}
              >
                Register
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Login;
