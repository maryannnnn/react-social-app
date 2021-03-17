import React from 'react'
import Post from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'
import {createActionAddPost, createActionUpdatePost} from "../../../redux/Action";

const MyPosts = (props) => {
// debugger

    let postElement = props.profilePage.posts.map( item => <Post message={item.message} likeCount={item.likesCount} />)

    let newPostElement = React.createRef();

    let addNewPost = () => {

        let text = newPostElement.current.value
        props.addPost(text)
        // newPostElement.current.value = ''

    }

    let onPostChange = () => {

        let text = newPostElement.current.value
        props.newUpdatePostText(text)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={ onPostChange }
                          value={ props.profilePage.newPostText }
                          ref={ newPostElement } />

            </div>
            <div>
                <button onClick={ addNewPost} >Add post</button>
            </div>

            <div className={s.posts}>

                { postElement }

            </div>
        </div>
    )
}

export default MyPosts;