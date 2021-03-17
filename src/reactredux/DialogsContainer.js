import {connect} from "react-redux";
import Dialogs from "../components/Diologs/Dialogs";
import {createActionAddMessage, createActionUpdateMessage} from "../redux/Action";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(createActionUpdateMessage(text))
        },
        addMessage: (text) => {
            dispatch(createActionAddMessage(text))
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer