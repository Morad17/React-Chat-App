import React, { useRef, useState, useEffect }  from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

import { useAuth } from '../contexts/AuthContexts'
import axios from 'axios'

const Chats = () => {
    const history = useHistory()
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)

    console.log(user)

    const handleLogout = async () => {
        await auth.signOut()

        history.push("/")
    }

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = response.blob()

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg'})
    }

    useEffect(() =>{
        if(!user) {
            history.push('/')

            return
        }

        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id":"3ce98668-f652-4b34-9e98-5c87519a03ae",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData()
                formdata.append('email', user.email)
                formdata.append('username', user.email)
                formdata.append('secret', user.uid)

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name)

                    axios.post('https://api.chatengine.io/users/',
                        formdata,
                        { headers: { "private-key":"84a46049-82e9-4b3a-8642-e1512e439565"}}
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
        })

    }, [user, history])

    if(!user || loading) return 'Loading...'

    return (
        <div>
            <div className="chats-page">
                <div className="nav-bar">
                    <div className="logo-tab">ReactChat</div>
                    <div onClick={handleLogout} className="logout-tab">
                        Logout
                    </div>
                </div>
                <ChatEngine 
                    height="calc(100vh - 66px)"
                    projectID="3ce98668-f652-4b34-9e98-5c87519a03ae"
                    userName={user.email}
                    userSecret={user.uid}
                />
            </div>
        </div>
    )
}

export default Chats
