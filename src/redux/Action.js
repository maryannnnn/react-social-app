import {ADD_POST, UPDATE_POST, ADD_MESSAGE, UPDATE_MESSAGE} from "./Constant";

export let createActionAddPost = (newText) => {
    return (
        {
            type: ADD_POST,
            text: newText
        }
    )
}

export let createActionUpdatePost = (newText) => {

    return (
        {
            type: UPDATE_POST,
            text: newText
        }
    )
}

export let createActionAddMessage = (newMessage) => {
    return (
        {
            type: ADD_MESSAGE,
            text: newMessage
        }
    )
}

export let createActionUpdateMessage = (newMessage) => {

    return (
        {
            type: UPDATE_MESSAGE,
            text: newMessage
        }
    )
}