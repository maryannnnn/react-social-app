import React from 'react'
import s from '../Diologs/Dialogs.module.css'
import DialogItem from "../Diologs/DialogItem/DialogItem";
import Message from "../Diologs/Message/Message";
import {createActionAddMessage, createActionUpdateMessage} from "../../redux/Action";

const Dialogs = (props) => {
   // debugger

    let dialogsElements = props.dialogsPage.dialogs.map( item => <DialogItem name={item.name} id={item.id} /> )

    let messagesElements = props.dialogsPage.messages.map( item => <Message message={item.message} id={item.id}  />)

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let text = newMessageElement.current.value
        props.addMessage(text)
        // props.addMessage.dispatch(createActionAddMessage(text))
        // newMessageElement.current.value = ''

    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageBody(text)
       // props.updateNewMessageBody.dispatch(createActionUpdateMessage(text));

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }

            </div>
            <div className={s.messages}>
                { messagesElements }

            </div >

            <div>
                <textarea onChange={ onMessageChange }
                          value={ props.dialogsPage.newMessageBody }
                          ref={ newMessageElement } />

            </div>
            <div>
                <button onClick={ addNewMessage } >Add post</button>
            </div>

        </div>
    )
}

export default Dialogs