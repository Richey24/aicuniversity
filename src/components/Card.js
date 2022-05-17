import { Card, Button } from 'react-bootstrap'
import '../App.css'
import bishop from '../img/bishop.jpeg'
import laptop from '../img/laptop.jpg'
import pos from '../img/pos.jpg'
import { Link } from 'react-router-dom'


function MainCard() {
    return (
        <div id="card">
            <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                <Card.Img variant="top" src={`${bishop}`} height={350} />
                <Card.Body>
                    <Card.Title>Spirit Filled Teachers</Card.Title>
                    <Card.Text>
                        Lives Are Impacted Through Our Teachers.
                    </Card.Text>
                    <Link to={`/gallery`}>
                        <Button variant="primary">See More</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                <Card.Img variant="top" src={`${laptop}`} height={350} />
                <Card.Body>
                    <Card.Title>Online Courses</Card.Title>
                    <Card.Text>
                        With Our Online Christian E-Library, You Can Read Various Books To Uplift Your Soul And Spirit
                    </Card.Text>
                    <Link to={`/course`}>
                        <Button variant="primary">
                            Go To Courses
                        </Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '23rem', marginBottom: '1rem', borderBottom: '0.4rem solid orange' }}>
                <Card.Img variant="top" src={`${pos}`} height={350} />
                <Card.Body>
                    <Card.Title>Study Anywhere</Card.Title>
                    <Card.Text>
                        Study Both In Our Bible School And Online Using Our Christian E-Library
                    </Card.Text>
                    <Link to={`/contact`}>
                        <Button variant="primary">Check Location</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MainCard