import Footer from "./Footer";
import Header from "./Header";
import course from "../img/course.jpeg";
import "../App.css";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  Modal,
  Spinner,
} from "react-bootstrap";
import { courseList } from "../utils/courselist";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { backend_url } from "../env";

function RegisterCourse() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  let [lists, setLists] = useState(courseList);
  let [single, setSingle] = useState("");
  let [title, setTitle] = useState("");
  let [err, setErr] = useState("");
  let [load, setLoad] = useState(false);
  let [{ userId }] = useCookies();

  const handleShow = async (course, teacher) => {
    setLoad(true);
    await axios.post(`${backend_url}/course`, {
      id: userId,
      course: {
        course,
        teacher,
      },
    });
    setTitle(course);
    setLoad(false);
    setShow(true);
  };
  const filterList = (event) => {
    setSingle(event.target.value);
    let newList = courseList.filter((list) =>
      list.courseName.includes(event.target.value.toUpperCase())
    );
    if (newList.length > 0) {
      setLists(newList);
      setErr("");
    } else {
      setErr("No Course Found");
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
        <h1 className="text-center aboutAicu">Courses</h1>
        <InputGroup style={{ marginLeft: "1.5rem" }} className="mb-3">
          <FormControl
            value={single}
            onChange={filterList}
            placeholder="Search For A Course"
            aria-label="Search For A Course"
            aria-describedby="basic-addon2"
          />
          <Button
            style={{
              backgroundColor: "#d62750",
              border: "none",
              marginRight: "3.2rem",
            }}
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
        <h5 className="text-center text-danger">{err}</h5>
        <div id="card">
          {lists.map((list) => {
            return (
              <div key={list.id}>
                <Card
                  style={{
                    width: "22rem",
                    marginBottom: "1rem",
                    borderBottom: "0.4rem solid #d62750",
                  }}
                >
                  <Card.Img variant="top" src={`${course}`} />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      {list.courseName}
                    </Card.Title>
                    <Card.Text className="fw-bold">{list.teacher}</Card.Text>
                    <Button
                      onClick={() => handleShow(list.courseName, list.teacher)}
                      style={{
                        backgroundColor: "#d62750",
                        border: "none",
                      }}
                    >
                      {load ? (
                        <Spinner
                          animation="border"
                          style={{ color: "#D05270" }}
                        />
                      ) : (
                        "Register"
                      )}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>You Have Registered For {title}</Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                backgroundColor: "#d62750",
                border: "none",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer />
      </div>
    </div>
  );
}

export default RegisterCourse;
