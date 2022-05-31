import ProfileHeader from "./components/ProfileHeader"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import ProfileBody from "./components/ProfileBody"


function Profile() {
    let navigate = useNavigate()
    let [{ userId }] = useCookies()

    const hide = () => {
        let main = document.getElementById("main")
        if (main.style.opacity === "0") {
            main.style.transition = 'opacity 0.5s ease-in'
            main.style.height = "auto"
            main.style.opacity = "1"
        } else {
            main.style.transition = 'opacity 0.5s ease-out'
            main.style.opacity = "0"
            main.style.height = "0"
        }
    }

    useEffect(() => {
        if (!userId) {
            navigate('/login')
        }
    })

    return (
        <div>
            <ProfileHeader hide={hide} />
            <div id="main">
                <ProfileBody />
            </div>
        </div>
    )
}

export default Profile