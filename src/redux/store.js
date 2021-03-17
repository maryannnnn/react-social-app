// import {ADD_POST, UPDATE_POST, ADD_MESSAGE, UPDATE_MESSAGE} from "./Constant";
// import {profileReduser} from "./Profile-reduser";
// import {dialogsReduser} from "./Dialogs-reduser";
// import {sidebarReduser} from "./Sidebar-reduser";
//
// let store = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dasha'},
//                 {id: 2, name: 'Petr'},
//                 {id: 3, name: 'Fedor'},
//                 {id: 4, name: 'Stas'},
//                 {id: 5, name: 'Katy'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi friend'},
//                 {id: 2, message: 'Hi friend 2'},
//                 {id: 3, message: 'Hi friend 3'},
//                 {id: 4, message: 'Hi friend 4'},
//             ],
//             newMessageBody: '22222222222222'
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi friend', likesCount: 12},
//                 {id: 2, message: 'Hi friend 2', likesCount: 20},
//                 {id: 3, message: 'Hi friend 3', likesCount: 10},
//                 {id: 4, message: 'Hi friend 4', likesCount: 5}
//             ],
//             newPostText: '1111111111111'
//         },
//         sidebar: {}
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//         console.log('State change')
//     },
//      subscribe(observe) {
//         this._callSubscriber = observe
//     },
//     dispatch(action) {
//
//         this._state.profilePage = profileReduser(this._state.profilePage,action)
//         this._state.dialogsPage = dialogsReduser(this._state.dialogsPage,action)
//         this._state.sidebar = sidebarReduser(this._state.sidebar, action)
//         this._callSubscriber(this)
//
//         // if(action.type === ADD_POST) {
//         //     let addPost = {
//         //             id: 5,
//         //             message: this._state.profilePage.newPostText,
//         //             likesCount: 0
//         //         }
//         //
//         //         this._state.profilePage.posts.push(addPost)
//         //         this._state.profilePage.newPostText = ''
//         //         this._callSubscriber(this)
//         //
//         // } else if(action.type === UPDATE_POST) {
//         //
//         //     //    alert(action.text)
//         //         this._state.profilePage.newPostText = action.text
//         //         this._callSubscriber(this)
//         //
//         // } else if(action.type === ADD_MESSAGE) {
//         //     let addMessage = {
//         //         id: 5,
//         //         message: this._state.messagesPage.newMessageBody,
//         //     }
//         //
//         //     this._state.messagesPage.messages.push(addMessage)
//         //     this._state.messagesPage.newMessageBody = ''
//         //     this._callSubscriber(this)
//         //
//         // } else if(action.type === UPDATE_MESSAGE) {
//         //
//         //  //   alert(action.text)
//         //     this._state.messagesPage.newMessageBody = action.text
//         //     this._callSubscriber(this)
//         //
//         // }
//     }
// }
//
// export default store