import Footer from "./components/Footer"
import Header from "./components/Header"
import student from './img/grad.jpg'

function About() {
    return (
        <div>
            <Header />
            <h1 className="text-center text-secondary">About Apostolic Impact Christian University</h1>
            <div style={{ background: 'lightyellow', marginTop: '1rem' }}>
                <hr />
                <h4 style={{ color: 'gold' }} className="text-center fw-bold">Brief History</h4>
                <img src={`${student}`} style={{ border: '0.1rem solid white', float: 'left', margin: '1rem', borderRadius: '20%' }} width={300} height={300} alt="student" />
                <h6 style={{ textOverflow: 'ellipsis' }} className="text-dark fw-bold">Apostolic Impact Christian Seminary and University is a practical Bible Training Institute. The school was founded on the 15th day of April 2014 in Benin City Nigeria. The school is affiliated to Petrus Fidel Seminary and University, Lannexa Virginia USA And Petra Christian University Florida USA. The School was established for the purpose of training church leaders for the growth of their ministries across Africa and the World.</h6>
            </div>
            <hr />
            <div>
                <h2 className="text-secondary text-center">All Study Opportunities
                    In Various Location</h2>
                <hr />
                <p className="text-secondary text-center fw-bold">
                    Our Aim Is To Train Ministers Of The Gospel For World Mission.

                    We Have The Following

                    Fulltime Courses, Part-time Courses, Weekend Courses, Online Courses

                    We Are An International Christian

                    Educational Institutions That Has Campuses

                    In The Following Countries

                    Belgium, Nigeria, Kenya, Sierra Leone, Liberia, Ghana, South Africa, Uganda

                    We Have Online Students From USA, Pakistan, Kenya and South Africa</p>
            </div>
            <Footer />
        </div>
    )
}

export default About