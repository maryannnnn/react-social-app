import {ADD_MESSAGE, UPDATE_MESSAGE} from "./Constant";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dasha'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Fedor'},
        {id: 4, name: 'Stas'},
        {id: 5, name: 'Katy'}
    ],
    messages: [
        {id: 1, message: 'Hi friend'},
        {id: 2, message: 'Hi friend 2'},
        {id: 3, message: 'Hi friend 3'},
        {id: 4, message: 'Hi friend 4'},
    ],
    newMessageBody: '22222222222222'
}

export const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let addMessage = {
                id: 5,
                message: state.newMessageBody,
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(addMessage)
            stateCopy.newMessageBody = ''
            return stateCopy
        }
        case UPDATE_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.newMessageBody = action.text

            return stateCopy
        }
        default:
            return state

    }
}

