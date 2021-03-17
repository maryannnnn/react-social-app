import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profiileinfo/Profileinfo";
import MyPostsContainer from "../../reactredux/MyPostsContainer";
//import s from '../Profile/Profile.module.css'

const Profile = (props) => {

    return (
        <div>
            <Profileinfo />
            <MyPostsContainer store={props.store} />

        </div>
    )
}

export default Profile;