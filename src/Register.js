import { Form, Button, Container } from 'react-bootstrap'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { backend_url } from './env'


function Register() {
    let [err, setErr] = useState('')
    let navigate = useNavigate()

    let [{ userId }, setCookie] = useCookies(['userId'])
    useEffect(() => {
        if (userId) {
            navigate('/profile')
        }
    })

    // eslint-disable-next-line no-unused-vars
    const registerUser = async (response) => {
        let body = {
            name: response.name,
            image: response.picture.data.url,
            email: response.email,
            password: response.id
        }
        let res = await axios.post(`${backend_url}/register`, body)
        let res1 = await res.data
        if (res1.message) {
            setErr(res1.message)
            return
        }
        console.log(res1);
        if (res1) {
            setCookie('userId', res1._id)
            navigate('/profileform')
        }
    }

    const normalRegister = async (event) => {
        event.preventDefault()
        let image = new FormData()
        if (event.target[2].files[0]) {
            image.append("image", event.target[2].files[0], event.target[2].files[0].name)
            await axios.post(`${backend_url}/upload`, image)
        }
        let body = {
            name: event.target[0].value + ' ' + event.target[1].value,
            image: event.target[2].files[0] ? event.target[2].files[0].name : '',
            email: event.target[3].value,
            password: event.target[4].value
        }
        let res = await axios.post(`${backend_url}/register`, body)
        let response = await res.data
        if (response.message) {
            setErr(response.message)
            return
        }
        if (response) {
            setCookie('userId', response._id)
            navigate('/profileform')
        }
    }

    const login = () => {
        navigate('/login')
    }

    return (
        <div>
            <Header />
            <h1 className="text-center">Register As A Student</h1>
            <Container>
                <FacebookLogin
                    appId="3323260307956685"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={registerUser} />,
                <h5 className='text-danger text-center'>{err}</h5>
                <Form onSubmit={normalRegister}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Your Photo</Form.Label>
                        <Form.Control name='dp' type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h6>Already have an account? </h6>
                    <Button onClick={login}>
                        Login
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Register