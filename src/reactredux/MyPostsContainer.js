import {
    createActionAddMessage,
    createActionAddPost,
    createActionUpdateMessage,
    createActionUpdatePost
} from "../redux/Action";
import {connect} from "react-redux";
import MyPosts from "../components/Profile/MyPosts/MyPosts";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newUpdatePostText: (text) => {
            dispatch(createActionUpdatePost(text))
        },
        addPost: (text) => {
            dispatch(createActionAddPost(text))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer