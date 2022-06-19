import Footer from "./components/Footer";
import Header from "./components/Header";
import "./components/css/Head.css";
import { useEffect } from "react";

function About() {
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
        <p className="text-center aboutAicu">
          About Apostolic Impact Christian University
        </p>
        <div
          style={{
            marginTop: "1rem",
            paddingRight: "0.5rem",
            paddingLeft: "0.5rem",
          }}
        >
          <hr />
          <h4 style={{ color: "#d62750" }} className="text-center fw-bold">
            Brief History
          </h4>
          <p style={{ textOverflow: "ellipsis" }} className="">
            Apostolic Impact Christian Seminary and University is a practical
            Bible Training Institute. The school was founded on the 15th day of
            April 2014 in Benin City Nigeria. The school is affiliated to Petrus
            Fidel Seminary and University, Lannexa Virginia USA And Petra
            Christian University Florida USA. The School was established for the
            purpose of training church leaders for the growth of their
            ministries across Africa and the World.
          </p>
        </div>
        <hr />
        <div>
          <h2 className="text-secondary text-center">
            All Study Opportunities In Various Location
          </h2>
          <hr />
          <p className="text-secondary text-center fw-bold">
            Our Aim Is To Train Ministers Of The Gospel For World Mission. We
            Have The Following Fulltime Courses, Part-time Courses, Weekend
            Courses, Online Courses We Are An International Christian
            Educational Institutions That Has Campuses In The Following
            Countries Belgium, Nigeria, Kenya, Sierra Leone, Liberia, Ghana,
            South Africa, Uganda We Have Online Students From USA, Pakistan,
            Kenya and South Africa
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
