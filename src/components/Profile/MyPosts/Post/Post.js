import React from 'react'
import s from '../Post/Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.images}>
                <img src='https://sun9-55.userapi.com/c845123/v845123437/1f636b/uU_rgyMrFYQ.jpg'/>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                {props.likeCount}
            </div>

        </div>
    )
}

export default Post;