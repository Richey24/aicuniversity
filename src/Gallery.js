import Footer from "./components/Footer";
import Header from "./components/Header";
import { Card } from "react-bootstrap";
import bishop from "./img/bishop.jpeg";
import school from "./img/school.jpg";
import sign from "./img/IMG-20220426-WA0020.jpg";
import man from "./img/IMG-20220426-WA0017.jpg";
import people from "./img/IMG-20220426-WA0018.jpg";
import build from "./img/IMG-20220426-WA0019.jpg";
import student from "./img/IMG-20220426-WA0023.jpg";
import person1 from "./img/IMG-20220426-WA0015.jpg";
import person2 from "./img/IMG-20220426-WA0021.jpg";
import person3 from "./img/IMG-20220426-WA0024.jpg";
import person4 from "./img/IMG-20220426-WA0013.jpg";
import person5 from "./img/IMG-20220426-WA0014.jpg";
import "./App.css";
import { useEffect } from "react";

function Gallery() {
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
      <div id="main">
        <h1 className="text-center aboutAicu">School Gallery</h1>
        <div id="card">
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${sign}`} height={350} />
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${people}`} height={350} />
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${build}`} height={350} />
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${man}`} height={350} />
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${bishop}`} height={350} />
            <Card.Body>
              <Card.Title>Founder - Dr Sunday Uahomo</Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${student}`} height={350} />
            <Card.Body>
              <Card.Title>Student Sierra Leone Branch</Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${school}`} height={350} />
            <Card.Body>
              <Card.Title>Sierra Leone Bible School</Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${person1}`} height={350} />
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${person2}`} height={350} />
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${person3}`} height={350} />
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${person4}`} height={350} />
          </Card>
          <Card
            style={{
              width: "23rem",
              marginBottom: "1rem",
              borderBottom: "0.4rem solid #d62750",
            }}
          >
            <Card.Img variant="top" src={`${person5}`} height={350} />
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Gallery;
