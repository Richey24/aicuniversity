import { Card, Button } from "react-bootstrap";
import course from "../img/course.jpeg";

function HomeCourse() {
  return (
    <div>
      <h1 className="text-center">Our Popular Courses</h1>
      <p className="text-center">
        Using Our Online E-Library, You Can Study Our Uplifting And Sprit Filled
        Books
      </p>
      <div id="card">
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
              BIBLE HISTORY - COURSE D101
            </Card.Title>
            <Card.Text className="fw-bold">
              Teacher - Dr Sunday Uahomo
            </Card.Text>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              Read
            </Button>
          </Card.Body>
        </Card>
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
              THE GOSPEL - COURSES D103
            </Card.Title>
            <Card.Text className="fw-bold">
              Teacher - Dr Sunday Uahomo
            </Card.Text>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              Read
            </Button>
          </Card.Body>
        </Card>
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
              FINANCIAL PROSPERITY IN MINISTRY - COURSE D126
            </Card.Title>
            <Card.Text className="fw-bold">
              Teacher - Dr Sunday Uahomo
            </Card.Text>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              Read
            </Button>
          </Card.Body>
        </Card>
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
              CROSS AND SANCTIFICATION - COURSE D113
            </Card.Title>
            <Card.Text className="fw-bold">
              Teacher - Dr Sunday Uahomo
            </Card.Text>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              Read
            </Button>
          </Card.Body>
        </Card>
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
              UNDERSTANDING YOUR GIFT AND CALLING - COURSE D120
            </Card.Title>
            <Card.Text className="fw-bold">
              Teacher - Dr Sunday Uahomo
            </Card.Text>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              Read
            </Button>
          </Card.Body>
        </Card>
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
              THE ANOINTING - COURSE D122
            </Card.Title>
            <Card.Text>Teacher - Dr Sunday Uahomo</Card.Text>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              Read
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomeCourse;
