import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { backend_url } from "../env";

function ProfileForm() {
  let [err, setErr] = useState("");

  let navigate = useNavigate();
  let [{ userId }] = useCookies();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  });
  const completeRegister = async (event) => {
    event.preventDefault();
    let body = {
      country: event.target[0].value,
      state: event.target[1].value,
      number: event.target[2].value,
      church: event.target[3].value,
      id: userId,
    };
    let res = await axios.post(`${backend_url}/complete`, body);
    let response = await res.data;
    if (response.message) {
      setErr(response.message);
      return;
    }
    if (response) {
      navigate("/profile");
    }
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
        <Container>
          <h1 className="text-center">
            Fill The Form To Complete Registration
          </h1>
          <h5 className="text-danger text-center">{err}</h5>
          <Form onSubmit={completeRegister}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter your country" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter your state" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Church</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of your church"
              />
              <Form.Text className="text-muted">
                This will be use to verify the individual incase the need arises
              </Form.Text>
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#d62750",
                border: "none",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default ProfileForm;
