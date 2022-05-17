import Footer from "./components/Footer"
import Header from "./components/Header"
import { Card } from 'react-bootstrap'
import bishop from './img/bishop.jpeg'
import ger from './img/ger.jpeg'
import grad from './img/grad.jpg'
import ghana from './img/ghana.jpg'
import mummy from './img/mummy.jpg'
import student from './img/student.jpg'
import school from './img/school.jpg'
import './App.css'

function Gallery() {
    return (
        <div>
            <Header />
            <h1 className="text-center text-secondary">School Gallery</h1>
            <div id="card">
                <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                    <Card.Img variant="top" src={`${bishop}`} height={350} />
                    <Card.Body>
                        <Card.Title>Founder - Dr Sunday Uahomo</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                    <Card.Img variant="top" src={`${ger}`} height={350} />
                    <Card.Body>
                        <Card.Title>Bishop Paul Boobash</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                    <Card.Img variant="top" src={`${grad}`} height={350} />
                    <Card.Body>
                        <Card.Title>Graduating Student Ghana Branch</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                    <Card.Img variant="top" src={`${ghana}`} height={350} />
                    <Card.Body>
                        <Card.Title>Graduating Student Ghana Branch</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                    <Card.Img variant="top" src={`${mummy}`} height={350} />
                    <Card.Body>
                        <Card.Title>Graduating Student Ghana Branch</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                    <Card.Img variant="top" src={`${student}`} height={350} />
                    <Card.Body>
                        <Card.Title>Student Sierra Leone Branch</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                    <Card.Img variant="top" src={`${school}`} height={350} />
                    <Card.Body>
                        <Card.Title>Sierra Leone Bible School</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </div>
    )
}

export default Gallery