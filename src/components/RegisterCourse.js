import Footer from "./Footer"
import Header from "./Header"
import course from '../img/course.jpeg'
import '../App.css'
import { Card, Button, InputGroup, FormControl, Modal } from 'react-bootstrap'
import { courseList } from "../utils/courselist"
import { useState } from "react"
import axios from 'axios'
import { useCookies } from "react-cookie"
import { backend_url } from "../env"

function RegisterCourse() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    let [lists, setLists] = useState(courseList)
    let [single, setSingle] = useState("")
    let [title, setTitle] = useState("")
    let [err, setErr] = useState("")
    let [{ userId }] = useCookies()

    const handleShow = async (course, teacher) => {
        let user = await axios.post(`${backend_url}/course`, {
            id: userId,
            course: {
                course,
                teacher
            }
        })
        let res = await user.data
        console.log(res);
        setTitle(course)
        setShow(true);
    }
    const filterList = (event) => {
        setSingle(event.target.value)
        let newList = courseList.filter((list) => list.courseName.includes(event.target.value.toUpperCase()))
        if (newList.length > 0) {
            setLists(newList)
            setErr('')
        } else {
            setErr("No Course Found")
        }
    }

    return (
        <div>
            <Header />
            <h1 className="text-center text-secondary">Courses</h1>
            <InputGroup className="mb-3">
                <FormControl
                    value={single}
                    onChange={filterList}
                    placeholder="Search For A Course"
                    aria-label="Search For A Course"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            <h5 className="text-center text-danger">{err}</h5>
            <div id="card">
                {
                    lists.map((list) => {
                        return (
                            <div key={list.id}>
                                <Card style={{ width: '22rem', marginBottom: '1rem', borderBottom: '0.4rem solid blue' }}>
                                    <Card.Img variant="top" src={`${course}`} />
                                    <Card.Body>
                                        <Card.Title className='fw-bold'>{list.courseName}</Card.Title>
                                        <Card.Text className='fw-bold'>
                                            {list.teacher}
                                        </Card.Text>
                                        <Button onClick={() => handleShow(list.courseName, list.teacher)} variant="primary">Register</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>You Have Registered For {title}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </div>
    )
}

export default RegisterCourse