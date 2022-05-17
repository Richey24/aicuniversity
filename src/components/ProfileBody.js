import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { backend_url } from '../env'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'
import '../App.css'
function ProfileBody() {
    const [person, setPerson] = useState({})
    let [{ userId }] = useCookies()
    useEffect(() => {
        const getUser = async () => {
            let user = await axios.post(`${backend_url}/get`, { id: userId })
            let oneUser = await user.data
            setPerson(oneUser)
        }
        getUser()
    }, [userId])
    return (
        <div>
            <div className='imageDiv'>
                {
                    person.image ? (<img className='profileImage' src={person.image.length > 25 ? person.image : `${backend_url}/image/${person.image}`} alt="Profile_Image" />) : null
                }
            </div>
            <div className='details'>
                <h4>{person.name}</h4>
                <h4>{person.email}</h4>
                <h4>{person.number}</h4>
                <h4>{person.country}</h4>
                <h4>{person.state}</h4>
            </div>
            <br />
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                <h2>Registered Courses</h2>
                <Button><Link style={{ textDecoration: 'none', color: 'white' }} to={`/registercourse`}>Register New Course</Link></Button>
            </div>
            <div className='register'>
                {
                    person.course !== undefined ? (
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Course Title</th>
                                        <th>Teacher</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        person.course.map((single, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{i}</td>
                                                    <td>{single.course}</td>
                                                    <td>{single.teacher}</td>
                                                    <td><Button variant='success'>Read</Button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </>
                    ) : (<div>
                        <hr />
                        <h3>Your have not registered for any courses yet</h3>
                        <Button>Click Here To Register</Button>
                    </div>)
                }
            </div>
            <br />
            <hr />
            <div className='recent'>
                <h2>Recent Activities</h2>
                <hr />
                {
                    person.course !== undefined ? person.course.map((single, i) => {
                        return (
                            <div key={i}>
                                <h6>Your Registered For {single.course}</h6>
                                <hr />
                            </div>
                        )
                    }).reverse() : null
                }
                <h6>Your created your student profile on {person.created_at}</h6>
            </div>
        </div>
    )
}

export default ProfileBody