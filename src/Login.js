import { Form, Button, Container } from 'react-bootstrap'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { backend_url } from './env'

function Login() {
    let [err, setErr] = useState('')
    let [{ userId }, setCookie] = useCookies(['userId'])
    let navigate = useNavigate()
    useEffect(() => {
        if (userId) {
            navigate('/profile')
        }
    })
    // eslint-disable-next-line no-unused-vars
    const loginUser = async (response) => {
        let body = {
            email: response.email,
            password: response.id
        }
        let res = await axios.post(`${backend_url}/login`, body)
        let res1 = await res.data
        if (res1.message) {
            setErr(res1.message)
            return
        }
        if (res1) {
            setCookie('userId', res1._id)
            navigate('/profile')
        }
    }

    const mainLogin = async (event) => {
        event.preventDefault()
        let body = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        let res = await axios.post(`${backend_url}/login`, body)
        let response = await res.data
        if (response.message) {
            setErr(response.message)
            return
        }
        if (response) {
            setCookie('userId', response._id)
            navigate('/profile')
        }
    }

    const register = () => {
        navigate('/register')
    }

    return (
        <div>
            <Header />
            <h1 className="text-center">Login To Your Student Account</h1>
            <Container>
                <FacebookLogin
                    appId="3323260307956685"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={loginUser} />,
                <h5 className='text-danger text-center'>{err}</h5>
                <Form onSubmit={mainLogin}>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep Me Signed In" />
                    </Form.Group>
                    <Button onClick={loginUser} variant="primary" type="submit">
                        Login
                    </Button>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h6>Don't have an account? </h6>
                        <Button onClick={register}>
                            Register
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Login