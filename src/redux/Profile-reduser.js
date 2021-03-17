import {ADD_POST, UPDATE_POST} from "./Constant";

let initialState = {
    posts: [
        {id: 1, message: 'Hi friend', likesCount: 12},
        {id: 2, message: 'Hi friend 2', likesCount: 20},
        {id: 3, message: 'Hi friend 3', likesCount: 10},
        {id: 4, message: 'Hi friend 4', likesCount: 5}
    ],
    newPostText: '1111111111111'
}

export const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let addPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(addPost)
            stateCopy.newPostText = ''

            return stateCopy
        }
        case UPDATE_POST: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.text

            return stateCopy
        }
        default:
            return state
    }
}

