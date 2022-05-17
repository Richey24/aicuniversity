import Footer from "./components/Footer"
import Header from "./components/Header"
import course from './img/course.jpeg'
import './App.css'
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { courseList } from "./utils/courselist"
import { useState } from "react"
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Course() {
    let [{ userId }] = useCookies()
    let navigate = useNavigate()
    let [lists, setLists] = useState(courseList)
    let [single, setSingle] = useState("")
    let [err, setErr] = useState("")

    const filterList = (event) => {
        if (lists.length === courseList.length) {
            setSingle(event.target.value)
        } else {
            setLists(courseList)
        }
    }

    const getList = () => {
        let newList = lists.filter((list) => list.courseName.includes(single.toUpperCase()))
        if (newList.length > 0) {
            setLists(newList)
            setErr('')
        } else {
            setErr("No Course Found")
        }
    }

    const read = () => {
        if (userId) {
            navigate('/profile')
        } else {
            navigate('/login')
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
                <Button onClick={getList} variant="outline-secondary" id="button-addon2">
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
                                        <Button onClick={read} variant="primary">Read</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default Course