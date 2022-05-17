import ProfileHeader from "./components/ProfileHeader"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import ProfileBody from "./components/ProfileBody"


function Profile() {
    let navigate = useNavigate()
    let [{ userId }] = useCookies()

    useEffect(() => {
        if (!userId) {
            navigate('/login')
        }
    })

    return (
        <div>
            <ProfileHeader />
            <ProfileBody />
        </div>
    )
}

export default Profile