import { Card, Button } from "react-bootstrap";
import "../App.css";
import bishop from "../img/bishop.jpeg";
import laptop from "../img/laptop.jpg";
import pos from "../img/pos.jpg";
import { Link } from "react-router-dom";

function MainCard() {
  return (
    <div id="card">
      <Card
        style={{
          width: "23rem",
          marginBottom: "1rem",
          borderBottom: "0.4rem solid #d62750",
        }}
      >
        <Card.Img variant="top" src={`${bishop}`} height={350} />
        <Card.Body>
          <Card.Title className="cardTitle">
            We Have A Lot Of Spirit Filled Teachers
          </Card.Title>
          <Card.Text>Lives Are Impacted Through Our Teachers.</Card.Text>
          <Link to={`/gallery`}>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              See More
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "23rem",
          marginBottom: "1rem",
          borderBottom: "0.4rem solid #d62750",
        }}
      >
        <Card.Img variant="top" src={`${laptop}`} height={350} />
        <Card.Body>
          <Card.Title className="cardTitle">Online Courses</Card.Title>
          <Card.Text>
            With Our Online Christian E-Library, You Can Read Various Books To
            Uplift Your Soul And Spirit
          </Card.Text>
          <Link to={`/course`}>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              Go To Courses
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "23rem",
          marginBottom: "1rem",
          borderBottom: "0.4rem solid #d62750",
        }}
      >
        <Card.Img variant="top" src={`${pos}`} height={350} />
        <Card.Body>
          <Card.Title className="cardTitle">Study Anywhere</Card.Title>
          <Card.Text>
            Study Both In Our Bible School And Online Using Our Christian
            E-Library
          </Card.Text>
          <Link to={`/contact`}>
            <Button style={{ backgroundColor: "#d62750", border: "none" }}>
              Check Location
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MainCard;
